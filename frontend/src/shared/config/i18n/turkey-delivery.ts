/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { ChinaDeliveryDict } from "./china-delivery";

export type TurkeyDeliveryDict = ChinaDeliveryDict;

export const turkeyDeliveryByLocale: Record<"az" | "en" | "ru", TurkeyDeliveryDict> = {
  az: {
    meta: {
      title: "Türkiyədən çatdırılma | Khan Cargo",
      description:
        "Khan Cargo Türkiyədən Azərbaycana TIR, dəmir yolu və topdan kargo: anbar, sığorta, gömrük və yerli təhvil.",
    },
    hero: {
      title: "Türkiyədən Azərbaycana müntəzəm reyslər",
      lead: "İstanbul, Trabzon və Türkiyənin digər ticarət mərkəzlərindən yüklərinizi Azərbaycana müntəzəm cədvəllə gətiririk. TIR, dəmir yolu, topdan partiya və irihəcmli yük variantları bir şirkət daxilində birləşir. Sənəd axını tam bizim üzərimizdədir.",
      cta: "Dəyəri hesablayın",
    },
    process: {
      eyebrow: "Sürətli və proqnozlaşdırılan çatdırılma",
      title:
        "Türkiyədən Azərbaycana Khan Cargo müntəzəm cədvəllə işləyir. Yükün Türkiyə anbarımıza qəbulundan müştəriyə çatdırılmasına qədər bütün prosesi təsdiqlənmiş marşrut üzrə aparırıq.",
      titleMuted:
        "Türkiyə-Gürcüstan-Azərbaycan quru yolu sabit tezliklə işlədiyi üçün çatdırılma proqnozlaşdırılır.",
      side: "Vaxt kritikdirsə, Türkiyədən sürətli çatdırılma sxemi işə düşür. Fərdi qiymət və müddət menecerlə birbaşa razılaşdırılır. Kiçik topdan partiyadan tam TIR yükünə qədər hər həcmə uyğun marşrut seçirik.",
      cta: "Sınaq göndərişi sifariş edin",
    },
    warehouse: {
      eyebrow: "Türkiyə anbarımız",
      title:
        "Şəxsi anbarımız Türkiyənin logistika mərkəzində yerləşir. Bu, iki üstünlük verir. Birincisi, Türkiyə satıcıları yükü birbaşa bizim ünvana göndərir, aradakı əlavə tranzit anbarlar prosesə qatılmır. İkincisi, konsolidasiya bir yerdə aparılır, bu isə Türkiyədən Azərbaycana kargo dəyərini aşağı salır.",
      body: "Anbarda malın qəbulu foto-qeyd sistemi ilə aparılır. Saxlama şərtlərinə görə hər hansı mübahisə çıxarsa, sənədləşdirilmiş sübut təqdim edirik. Yükün bütövlüyü və sənəd axını Khan Cargo-nun tam məsuliyyətindədir.",
    },
    insurance: {
      eyebrow: "Sığorta",
      title: "Sığortalı çatdırılma və xidmətə daxil olanlar",
      body: "Türkiyə anbarımıza daxil olan andan Azərbaycanda təhvil verilənə qədər yük Khan Cargo tərəfindən sığortalanır. Zədə, itki və ya yanlış təhvil zamanı müştəri kompensasiya alır. Sığorta yükün elan olunmuş dəyəri əsasında hesablanır və əlavə tarif tələb etmir.",
      stagesTitle: "Xidmətə daxil olan mərhələlər:",
      stages: [
        "Türkiyə anbarımızda qəbul və yoxlama",
        "Konsolidasiya və konteynerə yükləmə",
        "Sığorta",
        "TIR və ya dəmir yolu marşrutu",
        "Gömrük rəsmiləşdirilməsi",
        "Sənəd axını",
        "Menecer vasitəsilə izləmə",
        "Azərbaycanda müştəriyə təhvil",
      ],
      mapAlt: "Azərbaycan xəritəsi",
    },
    shippingTypes: {
      eyebrow: "Xidmətlərimiz",
      title: "Türkiyədən daşıma növləri",
      rowLabels: ["Daşıma növü", "Kimə uyğundur", "Üstünlük"],
      columns: [
        ["TIR yükdaşıma", "İrihəcmli yük", "Əsas quru yol variantı"],
        ["Dəmir yolu yükdaşıma", "Konteyner həcmli yüklər", "Bakı-Tbilisi-Qars reysləri"],
        ["Topdan yük kargosu", "Mağaza, restoran, HoReCa", "Sabit tariflər, birbaşa müqavilə"],
        ["İrihəcmli yükdaşıma", "Avadanlıq, mebel partiyaları", "TIR üçün paketləmə"],
      ],
    },
    customs: {
      eyebrow: "Gömrük rəsmiləşdirilməsi",
      title: "Gömrük rəsmiləşdirilməsi Khan Cargo-nun Türkiyədən kargo xidmətinə daxildir.",
      note: "Sənəd axını və deklarasiya bizim üzərimizdədir.",
      cards: ["İnvoys", "Malın spesifikasiyası", "Yükün elan olunmuş dəyəri"],
    },
    workflow: {
      eyebrow: "Bizimlə iş mərhələləri",
      title: "Prosesin izahı",
      steps: [
        "Menecerə müraciət, dəyər razılaşdırılması",
        "Türkiyə anbarımıza yükün göndərilməsi",
        "Konsolidasiya, yoxlama, TIR-a yükləmə",
        "Türkiyə-Gürcüstan-Azərbaycan quru və ya dəmir yolu marşrutu",
      ],
      bannerTitle: "Çindən və ya Türkiyədən yük daşımaq istəyirsiniz?",
      bannerSubtitle: "Əlaqə saxlayın — marşrut, müddət və xərci birlikdə hesablayaq.",
      callLabel: "Zəng edin +90 537 254 30 00",
      emailLabel: "Yazın info@khan-cargo.com",
    },
    clients: {
      eyebrow: "Müştərilər",
      title: "Kimlər Türkiyədən kargo sifariş edir",
      note: "Khan Cargo bütün seqmentlərə sürətli reyslər, sığortalı yükdaşıma və tam sənədləşmə şərtlərini eyni səviyyədə təklif edir.",
      rowLabels: ["Müştəri seqmenti", "Tipik yük", "Uyğun sxem"],
      rows: [
        ["Mağaza sahibləri", "Sənaye sahibkarları", "Restoran və otel biznesi", "Onlayn mağazalar"],
        ["Geyim, aksesuar", "Xammal, avadanlıq, komponentlər", "Mətbəx avadanlığı, tekstil", "Türk brendlərinin partiyaları"],
        ["Həftəlik və aylıq topdan", "Birbaşa müqavilə, TIR", "Müntəzəm tədarük", "Topdan çatdırılma"],
      ],
    },
    localDelivery: {
      eyebrow: "Çatdırılma",
      title: "Azərbaycan üzrə çatdırılma",
      body: "Khan Cargo yükləri Azərbaycanın bütün əsas şəhərlərinə çatdırır. Bakı və Sumqayıt üzrə ofisdən təhvil və kuryer xidməti işləyir, regionlara isə tərəfdaş nəqliyyat şəbəkəsi vasitəsilə göndərilir.",
    },
    faq: {
      eyebrow: "Suallar",
      title: "Tez-tez verilən suallar",
      items: [
        {
          q: "Türkiyədən çatdırılma nə qədər çəkir?",
          a: "Marşrut müntəzəm cədvəllə işləyir. Dəqiq müddət yükün həcmindən və daşıma növündən asılıdır, menecer hər sifariş üzrə fərdi cavab verir. Sürətləndirilmiş variantda müddət daha qısa olur.",
        },
        {
          q: "Sığorta xərci varmı?",
          a: "Sığorta tarifə daxildir və elan olunmuş dəyər üzrə hesablanır.",
        },
        {
          q: "Türkiyə anbarınızın ünvanını necə alaram?",
          a: "Menecerlə əlaqə saxlayın, sizə fərdi identifikator və anbarımızın Türkiyə ünvanı verilir. Bundan sonra satıcı saytlarında bu ünvanı çatdırılma nöqtəsi kimi göstərəcəksiniz.",
        },
        {
          q: "Ödəniş nə vaxt həyata keçirilir?",
          a: "Yük Azərbaycana çatdıqdan və müştəriyə təhvil verildikdən sonra. Ön ödəniş yalnız fərdi kommersiya razılaşmalarında tətbiq olunur.",
        },
        {
          q: "Ən ucuz Türkiyə kargosu variantı hansıdır?",
          a: "Topdan partiya və konsolidasiya sxemi. Kiloqrama düşən qiymət minimum səviyyəyə enir.",
        },
        {
          q: "Yükün statusunu necə izləyəcəm?",
          a: "Menecer hər mərhələdə məlumat verir. Əlavə olaraq +90 537 254 30 00 nömrəsi ilə birbaşa əlaqə saxlaya bilərsiniz.",
        },
      ],
    },
  },
  en: {
    meta: {
      title: "Delivery from Turkey | Khan Cargo",
      description:
        "Khan Cargo from Turkey to Azerbaijan: TIR, rail and wholesale cargo with warehouse, insurance, customs and local handover.",
    },
    hero: {
      title: "Regular runs from Turkey to Azerbaijan",
      lead: "We bring your cargo from Istanbul, Trabzon and other Turkish trade hubs to Azerbaijan on a regular schedule. TIR, rail, wholesale lots and oversized freight are handled in one company. Document flow is fully on us.",
      cta: "Calculate the cost",
    },
    process: {
      eyebrow: "Fast and predictable delivery",
      title:
        "From Turkey to Azerbaijan Khan Cargo runs on a regular schedule. From intake at our Turkey warehouse to handover to the customer, the full process follows a confirmed route.",
      titleMuted: "Because the Turkey–Georgia–Azerbaijan overland corridor runs at a steady frequency, delivery is predictable.",
      side: "When time is critical, a fast Turkey delivery scheme kicks in. Price and timing are agreed directly with a manager. From a small wholesale lot to a full TIR load, we pick a route that fits every volume.",
      cta: "Place a trial order",
    },
    warehouse: {
      eyebrow: "Our Turkey warehouse",
      title:
        "Our own warehouse sits in Turkey’s logistics hub. That gives two advantages. First, Turkish sellers ship straight to our address — no extra transit warehouses in between. Second, consolidation happens in one place, which lowers cargo cost from Turkey to Azerbaijan.",
      body: "Intake is logged with a photo system. If storage terms are disputed, we provide documented proof. Cargo integrity and document flow stay fully under Khan Cargo’s responsibility.",
    },
    insurance: {
      eyebrow: "Insurance",
      title: "Insured delivery and what’s included",
      body: "From the moment cargo enters our Turkey warehouse until handover in Azerbaijan, Khan Cargo insures it. For damage, loss or wrong delivery the customer is compensated. Insurance is based on declared value and needs no extra fee.",
      stagesTitle: "Stages included in the service:",
      stages: [
        "Intake and inspection at our Turkey warehouse",
        "Consolidation and container loading",
        "Insurance",
        "TIR or rail route",
        "Customs clearance",
        "Document flow",
        "Tracking via manager",
        "Handover to the customer in Azerbaijan",
      ],
      mapAlt: "Map of Azerbaijan",
    },
    shippingTypes: {
      eyebrow: "Our services",
      title: "Shipping types from Turkey",
      rowLabels: ["Shipping type", "Best for", "Advantage"],
      columns: [
        ["TIR freight", "Oversized cargo", "Main overland option"],
        ["Rail freight", "Container-volume loads", "Baku–Tbilisi–Kars runs"],
        ["Wholesale cargo", "Stores, restaurants, HoReCa", "Stable rates, direct contract"],
        ["Oversized freight", "Equipment, furniture lots", "Packing for TIR"],
      ],
    },
    customs: {
      eyebrow: "Customs clearance",
      title: "Customs clearance is included in Khan Cargo’s Turkey cargo service.",
      note: "Document flow and declaration are on us.",
      cards: ["Invoice", "Goods specification", "Declared cargo value"],
    },
    workflow: {
      eyebrow: "How working with us works",
      title: "Process explained",
      steps: [
        "Contact a manager and agree on price",
        "Ship cargo to our Turkey warehouse",
        "Consolidation, inspection, TIR loading",
        "Turkey–Georgia–Azerbaijan road or rail route",
      ],
      bannerTitle: "Need to ship cargo from China or Turkey?",
      bannerSubtitle: "Get in touch — we’ll calculate route, timing and cost together.",
      callLabel: "Call +90 537 254 30 00",
      emailLabel: "Write to info@khan-cargo.com",
    },
    clients: {
      eyebrow: "Customers",
      title: "Who orders cargo from Turkey",
      note: "Khan Cargo offers every segment the same level of fast runs, insured shipping and full documentation.",
      rowLabels: ["Customer segment", "Typical cargo", "Best scheme"],
      rows: [
        ["Store owners", "Industrial businesses", "Restaurant & hotel", "Online stores"],
        ["Apparel, accessories", "Raw materials, equipment, parts", "Kitchen equipment, textiles", "Turkish brand lots"],
        ["Weekly & monthly wholesale", "Direct contract, TIR", "Regular supply", "Wholesale delivery"],
      ],
    },
    localDelivery: {
      eyebrow: "Delivery",
      title: "Delivery across Azerbaijan",
      body: "Khan Cargo delivers to all major cities in Azerbaijan. In Baku and Sumgayit we offer office pickup and courier service; regions are served via our partner transport network.",
    },
    faq: {
      eyebrow: "Questions",
      title: "Frequently asked questions",
      items: [
        {
          q: "How long does delivery from Turkey take?",
          a: "The route runs on a regular schedule. Exact timing depends on cargo volume and shipping type; a manager gives a per-order answer. The accelerated option is shorter.",
        },
        {
          q: "Is there an insurance fee?",
          a: "Insurance is included in the rate and calculated on declared value.",
        },
        {
          q: "How do I get your Turkey warehouse address?",
          a: "Contact a manager — you receive a personal ID and our Turkey warehouse address. Then use that address as the delivery point on seller sites.",
        },
        {
          q: "When is payment made?",
          a: "After cargo arrives in Azerbaijan and is handed over to the customer. Prepayment applies only under individual commercial agreements.",
        },
        {
          q: "What’s the cheapest Turkey cargo option?",
          a: "Wholesale lots with a consolidation scheme. The per-kilo price drops to the minimum.",
        },
        {
          q: "How will I track cargo status?",
          a: "A manager updates you at every stage. You can also contact us directly at +90 537 254 30 00.",
        },
      ],
    },
  },
  ru: {
    meta: {
      title: "Доставка из Турции | Khan Cargo",
      description:
        "Khan Cargo из Турции в Азербайджан: TIR, железная дорога и оптовое карго — склад, страховка, таможня и локальная выдача.",
    },
    hero: {
      title: "Регулярные рейсы из Турции в Азербайджан",
      lead: "Привозим грузы из Стамбула, Трабзона и других торговых центров Турции в Азербайджан по регулярному графику. TIR, железная дорога, оптовые партии и крупногабарит — в одной компании. Документооборот полностью на нас.",
      cta: "Рассчитать стоимость",
    },
    process: {
      eyebrow: "Быстрая и прогнозируемая доставка",
      title:
        "Из Турции в Азербайджан Khan Cargo работает по регулярному графику. От приёма на нашем складе в Турции до выдачи клиенту весь процесс идёт по подтверждённому маршруту.",
      titleMuted:
        "Сухопутный коридор Турция–Грузия–Азербайджан работает со стабильной частотой, поэтому сроки прогнозируемы.",
      side: "Если время критично, включается схема ускоренной доставки из Турции. Цену и срок согласуем напрямую с менеджером. От малой оптовой партии до полного TIR подбираем маршрут под любой объём.",
      cta: "Заказать пробную отправку",
    },
    warehouse: {
      eyebrow: "Наш склад в Турции",
      title:
        "Собственный склад расположен в логистическом хабе Турции. Это даёт два преимущества. Во‑первых, турецкие продавцы отправляют груз сразу на наш адрес — без лишних транзитных складов. Во‑вторых, консолидация в одном месте снижает стоимость карго из Турции в Азербайджан.",
      body: "Приём фиксируется фотоучётом. При спорах по условиям хранения предоставляем документированные доказательства. Целостность груза и документооборот — полная ответственность Khan Cargo.",
    },
    insurance: {
      eyebrow: "Страхование",
      title: "Страховая доставка и что входит в услугу",
      body: "С момента поступления на склад в Турции до выдачи в Азербайджане груз застрахован Khan Cargo. При повреждении, утрате или неверной выдаче клиент получает компенсацию. Страховка считается по заявленной стоимости и не требует отдельного тарифа.",
      stagesTitle: "Этапы, входящие в услугу:",
      stages: [
        "Приём и проверка на нашем складе в Турции",
        "Консолидация и загрузка в контейнер",
        "Страхование",
        "Маршрут TIR или железная дорога",
        "Таможенное оформление",
        "Документооборот",
        "Отслеживание через менеджера",
        "Выдача клиенту в Азербайджане",
      ],
      mapAlt: "Карта Азербайджана",
    },
    shippingTypes: {
      eyebrow: "Наши услуги",
      title: "Виды перевозок из Турции",
      rowLabels: ["Вид перевозки", "Кому подходит", "Преимущество"],
      columns: [
        ["TIR-перевозка", "Крупногабаритный груз", "Основной сухопутный вариант"],
        ["Железнодорожная перевозка", "Контейнерные объёмы", "Рейсы Баку–Тбилиси–Карс"],
        ["Оптовое карго", "Магазины, рестораны, HoReCa", "Стабильные тарифы, прямой договор"],
        ["Крупногабарит", "Оборудование, мебельные партии", "Упаковка под TIR"],
      ],
    },
    customs: {
      eyebrow: "Таможенное оформление",
      title: "Таможенное оформление входит в карго-услугу Khan Cargo из Турции.",
      note: "Документооборот и декларация — на нас.",
      cards: ["Инвойс", "Спецификация товара", "Заявленная стоимость груза"],
    },
    workflow: {
      eyebrow: "Этапы работы с нами",
      title: "Объяснение процесса",
      steps: [
        "Обращение к менеджеру и согласование цены",
        "Отправка груза на наш склад в Турции",
        "Консолидация, проверка, загрузка в TIR",
        "Сухопутный или ж/д маршрут Турция–Грузия–Азербайджан",
      ],
      bannerTitle: "Нужно перевезти груз из Китая или Турции?",
      bannerSubtitle: "Свяжитесь с нами — вместе посчитаем маршрут, срок и стоимость.",
      callLabel: "Позвоните +90 537 254 30 00",
      emailLabel: "Напишите info@khan-cargo.com",
    },
    clients: {
      eyebrow: "Клиенты",
      title: "Кто заказывает карго из Турции",
      note: "Khan Cargo предлагает всем сегментам одинаковый уровень быстрых рейсов, страховых перевозок и полного документооборота.",
      rowLabels: ["Сегмент клиентов", "Типичный груз", "Подходящая схема"],
      rows: [
        ["Владельцы магазинов", "Промышленные предприниматели", "Рестораны и отели", "Онлайн-магазины"],
        ["Одежда, аксессуары", "Сырьё, оборудование, комплектующие", "Кухонное оборудование, текстиль", "Партии турецких брендов"],
        ["Еженедельный и месячный опт", "Прямой договор, TIR", "Регулярные поставки", "Оптовая доставка"],
      ],
    },
    localDelivery: {
      eyebrow: "Доставка",
      title: "Доставка по Азербайджану",
      body: "Khan Cargo доставляет грузы во все крупные города Азербайджана. В Баку и Сумгайыте работают выдача из офиса и курьерская служба, в регионы — через партнёрскую транспортную сеть.",
    },
    faq: {
      eyebrow: "Вопросы",
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "Сколько занимает доставка из Турции?",
          a: "Маршрут работает по регулярному графику. Точный срок зависит от объёма груза и вида перевозки, менеджер отвечает индивидуально по каждому заказу. В ускоренном варианте срок короче.",
        },
        {
          q: "Есть ли плата за страховку?",
          a: "Страховка входит в тариф и считается по заявленной стоимости.",
        },
        {
          q: "Как получить адрес склада в Турции?",
          a: "Свяжитесь с менеджером — вам выдадут персональный идентификатор и адрес нашего склада в Турции. Затем укажите этот адрес как пункт доставки на сайтах продавцов.",
        },
        {
          q: "Когда производится оплата?",
          a: "После прибытия груза в Азербайджан и передачи клиенту. Предоплата — только по индивидуальным коммерческим договорённостям.",
        },
        {
          q: "Какой самый дешёвый вариант турецкого карго?",
          a: "Оптовая партия и схема консолидации. Цена за килограмм снижается до минимума.",
        },
        {
          q: "Как отслеживать статус груза?",
          a: "Менеджер сообщает на каждом этапе. Дополнительно можно связаться напрямую по номеру +90 537 254 30 00.",
        },
      ],
    },
  },
};
