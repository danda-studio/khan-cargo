export const locales = ["az", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "az";

export const localeLabels: Record<Locale, string> = {
  az: "Azərbaycan",
  en: "English",
  ru: "Русский",
};

export const dictionary = {
  az: {
    nav: {
      services: "Xidmətlər",
      delivery: "Çatdırılma üsulları",
      company: "Şirkət",
      contacts: "Əlaqə məlumatları",
      cta: "Dəyəri hesablayın",
    },
    hero: {
      subtitle: "Khan Cargo beynəlxalq yükdaşımalarını sürətli, təhlükəsiz və sərfəli şəkildə həyata keçirir",
      title: "Azərbaycan, Türkiyə və Çin arasında etibarlı yükdaşıma xidmətləri",
      cta: "Dəyəri hesablayın",
      bullet: "Türkiyə, Çin arasında tam dövrəli logistika xidmətləri göstəririk.",
    },
    problems: {
      eyebrow: "Problemlər",
      title: "Nəqliyyat nə üçün biznes riskinə çevrilir?",
      caption: "Biz elə bir proses yaratmışıq ki, həmin problemlər orada mövcud deyil.",
      items: [
        { title: "Birdəfəlik daşıyıcılar", description: "Hər səfər lotereyaya çevrilir və gizli risklər daşıyır." },
        { title: "İdarəetmənin itirilməsi", description: "Tranzitdə olan yükün statusu və dəqiq yeri sirr olaraq qalır." },
        { title: "Gizli şərtlər", description: "İş şəraiti mürəkkəbdir və tariflər daim dəyişir." },
        { title: "Təchizatda fasilələr", description: "Nəqliyyat gecikmələri prosesləri ləngidir və biznes gəlirlərinə zərbə vurur." },
      ],
    },
    solutions: {
      eyebrow: "Həll",
      title: "Biz daşınmaya tam nəzarəti öz üzərimizə götürürük",
      subtitle: "Biz yalnız çatdırılmanı təşkil etmirik — daşınmanın seçilməsindən boşaldılmasına qədər bütün prosesi idarə edirik və sizi hər mərhələdə məlumatlandırırıq.",
      items: [
        { title: "Nəqliyyat vasitəsinin seçimi və səfər koordinasiyası", description: "Sürücünü və nəqliyyat vasitəsini konkret tapşırıq, marşrut və yük spesifikasiyalarına uyğun olaraq seçirik. Sorğu dəyişərsə, şərtləri dərhal tənzimləyir, lazım olduqda marşrutu dəyişir və lazım olduqda əlavə yüklərin daşınmasını təşkil edirik." },
        { title: "Daşınma zamanı monitorinq", description: "Sürücü ilə əlaqə saxlayırıq və marşrut boyunca irəliləyişi izləyirik. Nəqliyyat vasitəsi cədvəldən geri qalarsa, çatma vaxtı dəyişərsə və ya gözlənilməz bir problem yaranarsa, müştəriyə məlumat veririk və məsələni dərhal həll edirik." },
        { title: "Yükləmə prosesinin təşkili", description: "Biz paylama mərkəzlərində qeydiyyatı həyata keçiririk və sürücü, anbar və yükləmə məntəqələrini əlaqələndiririk. Əgər marşrut birdən çox yeri əhatə edirsə, biz onları sinxronizasiya edirik və gecikmələrdən tutmuş qablaşdırma və ya yükün vəziyyəti ilə bağlı narahatlıqlara qədər hər hansı bir problemi proaktiv şəkildə həll edirik." },
        { title: "Malların qebulu ve bağlanması", description: "Biz boşaltma işlərinə nəzarət edirik, qəbul statusu barədə yeniliklər təqdim edirik və yekun sənədləri əldə edirik. Gözləməli, geri qaytarılmanı emal etməli və ya problemi yerində həll etməli olduğumuz təqdirdə, məsələ tam həll olunana qədər prosesdə iştirak edirik." },
      ],
    },
    stats: {
      eyebrow: "Şirkət haqqında",
      titleHighlight: "Biz Azərbaycan daxilində",
      titleRest: " və beynəlxalq səviyyədə — sifarişdən çatdırılmaya qədər — daşımaları həyata keçiririk.",
      paragraph: "Biz müştərinin biznes proseslərinə çevik şəkildə uyğunlaşırıq və başlanğıcda uzunmüddətli öhdəliklər tələb etmirik. Xidmətimizin keyfiyyətini və sürətini birbaşa qiymətləndirmək üçün tək bir sınaq göndərişini sifariş etməklə başlaya bilərsiniz.",
      cta: "Sınağ sifariş edin",
      mapAlt: "Azərbaycan xəritəsi",
      items: [
        { value: "500+", label: "2026-cı ildə nəqliyyat əməliyyatları" },
        { value: "50+", label: "Şəhərlər əhatə olunub" },
        { value: "5", label: "Komandanın illərlə təcrübəsi" },
        { value: "100%", label: "Vaxtında çatdırılmalar" },
      ],
    },
    reviews: {
      eyebrow: "Rəylər",
      title: "Müştərilərimizin rəyləri",
      cta: "Müştəri olun",
      items: [
        { quote: "Biz bu nəqliyyat şirkəti ilə müştəri kimi işləyirik və tərəfdaşlıqdan tamamilə məmnunuq. Onların logistika mütəxəssisləri həmişə əlçatandır, istənilən sorğuya tez cavab verir və əməliyyat məsələlərini tez və peşəkarcasına həll edirlər. Komanda məsuliyyətli, ədalətli və etibarlıdır. Daşınmalar lazımsız problemlər və gecikmələr olmadan vaxtında həyata keçirilir. Müştərilərinə həqiqətən dəyər verən və işlərinə tam sadiq olan insanlarla işləmək xoşdur. Onlarla işləməyi tövsiyə edirik!", authorName: "Maria", authorInitial: "М", company: "\"Solid\" MMC" },
        { quote: "Biz bu şirkətlə yarandığı gündən bəri işləyirik. Komanda peşəkardır, daşınma prosesinin hər mərhələsində dəstək verir və ən optimal marşrutları və səmərəli qiymətləri seçir. Mən mütləq onlarla işləməyi tövsiyə edirəm.", authorName: "Əli", authorInitial: "Ə", company: "\"Medalleya\" MMC" },
      ],
    },
    ctaForm: {
      title: "Daşınma xərclərini sizin xüsusi tələbləriniz əsasında hesablayacağıq",
      subtitle: "Qiymət yükün xüsusiyyətlərindən və marşrutdan asılıdır.",
      modalTitle: "Dəyəri hesablayın",
      modalSubtitle: "Formu doldurun; biz sizinlə əlaqə saxlayacaq və çatdırılma qiymətini hesablayacağıq.",
      nameLabel: "adınız",
      phoneLabel: "+994 00-000-00-00",
      pickupLabel: "Çatdırılma haradan həyata keçirilir?",
      cargoLabel: "Yük növü",
      consent: "Şəxsi məlumatlarımın emalına razılıq verir və Məxfilik Siyasətini qəbul edirəm.",
      submit: "Sorğu göndərin",
      submitting: "Göndərilir...",
      success: "Sorğunuz qəbul edildi",
      note: "İş günü ərzində sizinlə əlaqə saxlayacağıq",
      error: "Göndərmə alınmadı. Bir az sonra yenidən cəhd edin.",
      errors: {
        name: "Adınızı daxil edin",
        phoneCode: "Ölkə kodunu seçin",
        phone: "Telefon nömrəsini tam daxil edin",
        pickup: "Çatdırılma yerini qeyd edin",
        cargo: "Yük növünü qeyd edin",
        consent: "Şərtləri qəbul etməlisiniz",
      },
    },
    footer: {
      eyebrow: "Əlaqə məlumatları",
      title: "Bizimlə başlayın",
      contactCard: "Əlaqə",
      addressCard: "Abşeron T/M sıra 2, korpus 2, Mağaza 10",
      phone: "(+994) 70 210 10 39",
      email: "info@khan.az",
      legalNotice: "Bu saytdan istifadəni davam etdirməklə, siz kukilərin istifadəsinə razılıq verirsiniz. Bu sayt açıq oferta hesab olunmur.",
      privacyPolicy: "Məxfilik Siyasəti",
      dataConsent: "Fərdi məlumatların emalına razılıq",
      credit: "Veb-saytların hazırlanması",
    },
  },
  en: {
    nav: {
      services: "Services",
      delivery: "Delivery methods",
      company: "Company",
      contacts: "Contacts",
      cta: "Calculate the cost",
    },
    hero: {
      subtitle: "Khan Cargo handles international freight quickly, safely, and cost-effectively",
      title: "Reliable freight shipping between Azerbaijan, Turkey and China",
      cta: "Calculate the cost",
      bullet: "We provide full-cycle logistics services between Turkey and China.",
    },
    problems: {
      eyebrow: "Problems",
      title: "Why does transportation turn into a business risk?",
      caption: "We've built a process where those problems simply don't exist.",
      items: [
        { title: "One-off carriers", description: "Every trip becomes a lottery and carries hidden risks." },
        { title: "Loss of control", description: "The status and exact location of cargo in transit remain a mystery." },
        { title: "Hidden terms", description: "Working conditions are complex and rates keep changing." },
        { title: "Supply disruptions", description: "Transport delays slow down processes and hit business revenue." },
      ],
    },
    solutions: {
      eyebrow: "Solution",
      title: "We take full control of your shipment",
      subtitle: "We don't just arrange delivery — we manage the entire process from choosing the shipment to unloading, and keep you informed at every stage.",
      items: [
        { title: "Vehicle selection and trip coordination", description: "We select the driver and vehicle to match the specific task, route, and cargo specifications. If the request changes, we adjust the terms immediately, change the route when needed, and arrange transport of additional cargo if required." },
        { title: "Monitoring in transit", description: "We stay in contact with the driver and track progress along the route. If the vehicle falls behind schedule, the arrival time changes, or an unexpected issue arises, we notify the customer and resolve the matter right away." },
        { title: "Organizing the loading process", description: "We handle check-in at distribution centers and coordinate the driver, warehouse, and loading points. If the route covers more than one location, we synchronize them and proactively resolve any issue — from delays to concerns about packaging or cargo condition." },
        { title: "Receiving and closing out goods", description: "We oversee unloading, provide updates on receiving status, and obtain the final documents. If we need to wait, process a return, or resolve an issue on site, we stay involved until the matter is fully resolved." },
      ],
    },
    stats: {
      eyebrow: "About the company",
      titleHighlight: "We operate within Azerbaijan",
      titleRest: " and internationally — from order to delivery — handling shipments end to end.",
      paragraph: "We adapt flexibly to the customer's business processes and don't require long-term commitments upfront. You can start by ordering a single trial shipment to evaluate the quality and speed of our service firsthand.",
      cta: "Order a trial shipment",
      mapAlt: "Map of Azerbaijan",
      items: [
        { value: "500+", label: "Transport operations in 2026" },
        { value: "50+", label: "Cities covered" },
        { value: "5", label: "Years of team experience" },
        { value: "100%", label: "On-time deliveries" },
      ],
    },
    reviews: {
      eyebrow: "Reviews",
      title: "What our customers say",
      cta: "Become a customer",
      items: [
        { quote: "We work with this transport company as a customer and are fully satisfied with the partnership. Their logistics specialists are always reachable, respond quickly to any request, and handle operational matters swiftly and professionally. The team is responsible, fair, and reliable. Shipments arrive on time without unnecessary problems or delays. It's a pleasure working with people who genuinely value their customers and are fully committed to their work. We recommend working with them!", authorName: "Maria", authorInitial: "M", company: "\"Solid\" LLC" },
        { quote: "We've been working with this company since it was founded. The team is professional, supports every stage of the shipping process, and selects the most optimal routes and cost-effective rates. I definitely recommend working with them.", authorName: "Ali", authorInitial: "A", company: "\"Medalleya\" LLC" },
      ],
    },
    ctaForm: {
      title: "We'll calculate your shipping cost based on your specific requirements",
      subtitle: "The price depends on the cargo's characteristics and the route.",
      modalTitle: "Calculate the cost",
      modalSubtitle: "Fill in the form and we'll get in touch to calculate your shipping cost.",
      nameLabel: "your name",
      phoneLabel: "+994 00-000-00-00",
      pickupLabel: "Where is the shipment picked up from?",
      cargoLabel: "Cargo type",
      consent: "I consent to the processing of my personal data and accept the Privacy Policy.",
      submit: "Send request",
      submitting: "Sending...",
      success: "Your request has been received",
      note: "We'll contact you within one business day",
      error: "Something went wrong. Please try again later.",
      errors: {
        name: "Please enter your name",
        phoneCode: "Select a country code",
        phone: "Enter a complete phone number",
        pickup: "Enter the pickup location",
        cargo: "Enter the cargo type",
        consent: "You must accept the terms",
      },
    },
    footer: {
      eyebrow: "Contacts",
      title: "Get started with us",
      contactCard: "Contact",
      addressCard: "Absheron Shopping Mall, row 2, block 2, Store 10",
      phone: "(+994) 70 210 10 39",
      email: "info@khan.az",
      legalNotice: "By continuing to use this site, you agree to the use of cookies. This site is not considered a public offer.",
      privacyPolicy: "Privacy Policy",
      dataConsent: "Consent to personal data processing",
      credit: "Website development",
    },
  },
  ru: {
    nav: {
      services: "Услуги",
      delivery: "Способы доставки",
      company: "Компания",
      contacts: "Контакты",
      cta: "Рассчитать стоимость",
    },
    hero: {
      subtitle: "Khan Cargo выполняет международные грузоперевозки быстро, безопасно и выгодно",
      title: "Надёжные грузоперевозки между Азербайджаном, Турцией и Китаем",
      cta: "Рассчитать стоимость",
      bullet: "Предоставляем полный цикл логистических услуг между Турцией и Китаем.",
    },
    problems: {
      eyebrow: "Проблемы",
      title: "Почему перевозка становится бизнес-риском?",
      caption: "Мы выстроили процесс, в котором этих проблем просто нет.",
      items: [
        { title: "Разовые перевозчики", description: "Каждая поездка превращается в лотерею и несёт скрытые риски." },
        { title: "Потеря контроля", description: "Статус и точное местонахождение груза в пути остаются загадкой." },
        { title: "Скрытые условия", description: "Условия работы сложные, а тарифы постоянно меняются." },
        { title: "Сбои в поставках", description: "Задержки транспорта тормозят процессы и бьют по выручке бизнеса." },
      ],
    },
    solutions: {
      eyebrow: "Решение",
      title: "Мы берём полный контроль над вашей перевозкой",
      subtitle: "Мы не просто организуем доставку — управляем всем процессом от выбора перевозки до разгрузки и информируем вас на каждом этапе.",
      items: [
        { title: "Подбор транспорта и координация рейса", description: "Подбираем водителя и транспорт под конкретную задачу, маршрут и характеристики груза. Если запрос меняется, сразу корректируем условия, при необходимости меняем маршрут и организуем перевозку дополнительного груза." },
        { title: "Мониторинг в пути", description: "Поддерживаем связь с водителем и отслеживаем движение по маршруту. Если транспорт отстаёт от графика, меняется время прибытия или возникает непредвиденная ситуация — уведомляем клиента и сразу решаем вопрос." },
        { title: "Организация погрузки", description: "Оформляем заезд на распределительные центры и координируем водителя, склад и точки погрузки. Если маршрут включает несколько адресов, синхронизируем их и заранее решаем любые вопросы — от задержек до состояния упаковки и груза." },
        { title: "Приёмка и закрытие груза", description: "Контролируем разгрузку, сообщаем статус приёмки и получаем итоговые документы. Если нужно подождать, оформить возврат или решить вопрос на месте — остаёмся в процессе до полного закрытия." },
      ],
    },
    stats: {
      eyebrow: "О компании",
      titleHighlight: "Мы работаем по Азербайджану",
      titleRest: " и на международном уровне — от заказа до доставки — ведём перевозки под ключ.",
      paragraph: "Гибко подстраиваемся под бизнес-процессы клиента и не требуем долгосрочных обязательств на старте. Можно начать с одной пробной отправки, чтобы оценить качество и скорость сервиса.",
      cta: "Заказать пробную перевозку",
      mapAlt: "Карта Азербайджана",
      items: [
        { value: "500+", label: "Транспортных операций в 2026 году" },
        { value: "50+", label: "Городов в охвате" },
        { value: "5", label: "Лет опыта команды" },
        { value: "100%", label: "Доставок вовремя" },
      ],
    },
    reviews: {
      eyebrow: "Отзывы",
      title: "Отзывы наших клиентов",
      cta: "Стать клиентом",
      items: [
        { quote: "Работаем с этой транспортной компанией как клиент и полностью довольны партнёрством. Их логисты всегда на связи, быстро отвечают на любые запросы и оперативно и профессионально решают рабочие вопросы. Команда ответственная, честная и надёжная. Перевозки выполняются вовремя без лишних проблем и задержек. Приятно работать с людьми, которые действительно ценят клиентов и полностью отдаются делу. Рекомендуем сотрудничество!", authorName: "Мария", authorInitial: "М", company: "ООО «Solid»" },
        { quote: "Сотрудничаем с этой компанией с момента её основания. Команда профессиональная, сопровождает каждый этап перевозки и подбирает оптимальные маршруты и выгодные тарифы. Однозначно рекомендую работать с ними.", authorName: "Али", authorInitial: "А", company: "ООО «Medalleya»" },
      ],
    },
    ctaForm: {
      title: "Рассчитаем стоимость перевозки под ваши требования",
      subtitle: "Цена зависит от характеристик груза и маршрута.",
      modalTitle: "Рассчитать стоимость",
      modalSubtitle: "Заполните форму — мы свяжемся с вами и рассчитаем стоимость доставки.",
      nameLabel: "ваше имя",
      phoneLabel: "+994 00-000-00-00",
      pickupLabel: "Откуда осуществляется отправка?",
      cargoLabel: "Тип груза",
      consent: "Даю согласие на обработку персональных данных и принимаю Политику конфиденциальности.",
      submit: "Отправить заявку",
      submitting: "Отправка...",
      success: "Ваша заявка принята",
      note: "Мы свяжемся с вами в течение рабочего дня",
      error: "Не удалось отправить. Попробуйте позже.",
      errors: {
        name: "Введите ваше имя",
        phoneCode: "Выберите код страны",
        phone: "Введите полный номер телефона",
        pickup: "Укажите место отправки",
        cargo: "Укажите тип груза",
        consent: "Необходимо принять условия",
      },
    },
    footer: {
      eyebrow: "Контакты",
      title: "Начните с нами",
      contactCard: "Связь",
      addressCard: "Absheron T/M, ряд 2, корпус 2, магазин 10",
      phone: "(+994) 70 210 10 39",
      email: "info@khan.az",
      legalNotice: "Продолжая пользоваться сайтом, вы соглашаетесь с использованием cookie. Сайт не является публичной офертой.",
      privacyPolicy: "Политика конфиденциальности",
      dataConsent: "Согласие на обработку персональных данных",
      credit: "Разработка сайтов",
    },
  },
} satisfies Record<Locale, Dictionary>;

export interface Dictionary {
  nav: { services: string; delivery: string; company: string; contacts: string; cta: string };
  hero: { subtitle: string; title: string; cta: string; bullet: string };
  problems: {
    eyebrow: string;
    title: string;
    caption: string;
    items: { title: string; description: string }[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  stats: {
    eyebrow: string;
    titleHighlight: string;
    titleRest: string;
    paragraph: string;
    cta: string;
    mapAlt: string;
    items: { value: string; label: string }[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    cta: string;
    items: { quote: string; authorName: string; authorInitial: string; company: string }[];
  };
  ctaForm: {
    title: string;
    subtitle: string;
    modalTitle: string;
    modalSubtitle: string;
    nameLabel: string;
    phoneLabel: string;
    pickupLabel: string;
    cargoLabel: string;
    consent: string;
    submit: string;
    submitting: string;
    success: string;
    note: string;
    error: string;
    errors: {
      name: string;
      phoneCode: string;
      phone: string;
      pickup: string;
      cargo: string;
      consent: string;
    };
  };
  footer: {
    eyebrow: string;
    title: string;
    contactCard: string;
    addressCard: string;
    phone: string;
    email: string;
    legalNotice: string;
    privacyPolicy: string;
    dataConsent: string;
    credit: string;
  };
}
