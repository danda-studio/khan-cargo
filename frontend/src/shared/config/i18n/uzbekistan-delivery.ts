/**
 * Copyright © 2026 Khan Cargo.
 * All rights reserved.
 *
 * Developed by Danda Team.
 */

import type { ChinaDeliveryDict } from "./china-delivery";

export type UzbekistanDeliveryDict = ChinaDeliveryDict;

export const uzbekistanDeliveryByLocale: Record<"az" | "en" | "ru", UzbekistanDeliveryDict> = {
  az: {
    meta: {
      title: "Özbəkistandan çatdırılma | Khan Cargo",
      description:
        "Khan Cargo Özbəkistandan Azərbaycana TIR ilə yükdaşıma: Daşkənd və Kokand anbarları, sığorta, gömrük rəsmiləşdirməsi və 14 günə çatdırılma.",
    },
    hero: {
      title: "Özbəkistandan Azərbaycana TIR-larla yükdaşıma",
      lead: "Khan Cargo Özbəkistandan Azərbaycana avtomobil yükdaşımalarını əvvəldən sonadək təşkil edir. Malları Daşkənd və Kokanddakı anbarlarımızda bir partiyada toplayır, TIR-a yükləyir və 14 günə alıcıya çatdırırıq.",
      cta: "Qiyməti hesabla",
    },
    process: {
      eyebrow: "Özbəkistandan Azərbaycana çatdırılma müddəti",
      title:
        "TIR Daşkənd və ya Kokanddakı anbardan çıxır, Qazaxıstan ərazisindən keçir, Xəzər dənizində isə yükü ilə birlikdə bərəyə yüklənir.",
      titleMuted:
        "Azərbaycana 14 günə çatır. Bu müddətə yükləmə, sərhəd keçidləri, bərə, gömrük rəsmiləşdirməsi və boşaltma daxildir. Yük anbardan alıcıya qədər bütün yol boyu eyni TIR-da qalır.",
      side: "Menecer marşrut boyu sürücü ilə əlaqə saxlayır. Qrafikdə dəyişiklik olarsa, sizə əvvəlcədən xəbər verib yeni çatdırılma tarixini bildiririk.",
      cta: "Sınaq daşımasını sifariş et",
    },
    warehouse: {
      eyebrow: "Daşkənd və Kokanddakı anbarlarımız",
      title:
        "Khan Cargo Özbəkistanda iki anbarla işləyir. Daşkənd anbarı paytaxtdan və mərkəzi bölgələrdən, Kokand anbarı isə Fərqanə vadisindən — Kokand, Fərqanə, Marğilan, Əndican və Namanqandan yük qəbul edir. Təchizatçı malı ən yaxın anbara gətirir, beləcə Özbəkistan daxilində daşımaya daha az xərcləyirsiniz.",
      body: "Anbarda yükü qəbul edir, miqdarını sənədlərlə tutuşdurur və vəziyyətini fotolarla qeydə alırıq. Mal bir neçə təchizatçıdan gəlirsə, partiyanı bir TIR-da toplayırıq və yığma yükün daşınması daha ucuz başa gəlir.",
    },
    insurance: {
      eyebrow: "Sığorta",
      title: "Sığorta və xidmətə nələr daxildir",
      body: "Daşkənd və ya Kokanddakı anbarda qəbul etdiyimiz andan Azərbaycanda təhvil verənədək yük Khan Cargo-nun sığortası altındadır. Zədələnmə, itki və ya təhvil zamanı səhv olarsa, kompensasiya alırsınız. Sığorta yükün bəyan edilmiş dəyərinə görə hesablanır və artıq tarifə daxildir.",
      stagesTitle: "Xidmətə daxil olan mərhələlər:",
      stages: [
        "Yükün Daşkənd və ya Kokanddakı anbarda qəbulu və yoxlanması",
        "Yüklərin birləşdirilməsi və TIR-a yüklənməsi",
        "Sığorta",
        "Qazaxıstan üzərindən avtomobil marşrutu və Xəzərdə bərə ilə keçid",
        "Gömrük rəsmiləşdirməsi",
        "Sənəd dövriyyəsi: beynəlxalq CMR qaiməsi",
        "Yükün menecer vasitəsilə izlənməsi",
        "Yükün Azərbaycanda müştəriyə təhvili",
      ],
      mapAlt: "Azərbaycan xəritəsi",
    },
    shippingTypes: {
      eyebrow: "Xidmətlərimiz",
      title: "Özbəkistandan daşıma növləri",
      rowLabels: ["Daşıma növü", "Kimə uyğundur", "Üstünlük"],
      columns: [
        [
          "Tam TIR (FTL)",
          "Böyük partiyalar, avadanlıq, tikinti materialları",
          "TIR birbaşa sizin yükünüz üçün yola çıxır",
        ],
        [
          "Yığma yük (LTL)",
          "İri və orta topdançılar, onlayn mağazalar",
          "Yalnız öz həcminizə görə ödəyirsiniz",
        ],
        [
          "Müntəzəm göndərişlər",
          "Mağazalar, HoReCa, distribütorlar",
          "Sabit qrafik və müqavilə üzrə tarif",
        ],
        ["İrihəcmli yükdaşıma"],
      ],
    },
    customs: {
      eyebrow: "Gömrük rəsmiləşdirilməsi",
      title: "Gömrük rəsmiləşdirməsi Khan Cargo xidmətinə daxildir. Sizdən cəmi üç sənəd tələb olunur",
      note: "Özbəkistanda ixrac bəyannaməsini, tranziti və Azərbaycanda idxal rəsmiləşdirməsini hər iki ölkənin qanunvericiliyinə uyğun olaraq özümüz rəsmiləşdiririk.",
      cards: ["İnvoys", "Malın spesifikasiyası", "Yükün elan olunmuş dəyəri"],
    },
    workflow: {
      eyebrow: "Bizimlə iş mərhələləri",
      title: "Necə işləyirik",
      steps: [
        "Siz sorğu göndərirsiniz, menecer marşrutu və qiyməti hesablayır",
        "Təchizatçı malı Daşkənd və ya Kokanddakı anbarımıza gətirir",
        "Yükü yoxlayır, partiyanı toplayır və TIR-a yükləyirik",
        "TIR Azərbaycana yola düşür, 14 gün sonra yükünüzü təhvil alırsınız",
      ],
      bannerTitle: "Özbəkistandan Azərbaycana yük göndərməlisiniz?",
      bannerSubtitle: "Bizimlə əlaqə saxlayın — marşrutu, müddəti və qiyməti hesablayaq.",
      callLabel: "Zəng edin +998 77 351 53 83",
      emailLabel: "Yazın info@khan.az",
    },
    clients: {
      eyebrow: "Müştərilər",
      title: "Özbəkistandan çatdırılmanı kimlər sifariş edir",
      note: "Bir palet trikotaj göndərən mağaza da, tam TIR plitə daşıtdıran tikinti şirkəti də bizimlə eyni şərtlərlə işləyir. Sığorta artıq qiymətə daxildir, bəyannamələri özümüz rəsmiləşdiririk, TIR yolda olanda isə menecer zənglərə cavab verir.",
      rowLabels: ["Müştəri seqmenti", "Tipik yük", "Uyğun sxem"],
      rows: [
        ["Mağaza sahibləri", "Ərzaq topdançıları", "Tikinti şirkətləri", "Restoran və otellər", "Onlayn mağazalar"],
        [
          "Pambıq trikotaj, tekstil, geyim",
          "Quru meyvələr, qoz-fındıq, paxlalılar",
          "Keramik plitələr, tikinti materialları",
          "Qab-qacaq, tekstil, əl işi keramika",
          "Özbək brendlərinin məhsulları",
        ],
        ["Yığma yük, aylıq topdan alış", "Müntəzəm göndərişlər", "Tam TIR", "Müntəzəm göndərişlər", "Yığma yük"],
      ],
    },
    localDelivery: {
      eyebrow: "Çatdırılma",
      title: "Azərbaycan üzrə çatdırılma",
      body: "Khan Cargo yükləri Azərbaycanın 50-dən çox şəhərinə çatdırır. Bakı və Sumqayıtda yükü ofisimizdən götürə və ya kuryerlə ala bilərsiniz, bölgələrə isə tərəfdaş daşıyıcılarımız çatdırır.",
    },
    faq: {
      eyebrow: "Suallar",
      title: "Tez-tez verilən suallar",
      items: [
        {
          q: "Yük Özbəkistandan Azərbaycana neçə günə çatır?",
          a: "Standart müddət 14 gündür. Bu müddətə yükləmə, sərhəd keçidləri, Xəzərdə bərə, gömrük rəsmiləşdirməsi və boşaltma daxildir. Menecer marşrut boyu sürücü ilə əlaqə saxlayır və qrafikdə dəyişiklik olarsa, sizi əvvəlcədən məlumatlandırır.",
        },
        {
          q: "Hansı nəqliyyatla daşıyırsınız?",
          a: "Avtomobil nəqliyyatı ilə. TIR Özbəkistandan Qazaxıstana keçir, Xəzəri bərə ilə keçir və Azərbaycanda alıcıya çatır. Yük bütün yol boyu kuzovda qalır.",
        },
        {
          q: "Çatdırılma neçəyə başa gəlir?",
          a: "Qiymət yükün həcmindən, çəkisindən və daşıma növündən asılıdır: tam TIR və ya yığma yük. Dəqiq məbləği menecer sorğunuz əsasında hesablayır, sığorta artıq tarifə daxildir.",
        },
        {
          q: "Kiçik partiya göndərmək olar?",
          a: "Bəli. Kiçik həcmlər üçün yığma yük (LTL) sxemi var: yükünüz digər göndərişlərlə birlikdə bir TIR-da daşınır və yalnız öz həcminizə görə ödəyirsiniz.",
        },
        {
          q: "Anbar ünvanını təchizatçıya necə ötürüm?",
          a: "Menecerlə əlaqə saxlayın, sizə fərdi identifikator və anbarımızın Özbəkistan ünvanı verilir. Bundan sonra satıcı saytlarında bu ünvanı çatdırılma nöqtəsi kimi göstərəcəksiniz.",
        },
        {
          q: "Sığorta ayrıca ödənilir?",
          a: "Xeyr. Standart tarifə daxildir və yükün elan olunmuş dəyərinə görə hesablanır.",
        },
        {
          q: "Yükü necə izləyə bilərəm?",
          a: "Menecer hər mərhələdə məlumat verir. Əlavə olaraq +998 77 351 53 83 nömrəsi ilə birbaşa əlaqə saxlaya bilərsiniz.",
        },
      ],
    },
  },
  en: {
    meta: {
      title: "Delivery from Uzbekistan | Khan Cargo",
      description:
        "Khan Cargo trucking from Uzbekistan to Azerbaijan: Tashkent and Kokand warehouses, insurance, customs clearance and delivery in 14 days.",
    },
    hero: {
      title: "Trucking from Uzbekistan to Azerbaijan by TIR",
      lead: "Khan Cargo organizes road freight from Uzbekistan to Azerbaijan end to end. We consolidate goods in one lot at our Tashkent and Kokand warehouses, load them onto a TIR truck and deliver to the consignee in 14 days.",
      cta: "Calculate the price",
    },
    process: {
      eyebrow: "Delivery time from Uzbekistan to Azerbaijan",
      title:
        "The TIR leaves the Tashkent or Kokand warehouse, crosses Kazakhstan and is loaded onto a ferry with its cargo on the Caspian Sea.",
      titleMuted:
        "It reaches Azerbaijan in 14 days. This time includes loading, border crossings, the ferry, customs clearance and unloading. The cargo stays in the same TIR all the way from the warehouse to the consignee.",
      side: "A manager stays in touch with the driver along the route. If the schedule changes, we tell you in advance and give the new delivery date.",
      cta: "Order a trial shipment",
    },
    warehouse: {
      eyebrow: "Our Tashkent and Kokand warehouses",
      title:
        "Khan Cargo operates two warehouses in Uzbekistan. The Tashkent warehouse receives cargo from the capital and central regions, while the Kokand warehouse serves the Fergana Valley — Kokand, Fergana, Margilan, Andijan and Namangan. Your supplier brings goods to the nearest warehouse, so you spend less on transport inside Uzbekistan.",
      body: "At the warehouse we receive the cargo, check the quantity against the documents and record its condition with photos. If goods come from several suppliers, we combine the lot in one TIR, and consolidated freight costs less.",
    },
    insurance: {
      eyebrow: "Insurance",
      title: "Insurance and what’s included in the service",
      body: "From the moment we receive cargo at the Tashkent or Kokand warehouse until handover in Azerbaijan, it is insured by Khan Cargo. In case of damage, loss or a handover error you receive compensation. Insurance is calculated on the declared value of the cargo and is already included in the rate.",
      stagesTitle: "Stages included in the service:",
      stages: [
        "Intake and inspection of cargo at the Tashkent or Kokand warehouse",
        "Consolidation and loading onto a TIR",
        "Insurance",
        "Road route via Kazakhstan and ferry crossing on the Caspian",
        "Customs clearance",
        "Documents: international CMR waybill",
        "Cargo tracking via a manager",
        "Handover to the customer in Azerbaijan",
      ],
      mapAlt: "Map of Azerbaijan",
    },
    shippingTypes: {
      eyebrow: "Our services",
      title: "Shipping types from Uzbekistan",
      rowLabels: ["Shipping type", "Best for", "Advantage"],
      columns: [
        [
          "Full TIR (FTL)",
          "Large lots, equipment, building materials",
          "The TIR departs just for your cargo",
        ],
        [
          "Consolidated (LTL)",
          "Large and mid-size wholesalers, online stores",
          "You pay only for your own volume",
        ],
        [
          "Regular shipments",
          "Stores, HoReCa, distributors",
          "Fixed schedule and contract rate",
        ],
        ["Oversized freight"],
      ],
    },
    customs: {
      eyebrow: "Customs clearance",
      title: "Customs clearance is included in Khan Cargo’s service. We need just three documents from you",
      note: "We handle the export declaration in Uzbekistan, transit and import clearance in Azerbaijan ourselves, in line with the laws of both countries.",
      cards: ["Invoice", "Goods specification", "Declared cargo value"],
    },
    workflow: {
      eyebrow: "How working with us works",
      title: "How we work",
      steps: [
        "You send a request, a manager calculates the route and price",
        "The supplier brings goods to our Tashkent or Kokand warehouse",
        "We inspect the cargo, consolidate the lot and load the TIR",
        "The TIR leaves for Azerbaijan, and you receive your cargo 14 days later",
      ],
      bannerTitle: "Need to ship cargo from Uzbekistan to Azerbaijan?",
      bannerSubtitle: "Get in touch — we’ll calculate the route, timing and price.",
      callLabel: "Call +998 77 351 53 83",
      emailLabel: "Write to info@khan.az",
    },
    clients: {
      eyebrow: "Customers",
      title: "Who orders delivery from Uzbekistan",
      note: "A store shipping one pallet of knitwear and a construction company moving a full TIR of tiles work with us on the same terms. Insurance is included in the price, we handle the declarations ourselves, and while the TIR is on the road a manager answers your calls.",
      rowLabels: ["Customer segment", "Typical cargo", "Best scheme"],
      rows: [
        ["Store owners", "Food wholesalers", "Construction companies", "Restaurants and hotels", "Online stores"],
        [
          "Cotton knitwear, textiles, apparel",
          "Dried fruit, nuts, legumes",
          "Ceramic tiles, building materials",
          "Tableware, textiles, handmade ceramics",
          "Products of Uzbek brands",
        ],
        ["Consolidated freight, monthly wholesale", "Regular shipments", "Full TIR", "Regular shipments", "Consolidated freight"],
      ],
    },
    localDelivery: {
      eyebrow: "Delivery",
      title: "Delivery across Azerbaijan",
      body: "Khan Cargo delivers cargo to more than 50 cities in Azerbaijan. In Baku and Sumgayit you can pick it up from our office or receive it by courier, and our partner carriers deliver to the regions.",
    },
    faq: {
      eyebrow: "Questions",
      title: "Frequently asked questions",
      items: [
        {
          q: "How many days does cargo take from Uzbekistan to Azerbaijan?",
          a: "The standard time is 14 days. It includes loading, border crossings, the ferry on the Caspian, customs clearance and unloading. A manager stays in touch with the driver and warns you in advance if the schedule changes.",
        },
        {
          q: "What transport do you use?",
          a: "Road transport. The TIR goes from Uzbekistan to Kazakhstan, crosses the Caspian by ferry and reaches the consignee in Azerbaijan. The cargo stays in the same truck body all the way.",
        },
        {
          q: "How much does delivery cost?",
          a: "The price depends on cargo volume, weight and shipping type: full TIR or consolidated freight. A manager calculates the exact amount from your request, and insurance is already included in the rate.",
        },
        {
          q: "Can I send a small lot?",
          a: "Yes. For small volumes there is the consolidated freight (LTL) scheme: your cargo travels in one TIR with other shipments and you pay only for your own volume.",
        },
        {
          q: "How do I pass the warehouse address to the supplier?",
          a: "Contact a manager — you receive a personal ID and our Uzbekistan warehouse address. Then use that address as the delivery point on seller sites.",
        },
        {
          q: "Is insurance paid separately?",
          a: "No. It is included in the standard rate and calculated from the declared cargo value.",
        },
        {
          q: "How can I track my cargo?",
          a: "A manager updates you at every stage. You can also contact us directly at +998 77 351 53 83.",
        },
      ],
    },
  },
  ru: {
    meta: {
      title: "Доставка из Узбекистана | Khan Cargo",
      description:
        "Khan Cargo: автоперевозки из Узбекистана в Азербайджан — склады в Ташкенте и Коканде, страховка, таможенное оформление и доставка за 14 дней.",
    },
    hero: {
      title: "Перевозки из Узбекистана в Азербайджан фурами TIR",
      lead: "Khan Cargo организует автомобильные перевозки из Узбекистана в Азербайджан от начала и до конца. Мы собираем товары в одну партию на наших складах в Ташкенте и Коканде, загружаем в TIR и доставляем получателю за 14 дней.",
      cta: "Рассчитать стоимость",
    },
    process: {
      eyebrow: "Срок доставки из Узбекистана в Азербайджан",
      title:
        "TIR выезжает со склада в Ташкенте или Коканде, проезжает через Казахстан, а на Каспийском море вместе с грузом загружается на паром.",
      titleMuted:
        "В Азербайджан он прибывает за 14 дней. В этот срок входят погрузка, пересечение границ, паром, таможенное оформление и разгрузка. Груз остаётся в одном и том же TIR на всём пути от склада до получателя.",
      side: "Менеджер поддерживает связь с водителем на всём маршруте. Если график изменится, мы заранее сообщим вам и назовём новую дату доставки.",
      cta: "Заказать пробную перевозку",
    },
    warehouse: {
      eyebrow: "Наши склады в Ташкенте и Коканде",
      title:
        "Khan Cargo работает в Узбекистане с двумя складами. Ташкентский склад принимает грузы из столицы и центральных регионов, а кокандский — из Ферганской долины: Коканда, Ферганы, Маргилана, Андижана и Намангана. Поставщик привозит товар на ближайший склад, поэтому вы тратите меньше на перевозку внутри Узбекистана.",
      body: "На складе мы принимаем груз, сверяем количество с документами и фиксируем состояние на фото. Если товар приходит от нескольких поставщиков, мы собираем партию в одном TIR, а перевозка сборного груза обходится дешевле.",
    },
    insurance: {
      eyebrow: "Страховка",
      title: "Страховка и что входит в услугу",
      body: "С момента приёмки на складе в Ташкенте или Коканде и до передачи в Азербайджане груз застрахован Khan Cargo. При повреждении, потере или ошибке при выдаче вы получаете компенсацию. Страховка рассчитывается по заявленной стоимости груза и уже включена в тариф.",
      stagesTitle: "Этапы, входящие в услугу:",
      stages: [
        "Приёмка и проверка груза на складе в Ташкенте или Коканде",
        "Консолидация и загрузка в TIR",
        "Страховка",
        "Автомаршрут через Казахстан и переправа на пароме по Каспию",
        "Таможенное оформление",
        "Документооборот: международная накладная CMR",
        "Отслеживание груза через менеджера",
        "Передача груза клиенту в Азербайджане",
      ],
      mapAlt: "Карта Азербайджана",
    },
    shippingTypes: {
      eyebrow: "Наши услуги",
      title: "Виды перевозок из Узбекистана",
      rowLabels: ["Вид перевозки", "Кому подходит", "Преимущество"],
      columns: [
        [
          "Полный TIR (FTL)",
          "Крупные партии, оборудование, стройматериалы",
          "TIR выезжает только под ваш груз",
        ],
        [
          "Сборный груз (LTL)",
          "Крупные и средние оптовики, интернет-магазины",
          "Вы платите только за свой объём",
        ],
        [
          "Регулярные отправки",
          "Магазины, HoReCa, дистрибьюторы",
          "Постоянный график и тариф по договору",
        ],
        ["Негабаритные перевозки"],
      ],
    },
    customs: {
      eyebrow: "Таможенное оформление",
      title: "Таможенное оформление входит в услугу Khan Cargo. От вас требуется всего три документа",
      note: "Экспортную декларацию в Узбекистане, транзит и импортное оформление в Азербайджане мы оформляем сами в соответствии с законодательством обеих стран.",
      cards: ["Инвойс", "Спецификация товара", "Заявленная стоимость груза"],
    },
    workflow: {
      eyebrow: "Этапы работы с нами",
      title: "Как мы работаем",
      steps: [
        "Вы отправляете заявку, менеджер рассчитывает маршрут и стоимость",
        "Поставщик привозит товар на наш склад в Ташкенте или Коканде",
        "Мы проверяем груз, собираем партию и загружаем её в TIR",
        "TIR отправляется в Азербайджан, и через 14 дней вы получаете груз",
      ],
      bannerTitle: "Нужно отправить груз из Узбекистана в Азербайджан?",
      bannerSubtitle: "Свяжитесь с нами — вместе рассчитаем маршрут, срок и стоимость.",
      callLabel: "Позвоните +998 77 351 53 83",
      emailLabel: "Напишите info@khan.az",
    },
    clients: {
      eyebrow: "Клиенты",
      title: "Кто заказывает доставку из Узбекистана",
      note: "Магазин, отправляющий один паллет трикотажа, и строительная компания, везущая полный TIR плитки, работают с нами на одинаковых условиях. Страховка уже включена в цену, декларации мы оформляем сами, а пока TIR в пути, менеджер отвечает на ваши звонки.",
      rowLabels: ["Сегмент клиента", "Типичный груз", "Подходящая схема"],
      rows: [
        ["Владельцы магазинов", "Оптовики продуктов", "Строительные компании", "Рестораны и отели", "Интернет-магазины"],
        [
          "Хлопковый трикотаж, текстиль, одежда",
          "Сухофрукты, орехи, бобовые",
          "Керамическая плитка, стройматериалы",
          "Посуда, текстиль, керамика ручной работы",
          "Продукция узбекских брендов",
        ],
        ["Сборный груз, ежемесячный опт", "Регулярные отправки", "Полный TIR", "Регулярные отправки", "Сборный груз"],
      ],
    },
    localDelivery: {
      eyebrow: "Доставка",
      title: "Доставка по Азербайджану",
      body: "Khan Cargo доставляет грузы более чем в 50 городов Азербайджана. В Баку и Сумгайыте груз можно забрать из нашего офиса или получить курьером, а в регионы его доставляют наши партнёры-перевозчики.",
    },
    faq: {
      eyebrow: "Вопросы",
      title: "Часто задаваемые вопросы",
      items: [
        {
          q: "За сколько дней груз доходит из Узбекистана в Азербайджан?",
          a: "Стандартный срок — 14 дней. В него входят погрузка, пересечение границ, паром по Каспию, таможенное оформление и разгрузка. Менеджер на связи с водителем и заранее предупредит вас, если график изменится.",
        },
        {
          q: "Каким транспортом вы возите?",
          a: "Автомобильным. TIR идёт из Узбекистана в Казахстан, пересекает Каспий на пароме и доезжает до получателя в Азербайджане. Груз всё время остаётся в кузове.",
        },
        {
          q: "Сколько стоит доставка?",
          a: "Цена зависит от объёма, веса груза и вида перевозки: полный TIR или сборный груз. Точную сумму менеджер рассчитает по вашей заявке, страховка уже включена в тариф.",
        },
        {
          q: "Можно ли отправить небольшую партию?",
          a: "Да. Для небольших объёмов есть схема сборного груза (LTL): ваш груз едет в одном TIR с другими отправками, а платите вы только за свой объём.",
        },
        {
          q: "Как передать адрес склада поставщику?",
          a: "Свяжитесь с менеджером — вам выдадут персональный идентификатор и адрес нашего склада в Узбекистане. Затем укажите этот адрес как пункт доставки на сайтах продавцов.",
        },
        {
          q: "Страховка оплачивается отдельно?",
          a: "Нет. Она входит в стандартный тариф и считается по заявленной стоимости груза.",
        },
        {
          q: "Как отследить груз?",
          a: "Менеджер сообщает на каждом этапе. Дополнительно можно связаться напрямую по номеру +998 77 351 53 83.",
        },
      ],
    },
  },
};
