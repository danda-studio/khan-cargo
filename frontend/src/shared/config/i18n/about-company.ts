/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

export type AboutCompanyDict = {
  meta: { title: string; description: string };
  hero: {
    titleBefore: string;
    titleAccent: string;
    lead: string;
    leadMuted: string;
    cta: string;
    ctaMobile: string;
  };
  problem: {
    eyebrow: string;
    body: string;
    solution: string;
    cta: string;
  };
  stats: { value: string; label: string; slashes: number }[];
  why: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  banner: {
    title: string;
    lead: string;
    call: string;
    write: string;
  };
};

export const aboutCompanyByLocale = {
  az: {
    meta: {
      title: "Şirkət haqqında | Khan Cargo",
      description:
        "Khan Cargo — Çindən və Türkiyədən Azərbaycana topdan yükdaşıma: anbar, sığorta, gömrük və yerli çatdırılma.",
    },
    hero: {
      titleBefore: "Çindən və ya Türkiyədən mal alırsınız — ",
      titleAccent: "çatdırılma bizim işimizdir",
      lead: "Khan Cargo 2020-ci ildən Çindən və Türkiyədən Azərbaycana topdan yükdaşıma xidməti göstərir.",
      leadMuted: "5 il ərzində 500-dən çox kommersiya yükü çatdırdıq.",
      cta: "Konsultasiya alın",
      ctaMobile: "Dəyəri hesablayın",
    },
    problem: {
      eyebrow: "Problem",
      body: "Çindən topdan idxal edən müştərilərin çoxu eyni problemlə üzləşir: mal yola çıxandan sonra mallarının harada olduğunu bilmirlər. Gömrükdə gözlənilməz xərclər yaranır. Yük zədəli gəlir, amma məsuliyyət heç kimdə olmur.",
      solution:
        "Bu problemi həll etmək üçün işləyirik — sifarişdən çatdırılmaya qədər hər mərhələni öz üzərimizə götürürük.",
      cta: "Sınaq göndərişi sifariş edin",
    },
    stats: [
      { value: "500+", label: "çatdırılma 5 il ərzində", slashes: 1 },
      { value: "50+", label: "şəhərə aktiv çatdırılma", slashes: 2 },
      { value: "5", label: "Komandanın illərlə təcrübəsi", slashes: 3 },
      { value: "100%", label: "sığorta hər yük üçün", slashes: 4 },
    ],
    why: {
      eyebrow: "Üstünlüklər",
      title: "Niyə Khan Cargo?",
      items: [
        {
          title: "Çin və Türkiyədə öz Anbarlarımız",
          body: "Malınız istehsalçıdan çıxandan bizim anbara daxil olur. Qəbul edirik, yoxlayırıq, qablaşdırırıq. Siz Bakıda hazır yükü götürürsünüz. Aralıqdakı problemlər sizin masanıza gəlmir.",
        },
        {
          title: "Tam Yük Sığortası",
          body: "Bütün daşınan yüklər sığortalanır. Tranzit zamanı yaranan hər hansısa zərər sığorta hesabına ödənilir. Malınız zədələnsə, zərər çəkmirsiniz.",
        },
        {
          title: "Gömrük Rəsmiləşdirilməsi — Sonuna Qədər",
          body: "Bəyannamə, idxal sənədləri, gömrük ödənişləri: bunların hamısını biz həll edirik. Azərbaycan qanunvericiliyinə uyğun, tam rəsmi. Prosesdə gözlənilməz xərc olmur.",
        },
        {
          title: "50+ Şəhərə Çatdırılma",
          body: "Yalnız Bakıya çatdırmırıq. Azərbaycanın 50-dən çox şəhərinə yükdaşıma xidmətləri göstəririk.",
        },
      ],
    },
    banner: {
      title: "Çindən və ya Türkiyədən yük daşımaq istəyirsiniz?",
      lead: "Əlaqə saxlayın — marşrut, müddət və xərci birlikdə hesablayaq.",
      call: "Zəng edin +994 70 210 10 39",
      write: "Yazın info@khan-cargo.com",
    },
  },
  en: {
    meta: {
      title: "About the company | Khan Cargo",
      description:
        "Khan Cargo — wholesale shipping from China and Turkey to Azerbaijan: warehouse, insurance, customs, and local delivery.",
    },
    hero: {
      titleBefore: "Buying goods from China or Turkey — ",
      titleAccent: "delivery is our job",
      lead: "Since 2020 Khan Cargo has been providing wholesale freight from China and Turkey to Azerbaijan.",
      leadMuted: "In 5 years we delivered 500+ commercial shipments.",
      cta: "Get a consultation",
      ctaMobile: "Calculate the cost",
    },
    problem: {
      eyebrow: "Problem",
      body: "Most wholesale importers from China face the same issues: once goods leave, they don’t know where they are. Unexpected customs costs appear. Cargo arrives damaged and no one takes responsibility.",
      solution:
        "We work to solve that — we take every stage from order to delivery onto ourselves.",
      cta: "Place a trial order",
    },
    stats: [
      { value: "500+", label: "deliveries in 5 years", slashes: 1 },
      { value: "50+", label: "cities with active delivery", slashes: 2 },
      { value: "5", label: "Years of team experience", slashes: 3 },
      { value: "100%", label: "insurance on every shipment", slashes: 4 },
    ],
    why: {
      eyebrow: "Advantages",
      title: "Why Khan Cargo?",
      items: [
        {
          title: "Our own warehouses in China and Turkey",
          body: "Your goods go from the manufacturer into our warehouse. We receive, inspect, and pack. You pick up ready cargo in Baku. Mid-route problems never land on your desk.",
        },
        {
          title: "Full cargo insurance",
          body: "Every shipment is insured. Any transit damage is covered by insurance — you don’t bear the loss.",
        },
        {
          title: "Customs clearance — end to end",
          body: "Declaration, import docs, customs fees — we handle it all, fully official under Azerbaijani law. No surprise costs mid-process.",
        },
        {
          title: "Delivery to 50+ cities",
          body: "We don’t only deliver to Baku. We ship to more than 50 cities across Azerbaijan.",
        },
      ],
    },
    banner: {
      title: "Want to ship cargo from China or Turkey?",
      lead: "Get in touch — we’ll calculate the route, timing, and cost together.",
      call: "Call +994 70 210 10 39",
      write: "Write info@khan-cargo.com",
    },
  },
  ru: {
    meta: {
      title: "О компании | Khan Cargo",
      description:
        "Khan Cargo — оптовые перевозки из Китая и Турции в Азербайджан: склад, страховка, таможня и локальная доставка.",
    },
    hero: {
      titleBefore: "Покупаете товар из Китая или Турции — ",
      titleAccent: "доставка наше дело",
      lead: "С 2020 года Khan Cargo возит оптовые грузы из Китая и Турции в Азербайджан.",
      leadMuted: "За 5 лет доставили более 500 коммерческих партий.",
      cta: "Получить консультацию",
      ctaMobile: "Рассчитать стоимость",
    },
    problem: {
      eyebrow: "Проблема",
      body: "Большинство оптовых импортёров из Китая сталкиваются с одним и тем же: после отправки не знают, где товар. На таможне появляются неожиданные расходы. Груз приходит повреждённым — и никто не отвечает.",
      solution:
        "Мы работаем, чтобы решить эту проблему — берём на себя каждый этап от заказа до выдачи.",
      cta: "Оформить пробный заказ",
    },
    stats: [
      { value: "500+", label: "доставок за 5 лет", slashes: 1 },
      { value: "50+", label: "городов с активной доставкой", slashes: 2 },
      { value: "5", label: "Лет опыта команды", slashes: 3 },
      { value: "100%", label: "страховка на каждый груз", slashes: 4 },
    ],
    why: {
      eyebrow: "Преимущества",
      title: "Почему Khan Cargo?",
      items: [
        {
          title: "Свои склады в Китае и Турции",
          body: "Товар от производителя попадает на наш склад. Принимаем, проверяем, упаковываем. В Баку вы забираете готовый груз. Промежуточные проблемы до вашего стола не доходят.",
        },
        {
          title: "Полная страховка груза",
          body: "Все перевозки застрахованы. Ущерб в транзите покрывает страховка — вы не несёте потери.",
        },
        {
          title: "Таможенное оформление — до конца",
          body: "Декларация, импортные документы, пошлины — всё берём на себя, официально по законодательству Азербайджана. Без неожиданных расходов в процессе.",
        },
        {
          title: "Доставка в 50+ городов",
          body: "Возим не только в Баку. Доставляем более чем в 50 городов Азербайджана.",
        },
      ],
    },
    banner: {
      title: "Хотите везти груз из Китая или Турции?",
      lead: "Свяжитесь с нами — вместе посчитаем маршрут, срок и стоимость.",
      call: "Позвоните +994 70 210 10 39",
      write: "Напишите info@khan-cargo.com",
    },
  },
} as const satisfies Record<"az" | "en" | "ru", AboutCompanyDict>;
