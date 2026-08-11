/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

export type ChinaDeliveryDict = {
  meta: { title: string; description: string };
  hero: { title: string; lead: string; cta: string };
  process: {
    eyebrow: string;
    title: string;
    titleMuted: string;
    side: string;
    cta: string;
  };
  warehouse: { eyebrow: string; title: string; body: string };
  insurance: {
    eyebrow: string;
    title: string;
    body: string;
    stagesTitle: string;
    stages: string[];
    mapAlt: string;
  };
  shippingTypes: {
    eyebrow: string;
    title: string;
    rowLabels: string[];
    columns: string[][];
  };
  customs: {
    eyebrow: string;
    title: string;
    note: string;
    cards: string[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    steps: string[];
    bannerTitle: string;
    bannerSubtitle: string;
    callLabel: string;
    emailLabel: string;
  };
  clients: {
    eyebrow: string;
    title: string;
    note: string;
    rowLabels: string[];
    rows: string[][];
  };
  localDelivery: { eyebrow: string; title: string; body: string };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
};

export const chinaDeliveryByLocale = {
  az: {
    meta: {
      title: "Çindən çatdırılma | Khan Cargo",
      description:
        "Khan Cargo Çindən Azərbaycana konteyner və kargo çatdırılması: konsolidasiya, sığorta, gömrük və yerli təhvil.",
    },
    hero: {
      title: "Çindən çatdırılma və konteyner yükdaşıması",
      lead: "Khan Cargo Çindən Azərbaycana birbaşa çatdırılmanı təşkil edir. Quançjou, İu, Şençjen və digər sənaye mərkəzlərindəki tədarükçülərdən yükləri qəbul edirik, Çindəki anbarımızda konsolidasiya edirik və Azərbaycana göndəririk.",
      cta: "Dəyəri hesablayın",
    },
    process: {
      eyebrow: "Çatdırılma prosesi və müddət",
      title:
        "Çindən Azərbaycana yük müntəzəm cədvəllə hərəkət edir. Marşruta Cənubi Çin limanlarından Xəzərə qədər dəniz mərhələsi, tranzit ölkələr üzrə quru daşıma, gömrük prosedurları və anbarımıza qəbul daxildir.",
      titleMuted:
        "Hava şəraiti əlverişli olduqda cədvəl qorunur. Təbii amillərlə bağlı gecikmə baş verdikdə hər mərhələdə sizə məlumat veririk.",
      side: "Təcili yük üçün sürətləndirilmiş marşrut hazırlanır. Menecerimiz yükün həcminə, çəkisinə və vacibliyinə uyğun alternativ variant təklif edir, dəyəri və müddəti əvvəlcədən razılaşdırır. Bu, Çindən sürətli çatdırılma tələb edən müştərilər üçün fərdi həll yoludur.",
      cta: "Sınaq göndərişi sifariş edin",
    },
    warehouse: {
      eyebrow: "Çindəki öz anbarımız",
      title:
        "Çindəki anbarımız iri sənaye şəhərlərinə yaxın nöqtədə yerləşir. Bu yerləşmə konsolidasiyanı, malın yoxlanmasını və konteynerə yüklənməsini birbaşa nəzarətimiz altında aparmağa imkan verir.",
      body: "Anbarda malın vəziyyəti fotoçəkilişlə qeyd olunur. Saxlama müqavilədə göstərilən müddət ərzində pulsuzdur, ondan sonra sərfəli tariflə hesablanır. Çindən topdan yük kargosu ilə iş görən müştərilər tədarükçünü birbaşa Khan Cargo anbarına yönləndirir və gündəlik nəzarətdən azad olur.",
    },
    insurance: {
      eyebrow: "Sığorta",
      title: "Sığortalı yükdaşıma və xidmətə daxil olanlar",
      body: "Khan Cargo kommersiya partiyalarını, fərdi bağlamaları və təcili göndərişləri sığortalayır. Zədə, itki və ya nasazlıq halında xərci kompensasiya edirik, sığorta prosesini özümüz aparırıq. Sığorta yükün elan olunmuş dəyəri əsasında hesablanır, ayrıca ödəniş tələb etmir.",
      stagesTitle: "Xidmətə daxil olan mərhələlər:",
      stages: [
        "Çin anbarımızda qəbul və yoxlama",
        "Konsolidasiya və konteynerə yükləmə",
        "Sığorta",
        "Dəniz, hava və ya dəmir yolu marşrutu",
        "Gömrük rəsmiləşdirilməsi",
        "Sənəd axını",
        "Yükün izlənməsi",
        "Azərbaycanda müştəriyə təhvil",
      ],
      mapAlt: "Azərbaycan xəritəsi",
    },
    shippingTypes: {
      eyebrow: "Xidmətlərimiz",
      title: "Çindən daşıma növləri",
      rowLabels: ["Daşıma növü", "Kimə uyğundur", "Üstünlük"],
      columns: [
        ["Konteyner (FCL / LCL)", "İri partiya, avadanlıq, mebel", "Ən əlverişli qiymət"],
        ["Dəniz yolu ilə yükdaşıma", "Böyük həcm, ağır yük", "Müntəzəm cədvəl"],
        ["Dəmir yolu yükdaşıma", "Orta partiya, sürət prioriteti", "Dəniz variantından qısa müddət"],
        ["Hava nəqliyyatı", "Elektronika, nümunə, təcili sifariş", "Xidmət müddəti dəfələrlə qısadır"],
      ],
    },
    customs: {
      eyebrow: "Gömrük rəsmiləşdirilməsi",
      title:
        "Gömrük rəsmiləşdirilməsi Khan Cargo-nun Çindən kargo xidmətinə daxildir. Sənədləşdirməni və deklarasiyanı özümüz aparırıq.",
      note: "Qalan proseduru biz aparırıq. Bu, Çin kargo şirkətləri arasında bizi seçən müştərilərin əsas səbəblərindən biridir.",
      cards: ["İnvoys", "Malın spesifikasiyası", "Yükün elan olunmuş dəyəri"],
    },
    workflow: {
      eyebrow: "Bizimlə iş mərhələləri",
      title: "İş sxemi",
      steps: [
        "Menecerə müraciət, yükün parametrlərinin ötürülməsi",
        "Marşrut və qiymət razılaşdırılması",
        "Tədarükçünün malı Çin anbarımıza göndərməsi",
        "Dəniz yolu, dəmir yolu və ya hava marşrutu",
      ],
      bannerTitle: "Çindən və ya Türkiyədən yük daşımaq istəyirsiniz?",
      bannerSubtitle: "Əlaqə saxlayın — marşrut, müddət və xərci birlikdə hesablayaq.",
      callLabel: "Zəng edin +86 181 0579 6454",
      emailLabel: "Yazın info@khan-cargo.com",
    },
    clients: {
      eyebrow: "Müştərilər",
      title: "Kimlər Çindən yük sifariş edir",
      note: "Çindən kommersiya yüklərinin daşınmasında B2B modeli üzrə bütün mərhələləri öz üzərimizə götürürük. Fərdi alıcılar üçün ayrıca konsolidasiya sxemi mövcuddur, qiymət kiçik həcmlərə uyğun formalaşır.",
      rowLabels: ["Müştəri seqmenti", "Tipik yük", "Uyğun sxem"],
      rows: [
        ["Mağaza sahibləri", "Sənaye sahibkarları", "Mebel və HoReCa biznesi", "Elektronika satıcıları", "Fərdi alıcılar"],
        ["Topdan geyim, tekstil", "Avadanlıq, xammal", "Cihazlar, gadget", "Alibaba, Taobao, 1688 sifarişləri"],
        ["Müntəzəm konteyner tədarükü", "FCL konteyner", "İrihəcmli yükdaşıma", "Hava marşrutu və ya konteyner"],
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
          q: "Çindən Azərbaycana çatdırılma nə qədər çəkir?",
          a: "Standart marşrutda cədvəl müntəzəmdir. Dəqiq müddət daşıma növündən və yükün həcmindən asılıdır, menecer sizə hər sifariş üzrə fərdi cavab verir. Sürətləndirilmiş variantda müddət qısaldılır.",
        },
        {
          q: "Sığorta ayrıca ödəniş tələb edir?",
          a: "Xeyr. Standart tarifə daxildir və yükün elan olunmuş dəyərinə görə hesablanır.",
        },
        {
          q: "Çin tədarükçüsünə anbar ünvanını necə verim?",
          a: "Qeydiyyatdan sonra sizə fərdi identifikator və Çin anbarının ünvanı verilir. Tədarükçüyə yalnız bu məlumatı ötürməlisiniz.",
        },
        {
          q: "Ən ucuz Çin kargosu variantı hansıdır?",
          a: "Çindən dəniz yolu ilə konteyner daşınması. Böyük partiya olduqda kiloqrama düşən qiymət minimum səviyyəyə enir.",
        },
        {
          q: "Ödəniş necə həyata keçirilir?",
          a: "Yük Azərbaycana çatdıqdan sonra. Ön ödəniş yalnız fərdi razılaşmalarda tətbiq olunur.",
        },
        {
          q: "Alibaba və Taobao sifarişləri qəbul olunur?",
          a: "Bəli. Fərdi bağlama çatdırılması sxemi bu platformalar üçün optimallaşdırılıb.",
        },
      ],
    },
  },
  en: {
    meta: {
      title: "Delivery from China | Khan Cargo",
      description:
        "Khan Cargo container and cargo shipping from China to Azerbaijan: consolidation, insurance, customs, and local handover.",
    },
    hero: {
      title: "Delivery from China and container freight",
      lead: "Khan Cargo arranges direct shipping from China to Azerbaijan. We collect cargo from suppliers in Guangzhou, Yiwu, Shenzhen and other industrial hubs, consolidate it in our China warehouse, and ship it to Azerbaijan.",
      cta: "Calculate the cost",
    },
    process: {
      eyebrow: "Delivery process and timing",
      title:
        "Cargo from China to Azerbaijan moves on a regular schedule. The route includes a sea leg from South China ports to the Caspian, overland transit, customs procedures, and intake at our warehouse.",
      titleMuted:
        "When weather conditions allow, the schedule holds. If natural factors cause delays, we update you at every stage.",
      side: "For urgent cargo we prepare an accelerated route. Our manager offers an alternative based on volume, weight and priority, and agrees cost and timing in advance — a tailored option for customers who need fast delivery from China.",
      cta: "Place a trial order",
    },
    warehouse: {
      eyebrow: "Our own warehouse in China",
      title:
        "Our China warehouse sits close to major industrial cities. That location lets us run consolidation, inspection and container loading under our direct control.",
      body: "Cargo condition is documented with photos. Storage is free for the contract period, then billed at a fair rate. Wholesale customers can send suppliers straight to the Khan Cargo warehouse and skip day-to-day oversight.",
    },
    insurance: {
      eyebrow: "Insurance",
      title: "Insured shipping and what’s included",
      body: "Khan Cargo insures commercial lots, individual parcels and urgent shipments. In case of damage, loss or defect we compensate costs and handle the claim ourselves. Insurance is based on declared value and needs no separate fee.",
      stagesTitle: "Stages included in the service:",
      stages: [
        "Intake and inspection at our China warehouse",
        "Consolidation and container loading",
        "Insurance",
        "Sea, air or rail route",
        "Customs clearance",
        "Document flow",
        "Cargo tracking",
        "Handover to the customer in Azerbaijan",
      ],
      mapAlt: "Map of Azerbaijan",
    },
    shippingTypes: {
      eyebrow: "Our services",
      title: "Shipping types from China",
      rowLabels: ["Shipping type", "Best for", "Advantage"],
      columns: [
        ["Container (FCL / LCL)", "Large lots, equipment, furniture", "Best price"],
        ["Sea freight", "High volume, heavy cargo", "Regular schedule"],
        ["Rail freight", "Medium lots, speed priority", "Faster than sea"],
        ["Air freight", "Electronics, samples, urgent orders", "Much shorter transit time"],
      ],
    },
    customs: {
      eyebrow: "Customs clearance",
      title:
        "Customs clearance is included in Khan Cargo’s China freight service. We handle documentation and declarations ourselves.",
      note: "We take care of the rest. That’s one of the main reasons customers choose us among China cargo companies.",
      cards: ["Invoice", "Product specification", "Declared cargo value"],
    },
    workflow: {
      eyebrow: "How working with us works",
      title: "Workflow",
      steps: [
        "Contact a manager and share cargo parameters",
        "Agree on route and price",
        "Supplier ships goods to our China warehouse",
        "Sea, rail or air routing",
      ],
      bannerTitle: "Need to ship cargo from China or Turkey?",
      bannerSubtitle: "Get in touch — we’ll calculate route, timing and cost together.",
      callLabel: "Call +86 181 0579 6454",
      emailLabel: "Write to info@khan-cargo.com",
    },
    clients: {
      eyebrow: "Customers",
      title: "Who orders cargo from China",
      note: "For commercial freight from China we cover every B2B stage. Individual buyers get a separate consolidation scheme priced for smaller volumes.",
      rowLabels: ["Customer segment", "Typical cargo", "Best scheme"],
      rows: [
        ["Store owners", "Industrial businesses", "Furniture & HoReCa", "Electronics sellers", "Individual buyers"],
        ["Wholesale apparel, textiles", "Equipment, raw materials", "Devices, gadgets", "Alibaba, Taobao, 1688 orders"],
        ["Regular container supply", "FCL container", "Oversized freight", "Air route or container"],
      ],
    },
    localDelivery: {
      eyebrow: "Delivery",
      title: "Delivery across Azerbaijan",
      body: "Khan Cargo delivers to all major cities in Azerbaijan. In Baku and Sumgayit we offer office pickup and courier service; regions are served via our partner transport network.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "How long does delivery from China to Azerbaijan take?",
          a: "Timing depends on the route: sea usually takes several weeks, rail is shorter, air is a few days. Your manager confirms exact timing from cargo parameters.",
        },
        {
          q: "Is insurance a separate fee?",
          a: "No. It is included in the standard rate and calculated from the declared cargo value.",
        },
        {
          q: "How do I give my China supplier the warehouse address?",
          a: "After the contract is signed, your manager sends our China warehouse address and intake rules. The supplier ships directly there.",
        },
        {
          q: "What is the cheapest China cargo option?",
          a: "FCL/LCL container and sea freight usually offer the best price. Small or urgent shipments may fit air or mixed routing better.",
        },
        {
          q: "How does payment work?",
          a: "Payment terms are confirmed by your manager after route and volume are agreed. Invoices and documents come as a full package.",
        },
        {
          q: "Do you accept Alibaba and Taobao orders?",
          a: "Yes. We receive platform orders at our China warehouse, inspect, consolidate and ship them to Azerbaijan.",
        },
      ],
    },
  },
  ru: {
    meta: {
      title: "Доставка из Китая | Khan Cargo",
      description:
        "Khan Cargo — контейнерные и карго-перевозки из Китая в Азербайджан: консолидация, страховка, таможня и локальная выдача.",
    },
    hero: {
      title: "Доставка из Китая и контейнерные перевозки",
      lead: "Khan Cargo организует прямую доставку из Китая в Азербайджан. Принимаем грузы у поставщиков в Гуанчжоу, Иу, Шэньчжэне и других промышленных центрах, консолидируем на нашем складе в Китае и отправляем в Азербайджан.",
      cta: "Рассчитать стоимость",
    },
    process: {
      eyebrow: "Процесс и сроки доставки",
      title:
        "Груз из Китая в Азербайджан идёт по регулярному графику. В маршрут входят морской участок от портов Южного Китая до Каспия, сухопутный транзит, таможенные процедуры и приём на наш склад.",
      titleMuted:
        "При благоприятной погоде график сохраняется. Если из‑за природных факторов возникают задержки, мы сообщаем вам на каждом этапе.",
      side: "Для срочного груза готовим ускоренный маршрут. Менеджер предлагает альтернативу по объёму, весу и приоритету и заранее согласовывает стоимость и сроки — индивидуальное решение для тех, кому нужна быстрая доставка из Китая.",
      cta: "Заказать пробную отправку",
    },
    warehouse: {
      eyebrow: "Собственный склад в Китае",
      title:
        "Наш склад в Китае расположен рядом с крупными промышленными городами. Это позволяет вести консолидацию, проверку товара и загрузку в контейнер под нашим прямым контролем.",
      body: "Состояние товара фиксируется фото. Хранение бесплатно в срок по договору, далее — по выгодному тарифу. Клиенты с оптовым карго направляют поставщика сразу на склад Khan Cargo и снимают с себя ежедневный контроль.",
    },
    insurance: {
      eyebrow: "Страхование",
      title: "Страховые перевозки и что входит в услугу",
      body: "Khan Cargo страхует коммерческие партии, частные посылки и срочные отправки. При повреждении, утрате или неисправности компенсируем расходы и ведём страховой процесс сами. Страховка считается по заявленной стоимости и не требует отдельной оплаты.",
      stagesTitle: "Этапы, входящие в услугу:",
      stages: [
        "Приём и проверка на нашем складе в Китае",
        "Консолидация и загрузка в контейнер",
        "Страхование",
        "Морской, воздушный или железнодорожный маршрут",
        "Таможенное оформление",
        "Документооборот",
        "Отслеживание груза",
        "Выдача клиенту в Азербайджане",
      ],
      mapAlt: "Карта Азербайджана",
    },
    shippingTypes: {
      eyebrow: "Наши услуги",
      title: "Виды перевозок из Китая",
      rowLabels: ["Тип перевозки", "Кому подходит", "Преимущество"],
      columns: [
        ["Контейнер (FCL / LCL)", "Крупные партии, оборудование, мебель", "Самая выгодная цена"],
        ["Морские перевозки", "Большой объём, тяжёлый груз", "Регулярный график"],
        ["Железнодорожные перевозки", "Средние партии, приоритет скорости", "Короче морского варианта"],
        ["Авиаперевозки", "Электроника, образцы, срочные заказы", "Срок в разы короче"],
      ],
    },
    customs: {
      eyebrow: "Таможенное оформление",
      title:
        "Таможенное оформление входит в карго-услугу Khan Cargo из Китая. Документы и декларацию ведём сами.",
      note: "Остальные процедуры берём на себя. Это одна из главных причин, почему клиенты выбирают нас среди китайских карго-компаний.",
      cards: ["Инвойс", "Спецификация товара", "Заявленная стоимость груза"],
    },
    workflow: {
      eyebrow: "Этапы работы с нами",
      title: "Схема работы",
      steps: [
        "Обращение к менеджеру и передача параметров груза",
        "Согласование маршрута и цены",
        "Поставщик отправляет товар на наш склад в Китае",
        "Морской, железнодорожный или авиамаршрут",
      ],
      bannerTitle: "Нужно перевезти груз из Китая или Турции?",
      bannerSubtitle: "Свяжитесь с нами — вместе посчитаем маршрут, срок и стоимость.",
      callLabel: "Позвоните +86 181 0579 6454",
      emailLabel: "Напишите info@khan-cargo.com",
    },
    clients: {
      eyebrow: "Клиенты",
      title: "Кто заказывает груз из Китая",
      note: "По коммерческим грузам из Китая берём на себя все этапы B2B-модели. Для частных покупателей есть отдельная схема консолидации с ценой под малые объёмы.",
      rowLabels: ["Сегмент клиентов", "Типичный груз", "Подходящая схема"],
      rows: [
        ["Владельцы магазинов", "Промышленные предприниматели", "Мебель и HoReCa", "Продавцы электроники", "Частные покупатели"],
        ["Оптовая одежда, текстиль", "Оборудование, сырьё", "Устройства, гаджеты", "Заказы Alibaba, Taobao, 1688"],
        ["Регулярные контейнерные поставки", "FCL-контейнер", "Крупногабаритные перевозки", "Авиамаршрут или контейнер"],
      ],
    },
    localDelivery: {
      eyebrow: "Доставка",
      title: "Доставка по Азербайджану",
      body: "Khan Cargo доставляет грузы во все крупные города Азербайджана. В Баку и Сумгайыте работают выдача из офиса и курьерская служба, в регионы — через партнёрскую транспортную сеть.",
    },
    faq: {
      eyebrow: "Вопросы",
      title: "Частые вопросы",
      items: [
        {
          q: "Сколько занимает доставка из Китая в Азербайджан?",
          a: "Срок зависит от маршрута: море обычно несколько недель, железная дорога быстрее, авиа — несколько дней. Точный срок менеджер согласует по параметрам груза.",
        },
        {
          q: "Страховка требует отдельной оплаты?",
          a: "Нет. Она входит в стандартный тариф и считается по заявленной стоимости груза.",
        },
        {
          q: "Как передать поставщику в Китае адрес склада?",
          a: "После заключения договора менеджер присылает адрес нашего склада в Китае и правила приёма. Поставщик отправляет груз напрямую туда.",
        },
        {
          q: "Какой самый дешёвый вариант китайского карго?",
          a: "Обычно FCL/LCL-контейнер и море дают лучшую цену. Для мелких и срочных отправок чаще подходят авиа или смешанный маршрут.",
        },
        {
          q: "Как проходит оплата?",
          a: "Условия оплаты подтверждает менеджер после согласования маршрута и объёма. Счёт и документы выдаются полным пакетом.",
        },
        {
          q: "Принимаете заказы с Alibaba и Taobao?",
          a: "Да. Принимаем заказы с площадок на нашем складе в Китае, проверяем, консолидируем и отправляем в Азербайджан.",
        },
      ],
    },
  },
};
