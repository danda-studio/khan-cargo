using Khan_cargo.Data;
using Khan_cargo.Services;
using Khan_cargo.Services.Models;
using Khan_cargo.Services.TurnstileService;
using Microsoft.EntityFrameworkCore; 
using Scalar.AspNetCore;
using System.Threading.RateLimiting;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
}


builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.Configure<WASettings>(builder.Configuration.GetSection("WASettings"));

builder.Services.AddScoped<IContactService, ContactService>();
builder.Services.Configure<RateLimitSettings>(builder.Configuration.GetSection("RateLimits"));
builder.Services.Configure<TurnstileSettings>(builder.Configuration.GetSection("Turnstile"));
builder.Services.AddHttpClient<ITurnstileService, TurnstileService>();
builder.Services.AddScoped<ContactRateLimiter>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("https://danda-studio.github.io", "https://rcc-hrmo.vercel.app")
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials();
    });

    options.AddPolicy("AllowLocalhost3000", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

builder.Services.AddRateLimiter(options =>
{
    options.AddPolicy("CountryCodesLimit", httpContext =>
    {
        var ip = httpContext.Connection.RemoteIpAddress?.ToString() ?? "unknown";

        return RateLimitPartition.GetSlidingWindowLimiter(ip, _ => new SlidingWindowRateLimiterOptions
        {
            PermitLimit = 10,                    
            Window = TimeSpan.FromMinutes(30),   
            SegmentsPerWindow = 3,          
            QueueLimit = 0
        });
    });

    options.OnRejected = async (context, token) =>
    {
        context.HttpContext.Response.StatusCode = StatusCodes.Status429TooManyRequests;
        await context.HttpContext.Response.WriteAsJsonAsync(new { message = "Слишком много запросов, попробуйте позже" }, cancellationToken: token);
    };
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseCors("AllowLocalhost3000");
    app.UseSwagger();
    app.MapScalarApiReference(options =>
    {
        options.OpenApiRoutePattern = "/swagger/v1/swagger.json";
        options.Title = "Cargo API Documentation";
    });

    app.MapGet("/", context => 
    {
        context.Response.Redirect("/scalar");
        return Task.CompletedTask;
    });
}
else
{
    app.UseCors("AllowSpecificOrigin");
    app.MapGet("/", () => "Cargo API is running");
}

app.UseHttpsRedirection();

app.MapControllers();
app.Run();
