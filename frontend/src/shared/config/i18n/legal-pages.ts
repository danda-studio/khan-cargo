export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalDocDict = {
  meta: { title: string; description: string };
  title: string;
  companyLine: string;
  backHome: string;
  intro: string[];
  sections: LegalSection[];
};

export type LegalPagesDict = {
  privacyPolicy: LegalDocDict;
  personalData: LegalDocDict;
};

export const legalPagesByLocale: Record<"az" | "en" | "ru", LegalPagesDict> = {
  az: {
    privacyPolicy: {
      meta: {
        title: "Gizlilik Siyasəti",
        description:
          "Khan Kargo MMC gizlilik siyasəti — www.khan.az saytında və xidmətlərdə şəxsi məlumatların işlənməsi qaydaları.",
      },
      title: "Gizlilik Siyasəti",
      companyLine: "Khan Kargo MMC — www.khan.az",
      backHome: "Ana səhifəyə qayıt",
      intro: [
        "Bu Gizlilik Siyasəti “Khan Kargo” MMC (bundan sonra “Khan Kargo”, “Şirkət” və ya “biz”) tərəfindən www.khan.az saytından və Şirkətin xidmətlərindən istifadə çərçivəsində toplanan şəxsi məlumatların işlənməsi qaydalarını müəyyən edir. Saytdan istifadə etməklə, qeydiyyatdan keçməklə və ya xidmət sifariş etməklə istifadəçi bu Siyasətin şərtləri ilə tanış olduğunu və onları qəbul etdiyini təsdiq edir.",
        "Siyasət Azərbaycan Respublikasının “Fərdi məlumatlar haqqında” Qanununa və digər müvafiq normativ-hüquqi aktlara əsaslanır.",
      ],
      sections: [
        {
          title: "Ümumi müddəalar",
          paragraphs: [
            "Şəxsi məlumat dedikdə, müştərilərin Khan Kargo-nun xidmətlərindən istifadə zamanı Şirkətə təqdim etdikləri, fiziki və ya hüquqi şəxsin eyniləşdirilməsinə imkan verən istənilən məlumat başa düşülür.",
            "Khan Kargo müştəri məlumatlarının məxfiliyinin qorunmasına ciddiyyətlə yanaşır və istifadəçinin razılığı olmadan həmin məlumatları üçüncü şəxslərə ötürmür. Qanunla müəyyən edilən istisnalar 4-cü bölmədə göstərilir.",
            "Şirkət hazırkı Siyasətə dəyişikliklər etmək hüququnu özündə saxlayır. Yenilənmiş redaksiya saytda dərc olunduğu andan qüvvəyə minir. İstifadəçi Siyasətin cari versiyası ilə mütəmadi olaraq tanış olmaq öhdəliyini götürür.",
          ],
        },
        {
          title: "Toplanan məlumatlar",
          paragraphs: [
            "Xidmətlərin göstərilməsi və müştəri profilinin yaradılması üçün Khan Kargo aşağıdakı kateqoriyalarda məlumat toplayır:",
            "Şəxsiyyət məlumatları: ad, soyad, ata adı, doğum tarixi, şəxsiyyət vəsiqəsinin seriya nömrəsi, FİN kod.",
            "Əlaqə məlumatları: telefon nömrəsi, elektron poçt ünvanı, faktiki və qeydiyyat ünvanı.",
            "Hüquqi şəxslər üçün: şirkətin adı, VÖEN, hüquqi ünvan, səlahiyyətli nümayəndənin əlaqə məlumatları.",
            "Ödəniş məlumatları: bank kartının məlumatları (kart nömrəsi Şirkət tərəfindən saxlanmır, ödənişlər sertifikatlaşdırılmış ödəniş sistemləri vasitəsilə həyata keçirilir).",
            "Yük və sifariş məlumatları: göndərənin rekvizitləri, track nömrələri, invoys sənədləri, yükün təsviri, çəkisi və ölçüləri.",
            "Texniki məlumatlar: IP ünvan, brauzer növü, cihaz növü, saytın istifadə statistikası, cookie faylları.",
            "Qeydiyyat formasında natamam və ya qeyri-dəqiq məlumatların təqdim edilməsi xidmətin dayandırılmasına və ya tam sonlandırılmasına səbəb ola bilər. Təqdim olunan cavabların doğruluğuna görə istifadəçi məsuliyyət daşıyır.",
          ],
        },
        {
          title: "Məlumatların istifadə məqsədləri",
          paragraphs: [
            "Khan Kargo topladığı şəxsi məlumatları aşağıdakı məqsədlərlə istifadə edir:",
            "Müştəri hesabının yaradılması, identifikasiyası və idarə edilməsi.",
            "Yüklərin daşınması, gömrük rəsmiləşdirilməsi və çatdırılması üzrə xidmətlərin göstərilməsi.",
            "Azərbaycan Respublikası Dövlət Gömrük Komitəsinin tələb etdiyi bəyannamə məlumatlarının hazırlanması.",
            "Ödənişlərin qəbulu və hesab-fakturaların rəsmiləşdirilməsi.",
            "Müştəri ilə əlaqə saxlanması, sifariş statusları barədə bildirişlərin göndərilməsi.",
            "Müştərinin maraqlarına uyğun hesab edilən Khan Kargo xidmətləri və tərəfdaş təklifləri barədə informasiya, marketinq və reklam materiallarının göndərilməsi (müştərinin əvvəlcədən verdiyi razılıq əsasında).",
            "Şirkətin qanuni maraqlarının müdafiəsi və mübahisələrin həlli.",
            "Xidmət keyfiyyətinin qiymətləndirilməsi, analitika və statistika məqsədləri üçün təhlil.",
            "Azərbaycan Respublikasının qanunvericiliyi ilə nəzərdə tutulmuş öhdəliklərin yerinə yetirilməsi.",
          ],
        },
        {
          title: "Üçüncü tərəflərə ötürülməsi",
          paragraphs: [
            "Khan Kargo müştəri məlumatlarını üçüncü tərəflərə yalnız aşağıdakı hallarda təqdim edir:",
            "Xidmətin icrası üçün cəlb olunan tərəfdaşlara. Buraya beynəlxalq və yerli daşıyıcı şirkətlər, gömrük brokerləri, kuryer xidmətləri, anbar operatorları, ödəniş sistemləri və bank təşkilatları aiddir. Bu tərəfdaşlar məlumatlara yalnız öz vəzifələrini yerinə yetirmək üçün lazım olan həcmdə çıxış əldə edirlər.",
            "Azərbaycan Respublikasının qanunvericiliyinin tələb etdiyi hallarda, o cümlədən dövlət orqanlarının, məhkəmələrin və ya səlahiyyətli hüquq-mühafizə qurumlarının rəsmi sorğuları əsasında.",
            "Şirkətin hüquqlarının və qanuni maraqlarının müdafiəsi məqsədilə.",
            "Müştərinin aydın və birmənalı razılığı olduğu hallarda.",
            "Reklam və marketinq məqsədləri ilə şəxsi məlumatların üçüncü tərəflərə satılması istisna edilir.",
          ],
        },
        {
          title: "Cookie faylları və analitika",
          paragraphs: [
            "Saytda istifadə təcrübəsini yaxşılaşdırmaq, sessiya vəziyyətini saxlamaq və istifadə statistikasını təhlil etmək üçün cookie fayllarından istifadə olunur. İstifadəçi öz brauzerinin parametrləri vasitəsilə cookie fayllarının qəbulunu məhdudlaşdıra bilər, lakin bu, saytın bəzi funksiyalarının işini məhdudlaşdıra bilər.",
            "Khan Kargo trafik analitikası üçün Google Analytics və analoji xidmətlərdən istifadə edir. Bu xidmətlər anonimləşdirilmiş məlumatlarla işləyir.",
          ],
        },
        {
          title: "Təhlükəsizlik tədbirləri",
          paragraphs: [
            "Khan Kargo şəxsi məlumatların qeyri-qanuni əldə edilməsindən, dəyişdirilməsindən, açıqlanmasından və ya məhv edilməsindən qorunması üçün təşkilati və texniki tədbirlər həyata keçirir. Bu tədbirlərə şifrələmə, giriş hüquqlarının məhdudlaşdırılması, mütəmadi ehtiyat nüsxələrin yaradılması və işçilər üçün məxfilik təlimatları daxildir.",
            "Ödəniş məlumatları PCI DSS tələblərinə cavab verən sertifikatlaşdırılmış prosessinq mərkəzləri vasitəsilə emal olunur. Şirkət bank kartlarının tam nömrələrini və CVV kodlarını saxlamır.",
            "İnternet vasitəsilə məlumat ötürülməsinin təbiətini nəzərə alaraq, Khan Kargo bütün mümkün tədbirləri həyata keçirsə də, ötürmə prosesinin 100% təhlükəsizliyinə mütləq zəmanət verə bilmir.",
          ],
        },
        {
          title: "Məlumatların saxlanma müddəti",
          paragraphs: [
            "Şəxsi məlumatlar xidmətin göstərilməsi məqsədi ilə tələb olunan müddət ərzində və Azərbaycan Respublikasının qanunvericiliyinin tələb etdiyi arxivləşdirmə müddəti çərçivəsində saxlanılır. Mühasibat, gömrük və vergi sənədləri qanunla müəyyən olunmuş müddət (adətən 5 il) ərzində arxivdə qalır. Bu müddət başa çatdıqdan sonra məlumatlar məhv edilir və ya anonimləşdirilir.",
          ],
        },
        {
          title: "İstifadəçinin hüquqları",
          paragraphs: [
            "Azərbaycan Respublikasının “Fərdi məlumatlar haqqında” Qanununa əsasən istifadəçi aşağıdakı hüquqlara malikdir:",
            "Öz şəxsi məlumatlarının emalı barədə informasiya almaq, emalın məqsəd və üsullarını öyrənmək.",
            "Qeyri-dəqiq və ya köhnəlmiş məlumatların düzəldilməsini tələb etmək.",
            "Qanuni əsaslar olmadıqda, məlumatların silinməsini və ya işlənməsinin dayandırılmasını tələb etmək.",
            "Marketinq bildirişlərinin göndərilməsindən istənilən vaxt imtina etmək.",
            "Şəxsi məlumatların işlənməsi ilə bağlı şikayətlə səlahiyyətli dövlət orqanına müraciət etmək.",
            "Yuxarıda göstərilən hüquqların həyata keçirilməsi üçün müştəri 9-cu bölmədə göstərilən rekvizitlər üzrə Şirkətə yazılı müraciət edə bilər. Sorğular 30 iş günü ərzində baxılır.",
          ],
        },
        {
          title: "Əlaqə",
          paragraphs: [
            "Şəxsi məlumatların işlənməsi ilə bağlı sual, sorğu və şikayətlər üçün Khan Kargo ilə əlaqə saxlaya bilərsiniz:",
            "Şirkət: “Khan Kargo” MMC",
            "Elektron poçt: info@khan.az",
            "Telefon: (+994) 70 210 10 39",
            "Ünvan: Abşeron T/M sıra 2, korpus 2, Mağaza 10",
          ],
        },
        {
          title: "Yekun müddəalar",
          paragraphs: [
            "Hazırkı Siyasət Azərbaycan Respublikasının qanunvericiliyi ilə tənzimlənir. Siyasətin şərhi və tətbiqi ilə bağlı yaranan mübahisələr tərəflər arasında danışıqlar yolu ilə həll edilir. Razılığa gəlinmədiyi halda mübahisələr Azərbaycan Respublikasının səlahiyyətli məhkəmələrinə verilir.",
            "Bu Gizlilik Siyasətinin şərtləri ilə razılaşmadıqda saytdan istifadəni dayandırın və xidmətlərdən imtina edin.",
          ],
        },
      ],
    },
    personalData: {
      meta: {
        title: "Şəxsi Məlumatların Qorunması",
        description:
          "Khan Kargo MMC şəxsi məlumatların qorunması — emal prinsipləri, təhlükəsizlik tədbirləri və müştəri hüquqları.",
      },
      title: "Şəxsi Məlumatların Qorunması",
      companyLine: "Khan Kargo MMC — www.khan.az",
      backHome: "Ana səhifəyə qayıt",
      intro: [
        "Bu sənəd “Khan Kargo” MMC-nin (bundan sonra “Khan Kargo” və ya “Şirkət”) müştərilərin şəxsi məlumatlarını emal edərkən rəhbər tutduğu prinsipləri və tətbiq etdiyi təhlükəsizlik tədbirlərini müəyyən edir.",
        "Şəxsi məlumat dedikdə müştərilərin Khan Kargo-nun xidmətlərindən istifadə zamanı Şirkətə təqdim etdikləri, fiziki və ya hüquqi şəxsin eyniləşdirilməsinə imkan verən istənilən məlumat başa düşülür. Sənəd Azərbaycan Respublikasının “Fərdi məlumatlar haqqında” Qanununun tələblərinə uyğundur.",
      ],
      sections: [
        {
          title: "Ümumi prinsiplər",
          paragraphs: [
            "Khan Kargo müştəri məlumatlarını yalnız aydın, qanuni və əvvəlcədən elan edilmiş məqsədlər üçün toplayır və emal edir. Şirkət aşağıdakı məqsədlərlə müştərinin şəxsi məlumatlarını istifadə edə və ya açıqlaya bilər: Müştəri xidmət seçimlərini təyin etmək və fərdiləşdirilmiş həllər təklif etmək. İnformasiya, təbliğat, Şirkətin məhsul və xidmətləri, marketinq və reklam materialları barədə müştərini məlumatlandırmaq. Khan Kargo-nun qanuni maraqlarını qorumaq. Ədalət mühakiməsi zamanı qanunla nəzərdə tutulmuş öhdəlikləri yerinə yetirmək. Müştərinin maraqlarına uyğun hesab edilən Khan Kargo xidmətlərini və üçüncü tərəfin xüsusi təkliflərini təbliğ etmək. Khan Kargo qeydiyyat formasında tələb olunan şəxsi məlumatları Azərbaycan Respublikası Dövlət Gömrük Komitəsinin tələblərinə uyğun olaraq və müştəriyə keyfiyyətli xidmət göstərmək məqsədilə toplayır. Şirkət istifadəçinin şəxsi məlumatlarını, o cümlədən ödəniş zamanı istifadə etdiyi kart məlumatlarını, onun razılığı olmadan üçüncü tərəfə təqdim etməmək öhdəliyini götürür. Bu qaydanın istisnalarına yalnız Azərbaycan Respublikasının qanunvericiliyi ilə birbaşa nəzərdə tutulmuş hallar aiddir.",
          ],
        },
        {
          title: "Emalın hüquqi əsasları",
          paragraphs: [
            "Khan Kargo şəxsi məlumatları aşağıdakı hüquqi əsaslarla emal edir: Müştərinin öz şəxsi məlumatlarının emalına verdiyi razılıq. Razılıq saytda qeydiyyat, xidmət sifarişi və ya ayrıca bir formanın doldurulması yolu ilə ifadə olunur. Müştəri ilə bağlanmış müqavilənin icrası. Azərbaycan Respublikasının qanunvericiliyi ilə Şirkət üzərinə qoyulmuş öhdəliklərin yerinə yetirilməsi. Bura gömrük, vergi və mühasibat qanunvericiliyinin tələbləri daxildir. Şirkətin qanuni maraqları, o cümlədən dələduzluğun qarşısının alınması, xidmət keyfiyyətinin təhlili və mübahisələrin həlli.",
          ],
        },
        {
          title: "Emal edilən məlumatların kateqoriyaları",
          paragraphs: [
            "Xidmətlərin göstərilməsi üçün Khan Kargo aşağıdakı məlumatları toplayır və emal edir: Fiziki şəxslər üçün: Ad, soyad, ata adı, doğum tarixi. Şəxsiyyət vəsiqəsinin seriya nömrəsi və FİN kod. Faktiki yaşayış və qeydiyyat ünvanı. Telefon nömrəsi və elektron poçt ünvanı. Ödəniş kartının rekvizitləri (Şirkət tərəfindən tam nömrə saxlanmır). Hüquqi şəxslər üçün: Şirkətin rəsmi adı və təşkilati-hüquqi forması. VÖEN və hüquqi ünvan. Səlahiyyətli nümayəndənin əlaqə məlumatları. Bank rekvizitləri. Yük və əməliyyat məlumatları: Göndərənin adı və rekvizitləri. Track (izləmə) nömrələri və invoys sənədləri. Yükün təsviri, çəkisi, ölçüləri və dəyəri. Bəyannamə üçün tələb olunan digər sənədlər. Texniki məlumatlar: IP ünvan, brauzer və cihaz məlumatları. Saytda hərəkət statistikası və cookie faylları.",
          ],
        },
        {
          title: "Təhlükəsizlik prinsipləri",
          paragraphs: [
            "Khan Kargo müştərilərin şəxsi məlumatlarının, o cümlədən ödəniş zamanı istifadə etdikləri kart məlumatlarının səhvən silinməsinin və ya açıqlanmasının qarşısını almaq məqsədilə təşkilati və texniki tədbirlər həyata keçirir. Təşkilati tədbirlər: Şəxsi məlumatlarla iş qaydalarının daxili sənədlərdə təsbit edilməsi. İşçilər üçün məxfilik öhdəlikləri və müntəzəm təlimlər. Şəxsi məlumatlara giriş hüququnun yalnız vəzifə öhdəlikləri çərçivəsində zəruri işçilərə verilməsi. Məlumatların işlənməsi üzərində daxili nəzarət və auditlər. Texniki tədbirlər: Məlumatların ötürülməsi zamanı SSL/TLS protokolları vasitəsilə şifrələmə. Verilənlər bazasına giriş hüquqlarının çox səviyyəli sistemi. Mütəmadi ehtiyat nüsxələrin yaradılması və ehtiyat serverlərdə saxlanması. Antivirus mühafizəsi, şəbəkə ekranları və mümkün təhdidlərin monitorinqi. Ödənişlərin PCI DSS standartına uyğun sertifikatlaşdırılmış prosessinq mərkəzləri vasitəsilə emalı. Fiziki tədbirlər: Serverlərin və məlumat daşıyıcılarının məhdud girişli mühafizə olunan yerlərdə saxlanması. Yanğın və digər xarici risklərdən qorunma sistemləri. Khan Kargo müştərilərinin şəxsi məlumatlarının və ödəniş zamanı istifadə etdikləri kart məlumatlarının qorunmasına cavabdehdir.",
          ],
        },
        {
          title: "Məlumatların saxlanma müddəti",
          paragraphs: [
            "Şəxsi məlumatlar aşağıdakı prinsiplərlə saxlanılır: Xidmətin göstərilməsi ilə bağlı məlumatlar müştəri hesabı aktiv olduğu müddət ərzində və hesabın ləğvindən sonra qanunla müəyyən edilmiş arxiv müddətində saxlanılır. Gömrük, mühasibat və vergi sənədləri qanunvericiliyin tələb etdiyi müddət ərzində (adətən 5 il) arxivdə saxlanılır. Marketinq razılığı əsasında toplanan məlumatlar müştəri razılığı geri götürənə qədər emal olunur. Saxlanma müddəti başa çatdıqda məlumatlar geri qaytarılması mümkün olmayan üsulla məhv edilir və ya anonimləşdirilir.",
          ],
        },
        {
          title: "Məlumat subyektinin öhdəlikləri",
          paragraphs: [
            "Müştəri qeydiyyat formasında tələb olunan məlumatlara verdiyi cavablara görə məsuliyyət daşıyır. Qeydiyyat formasında tələb olunan informasiyaya natamam və ya qeyri-dəqiq cavab verildikdə, Şirkət müştəriyə göstərilən xidməti dayandırmaq və ya tam sonlandırmaq hüququnu özündə saxlayır.",
            "Müştəri təqdim etdiyi məlumatların doğruluğunu təmin etmək və dəyişikliklər zamanı Şirkəti operativ məlumatlandırmaq öhdəliyini götürür.",
          ],
        },
        {
          title: "Məlumat subyektinin hüquqları",
          paragraphs: [
            "Azərbaycan Respublikasının “Fərdi məlumatlar haqqında” Qanununa əsasən müştəri: Öz məlumatlarının emalı barədə informasiya almaq hüququna malikdir. Qeyri-dəqiq və ya köhnəlmiş məlumatların düzəldilməsini tələb edə bilər. Qanuni əsaslar olmadıqda məlumatların silinməsini tələb edə bilər. Şəxsi məlumatların emalına verilmiş razılığı istənilən vaxt geri götürə bilər. Marketinq xarakterli bildirişlərdən imtina edə bilər. Şəxsi məlumatların emalı qaydalarının pozulması ilə bağlı səlahiyyətli dövlət orqanına şikayət verə bilər. Bu hüquqları həyata keçirmək üçün müştəri info@khan.az elektron poçt ünvanına və ya Şirkətin rəsmi ünvanına yazılı müraciət göndərə bilər. Sorğular 30 iş günü ərzində baxılır.",
          ],
        },
        {
          title: "Məlumat pozuntusu halında hərəkət qaydası",
          paragraphs: [
            "Şəxsi məlumatların qanunsuz əldə edilməsi, itirilməsi və ya açıqlanması aşkar edildikdə Khan Kargo: Pozuntunun səbəbini və miqyasını araşdırır. Pozuntunun nəticələrini aradan qaldırmaq üçün təxirəsalınmaz tədbirlər həyata keçirir. Qanunvericiliyin tələbi əsasında səlahiyyətli dövlət orqanını və zərərçəkən müştəriləri məlumatlandırır. Analoji hadisələrin qarşısının alınması üçün əlavə təhlükəsizlik tədbirləri tətbiq edir.",
          ],
        },
        {
          title: "Sənədin dəyişdirilməsi",
          paragraphs: [
            "Khan Kargo bu sənədə dəyişikliklər etmək hüququnu özündə saxlayır. Yenilənmiş redaksiya saytda dərc olunduğu andan qüvvəyə minir. Əhəmiyyətli dəyişikliklər barədə müştərilər elektron poçt və ya saytda yerləşdirilən bildiriş vasitəsilə məlumatlandırılır.",
          ],
        },
        {
          title: "Əlaqə",
          paragraphs: [
            "Şəxsi məlumatların işlənməsi ilə bağlı sual, sorğu və şikayətlər üçün Khan Kargo ilə əlaqə saxlaya bilərsiniz:",
            "Şirkət: “Khan Kargo” MMC",
            "Elektron poçt: info@khan.az",
            "Telefon: (+994) 70 210 10 39",
            "Ünvan: Abşeron T/M sıra 2, korpus 2, Mağaza 10",
          ],
        },
      ],
    },
  },
  en: {
    privacyPolicy: {
      meta: {
        title: "Privacy Policy",
        description:
          "Khan Cargo LLC privacy policy — rules for processing personal data on www.khan.az and related services.",
      },
      title: "Privacy Policy",
      companyLine: "Khan Cargo LLC — www.khan.az",
      backHome: "Back to homepage",
      intro: [
        "This Privacy Policy sets out the rules for processing personal data collected by “Khan Cargo” LLC (hereinafter “Khan Cargo”, the “Company”, or “we”) when using www.khan.az and the Company’s services. By using the site, registering, or ordering a service, the user confirms that they have read and accept the terms of this Policy.",
        "The Policy is based on the Law of the Republic of Azerbaijan “On Personal Data” and other applicable legal acts.",
      ],
      sections: [
        {
          title: "General provisions",
          paragraphs: [
            "Personal data means any information provided by customers when using Khan Cargo services that makes it possible to identify a natural or legal person.",
            "Khan Cargo takes the confidentiality of customer data seriously and does not transfer such data to third parties without the user’s consent. Exceptions provided by law are set out in section 4.",
            "The Company reserves the right to amend this Policy. The updated version takes effect when published on the site. The user undertakes to review the current version of the Policy regularly.",
          ],
        },
        {
          title: "Data collected",
          paragraphs: [
            "To provide services and create a customer profile, Khan Cargo collects data in the following categories:",
            "Identity data: first name, last name, patronymic, date of birth, ID series and number, PIN code.",
            "Contact data: phone number, email address, actual and registered address.",
            "For legal entities: company name, TIN, legal address, authorized representative’s contact details.",
            "Payment data: bank card details (the card number is not stored by the Company; payments are processed via certified payment systems).",
            "Shipment and order data: sender details, tracking numbers, invoices, description, weight, and dimensions of the cargo.",
            "Technical data: IP address, browser type, device type, site usage statistics, cookies.",
            "Providing incomplete or inaccurate information in the registration form may result in suspension or termination of the service. The user is responsible for the accuracy of the information provided.",
          ],
        },
        {
          title: "Purposes of use",
          paragraphs: [
            "Khan Cargo uses the personal data it collects for the following purposes:",
            "Creating, identifying, and managing a customer account.",
            "Providing transportation, customs clearance, and delivery services.",
            "Preparing declaration data required by the State Customs Committee of the Republic of Azerbaijan.",
            "Accepting payments and issuing invoices.",
            "Communicating with the customer and sending order status notifications.",
            "Sending information, marketing, and advertising materials about Khan Cargo services and partner offers considered relevant to the customer (based on prior consent).",
            "Protecting the Company’s legitimate interests and resolving disputes.",
            "Evaluating service quality and conducting analytics and statistics.",
            "Fulfilling obligations under the legislation of the Republic of Azerbaijan.",
          ],
        },
        {
          title: "Transfer to third parties",
          paragraphs: [
            "Khan Cargo provides customer data to third parties only in the following cases:",
            "To partners engaged to perform the service, including international and local carriers, customs brokers, courier services, warehouse operators, payment systems, and banks. These partners access data only to the extent needed to perform their duties.",
            "When required by the legislation of the Republic of Azerbaijan, including official requests from state authorities, courts, or authorized law-enforcement bodies.",
            "To protect the Company’s rights and legitimate interests.",
            "When the customer has given clear and unambiguous consent.",
            "Sale of personal data to third parties for advertising or marketing purposes is excluded.",
          ],
        },
        {
          title: "Cookies and analytics",
          paragraphs: [
            "Cookies are used to improve the site experience, maintain session state, and analyze usage statistics. Users may restrict cookies in their browser settings, which may limit some site features.",
            "Khan Cargo uses Google Analytics and similar services for traffic analytics. These services work with anonymized data.",
          ],
        },
        {
          title: "Security measures",
          paragraphs: [
            "Khan Cargo implements organizational and technical measures to protect personal data from unlawful access, alteration, disclosure, or destruction, including encryption, access control, regular backups, and confidentiality instructions for employees.",
            "Payment data is processed through certified processing centers that meet PCI DSS requirements. The Company does not store full bank card numbers or CVV codes.",
            "Given the nature of internet data transmission, Khan Cargo cannot guarantee absolute 100% security of transmission despite taking all reasonable measures.",
          ],
        },
        {
          title: "Data retention period",
          paragraphs: [
            "Personal data is retained for as long as needed to provide the service and for the archiving period required by Azerbaijani law. Accounting, customs, and tax documents are typically kept for 5 years. After that period, data is destroyed or anonymized.",
          ],
        },
        {
          title: "User rights",
          paragraphs: [
            "Under the Law of the Republic of Azerbaijan “On Personal Data”, the user has the right to:",
            "Receive information about the processing of their personal data, including purposes and methods.",
            "Request correction of inaccurate or outdated data.",
            "Request deletion or cessation of processing when there is no legal basis.",
            "Opt out of marketing communications at any time.",
            "File a complaint with the competent state authority regarding personal data processing.",
            "To exercise these rights, the customer may submit a written request using the details in section 9. Requests are reviewed within 30 business days.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "For questions, requests, and complaints about personal data processing, contact Khan Cargo:",
            "Company: “Khan Cargo” LLC",
            "Email: info@khan.az",
            "Phone: (+994) 70 210 10 39",
            "Address: Absheron Trade Center, row 2, building 2, Shop 10",
          ],
        },
        {
          title: "Final provisions",
          paragraphs: [
            "This Policy is governed by the legislation of the Republic of Azerbaijan. Disputes arising from interpretation or application are resolved through negotiations. If no agreement is reached, disputes are referred to the competent courts of the Republic of Azerbaijan.",
            "If you do not agree with the terms of this Privacy Policy, stop using the site and decline the services.",
          ],
        },
      ],
    },
    personalData: {
      meta: {
        title: "Personal Data Protection",
        description:
          "Khan Cargo LLC personal data protection — processing principles, security measures, and customer rights.",
      },
      title: "Personal Data Protection",
      companyLine: "Khan Cargo LLC — www.khan.az",
      backHome: "Back to homepage",
      intro: [
        "This document sets out the principles and security measures applied by “Khan Cargo” LLC (hereinafter “Khan Cargo” or the “Company”) when processing customers’ personal data.",
        "Personal data means any information provided by customers when using Khan Cargo services that makes it possible to identify a natural or legal person. The document complies with the Law of the Republic of Azerbaijan “On Personal Data”.",
      ],
      sections: [
        {
          title: "General principles",
          paragraphs: [
            "Khan Cargo collects and processes customer data only for clear, lawful, and previously stated purposes. The Company may use or disclose personal data to: determine service preferences and offer personalized solutions; inform the customer about products, services, marketing, and advertising; protect Khan Cargo’s legitimate interests; fulfill legal obligations in judicial proceedings; promote Khan Cargo services and third-party special offers considered relevant to the customer. Registration data is collected in line with State Customs Committee requirements and to provide quality service. The Company undertakes not to disclose personal data, including payment card data, to third parties without consent, except where directly required by Azerbaijani law.",
          ],
        },
        {
          title: "Legal bases for processing",
          paragraphs: [
            "Khan Cargo processes personal data on the following legal bases: the customer’s consent to processing, expressed through registration, ordering a service, or completing a separate form; performance of a contract with the customer; obligations imposed by Azerbaijani law, including customs, tax, and accounting requirements; the Company’s legitimate interests, including fraud prevention, service quality analysis, and dispute resolution.",
          ],
        },
        {
          title: "Categories of processed data",
          paragraphs: [
            "To provide services, Khan Cargo collects and processes: for individuals — name, patronymic, date of birth, ID series/number and PIN, residential and registered address, phone and email, payment card details (full number not stored); for legal entities — official name and legal form, TIN and legal address, authorized representative contacts, bank details; shipment data — sender details, tracking numbers, invoices, cargo description, weight, dimensions, and value, other declaration documents; technical data — IP address, browser and device data, site usage statistics, and cookies.",
          ],
        },
        {
          title: "Security principles",
          paragraphs: [
            "Khan Cargo implements organizational and technical measures to prevent accidental deletion or disclosure of personal data, including payment card data. Organizational measures include internal rules, confidentiality obligations and training, access limited to necessary staff, and internal audits. Technical measures include SSL/TLS encryption, multi-level database access, regular backups, antivirus and network monitoring, and PCI DSS-certified payment processing. Physical measures include restricted access to servers and media and protection from fire and other external risks. Khan Cargo is responsible for protecting customers’ personal and payment card data.",
          ],
        },
        {
          title: "Data retention period",
          paragraphs: [
            "Personal data is retained as follows: service-related data while the account is active and for the statutory archive period after closure; customs, accounting, and tax documents for the period required by law (usually 5 years); marketing data until consent is withdrawn. When the retention period ends, data is irreversibly destroyed or anonymized.",
          ],
        },
        {
          title: "Obligations of the data subject",
          paragraphs: [
            "The customer is responsible for answers provided in the registration form. Incomplete or inaccurate answers may lead the Company to suspend or terminate the service.",
            "The customer undertakes to ensure the accuracy of provided data and to promptly notify the Company of changes.",
          ],
        },
        {
          title: "Rights of the data subject",
          paragraphs: [
            "Under the Law of the Republic of Azerbaijan “On Personal Data”, the customer may: obtain information about processing of their data; request correction of inaccurate or outdated data; request deletion when there is no legal basis; withdraw consent at any time; opt out of marketing notices; complain to the competent state authority. Requests may be sent to info@khan.az or the Company’s official address and are reviewed within 30 business days.",
          ],
        },
        {
          title: "Procedure in case of a data breach",
          paragraphs: [
            "If unlawful access, loss, or disclosure of personal data is detected, Khan Cargo investigates the cause and scope, takes urgent measures to mitigate consequences, notifies the competent authority and affected customers as required by law, and applies additional security measures to prevent similar incidents.",
          ],
        },
        {
          title: "Document changes",
          paragraphs: [
            "Khan Cargo reserves the right to amend this document. The updated version takes effect when published on the site. Customers are notified of material changes by email or a notice on the site.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "For questions, requests, and complaints about personal data processing, contact Khan Cargo:",
            "Company: “Khan Cargo” LLC",
            "Email: info@khan.az",
            "Phone: (+994) 70 210 10 39",
            "Address: Absheron Trade Center, row 2, building 2, Shop 10",
          ],
        },
      ],
    },
  },
  ru: {
    privacyPolicy: {
      meta: {
        title: "Политика конфиденциальности",
        description:
          "Политика конфиденциальности Khan Cargo MMC — правила обработки персональных данных на www.khan.az и в услугах компании.",
      },
      title: "Политика конфиденци\u00ADальности",
      companyLine: "Khan Cargo MMC — www.khan.az",
      backHome: "Вернуться на главную",
      intro: [
        "Настоящая Политика конфиденциальности определяет правила обработки персональных данных, собираемых “Khan Cargo” MMC (далее — “Khan Cargo”, “Компания” или “мы”) при использовании сайта www.khan.az и услуг Компании. Используя сайт, регистрируясь или заказывая услугу, пользователь подтверждает, что ознакомился с условиями Политики и принимает их.",
        "Политика основана на Законе Азербайджанской Республики «О персональных данных» и иных применимых нормативно-правовых актах.",
      ],
      sections: [
        {
          title: "Общие положения",
          paragraphs: [
            "Под персональными данными понимается любая информация, предоставленная клиентами при использовании услуг Khan Cargo и позволяющая идентифицировать физическое или юридическое лицо.",
            "Khan Cargo серьёзно относится к конфиденциальности данных клиентов и не передаёт их третьим лицам без согласия пользователя. Исключения, предусмотренные законом, указаны в разделе 4.",
            "Компания вправе вносить изменения в Политику. Обновлённая редакция вступает в силу с момента публикации на сайте. Пользователь обязуется регулярно знакомиться с актуальной версией Политики.",
          ],
        },
        {
          title: "Собираемые данные",
          paragraphs: [
            "Для оказания услуг и создания профиля клиента Khan Cargo собирает данные следующих категорий:",
            "Данные удостоверения личности: имя, фамилия, отчество, дата рождения, серия и номер удостоверения, ПИН-код.",
            "Контактные данные: номер телефона, адрес электронной почты, фактический и регистрационный адрес.",
            "Для юридических лиц: название компании, ИНН, юридический адрес, контакты уполномоченного представителя.",
            "Платёжные данные: данные банковской карты (номер карты Компанией не хранится; платежи проводятся через сертифицированные платёжные системы).",
            "Данные о грузе и заказе: реквизиты отправителя, трек-номера, инвойсы, описание, вес и размеры груза.",
            "Технические данные: IP-адрес, тип браузера, тип устройства, статистика использования сайта, cookie-файлы.",
            "Предоставление неполных или недостоверных данных в форме регистрации может привести к приостановке или прекращению услуги. Пользователь несёт ответственность за достоверность предоставленных ответов.",
          ],
        },
        {
          title: "Цели использования данных",
          paragraphs: [
            "Khan Cargo использует собранные персональные данные для следующих целей:",
            "Создание, идентификация и управление учётной записью клиента.",
            "Оказание услуг по перевозке, таможенному оформлению и доставке грузов.",
            "Подготовка декларационных данных, требуемых Государственным таможенным комитетом Азербайджанской Республики.",
            "Приём платежей и оформление счетов-фактур.",
            "Связь с клиентом и отправка уведомлений о статусе заказа.",
            "Отправка информационных, маркетинговых и рекламных материалов об услугах Khan Cargo и предложениях партнёров (на основании предварительного согласия клиента).",
            "Защита законных интересов Компании и разрешение споров.",
            "Оценка качества услуг, аналитика и статистика.",
            "Исполнение обязательств, предусмотренных законодательством Азербайджанской Республики.",
          ],
        },
        {
          title: "Передача третьим лицам",
          paragraphs: [
            "Khan Cargo передаёт данные клиентов третьим лицам только в следующих случаях:",
            "Партнёрам, привлекаемым для исполнения услуги: международным и местным перевозчикам, таможенным брокерам, курьерским службам, операторам складов, платёжным системам и банкам. Партнёры получают доступ к данным лишь в объёме, необходимом для выполнения обязанностей.",
            "В случаях, требуемых законодательством Азербайджанской Республики, включая официальные запросы госорганов, судов или уполномоченных правоохранительных органов.",
            "В целях защиты прав и законных интересов Компании.",
            "При наличии явного и однозначного согласия клиента.",
            "Продажа персональных данных третьим лицам в рекламных и маркетинговых целях исключается.",
          ],
        },
        {
          title: "Cookie-файлы и аналитика",
          paragraphs: [
            "Cookie-файлы используются для улучшения опыта использования сайта, сохранения состояния сессии и анализа статистики. Пользователь может ограничить приём cookie в настройках браузера, что может ограничить некоторые функции сайта.",
            "Khan Cargo использует Google Analytics и аналогичные сервисы для аналитики трафика. Эти сервисы работают с обезличенными данными.",
          ],
        },
        {
          title: "Меры безопасности",
          paragraphs: [
            "Khan Cargo применяет организационные и технические меры для защиты персональных данных от незаконного получения, изменения, раскрытия или уничтожения, включая шифрование, ограничение прав доступа, регулярное резервное копирование и инструкции по конфиденциальности для сотрудников.",
            "Платёжные данные обрабатываются сертифицированными процессинговыми центрами, соответствующими требованиям PCI DSS. Компания не хранит полные номера банковских карт и CVV-коды.",
            "Учитывая характер передачи данных через интернет, Khan Cargo не может дать абсолютную гарантию 100% безопасности передачи, несмотря на все принимаемые меры.",
          ],
        },
        {
          title: "Срок хранения данных",
          paragraphs: [
            "Персональные данные хранятся в течение срока, необходимого для оказания услуги, и в рамках архивного срока, требуемого законодательством Азербайджанской Республики. Бухгалтерские, таможенные и налоговые документы обычно хранятся 5 лет. После истечения срока данные уничтожаются или обезличиваются.",
          ],
        },
        {
          title: "Права пользователя",
          paragraphs: [
            "В соответствии с Законом Азербайджанской Республики «О персональных данных» пользователь вправе:",
            "Получать информацию об обработке своих персональных данных, целях и способах обработки.",
            "Требовать исправления неточных или устаревших данных.",
            "Требовать удаления данных или прекращения обработки при отсутствии законных оснований.",
            "В любое время отказаться от маркетинговых уведомлений.",
            "Обратиться с жалобой в уполномоченный государственный орган по вопросам обработки персональных данных.",
            "Для реализации указанных прав клиент может направить письменное обращение по реквизитам из раздела 9. Запросы рассматриваются в течение 30 рабочих дней.",
          ],
        },
        {
          title: "Контакты",
          paragraphs: [
            "По вопросам, запросам и жалобам, связанным с обработкой персональных данных, свяжитесь с Khan Cargo:",
            "Компания: “Khan Cargo” MMC",
            "Электронная почта: info@khan.az",
            "Телефон: (+994) 70 210 10 39",
            "Адрес: Абшерон Т/Ц, ряд 2, корпус 2, Магазин 10",
          ],
        },
        {
          title: "Заключительные положения",
          paragraphs: [
            "Настоящая Политика регулируется законодательством Азербайджанской Республики. Споры, связанные с толкованием и применением Политики, разрешаются путём переговоров. При недостижении согласия споры передаются в компетентные суды Азербайджанской Республики.",
            "Если вы не согласны с условиями настоящей Политики конфиденциальности, прекратите использование сайта и откажитесь от услуг.",
          ],
        },
      ],
    },
    personalData: {
      meta: {
        title: "Защита персональных данных",
        description:
          "Защита персональных данных Khan Cargo MMC — принципы обработки, меры безопасности и права клиентов.",
      },
      title: "Защита персональных данных",
      companyLine: "Khan Cargo MMC — www.khan.az",
      backHome: "Вернуться на главную",
      intro: [
        "Настоящий документ определяет принципы и меры безопасности, которыми руководствуется “Khan Cargo” MMC (далее — “Khan Cargo” или “Компания”) при обработке персональных данных клиентов.",
        "Под персональными данными понимается любая информация, предоставленная клиентами при использовании услуг Khan Cargo и позволяющая идентифицировать физическое или юридическое лицо. Документ соответствует требованиям Закона Азербайджанской Республики «О персональных данных».",
      ],
      sections: [
        {
          title: "Общие принципы",
          paragraphs: [
            "Khan Cargo собирает и обрабатывает данные клиентов только для ясных, законных и заранее объявленных целей. Компания может использовать или раскрывать персональные данные клиента, чтобы: определять предпочтения по услугам и предлагать персонализированные решения; информировать о продуктах, услугах, маркетинге и рекламе; защищать законные интересы Khan Cargo; исполнять обязательства по закону в рамках правосудия; продвигать услуги Khan Cargo и специальные предложения третьих лиц, считающиеся соответствующими интересам клиента. Данные из формы регистрации собираются в соответствии с требованиями ГТК АР и для качественного обслуживания. Компания обязуется не передавать персональные данные, включая данные карты, третьим лицам без согласия, за исключением случаев, прямо предусмотренных законодательством Азербайджанской Республики.",
          ],
        },
        {
          title: "Правовые основания обработки",
          paragraphs: [
            "Khan Cargo обрабатывает персональные данные на следующих правовых основаниях: согласие клиента на обработку, выраженное при регистрации, заказе услуги или заполнении отдельной формы; исполнение договора с клиентом; обязательства, возложенные законодательством Азербайджанской Республики, включая таможенные, налоговые и бухгалтерские требования; законные интересы Компании, включая предотвращение мошенничества, анализ качества услуг и разрешение споров.",
          ],
        },
        {
          title: "Категории обрабатываемых данных",
          paragraphs: [
            "Для оказания услуг Khan Cargo собирает и обрабатывает: для физических лиц — ФИО, дату рождения, серию/номер удостоверения и ПИН, адреса, телефон и email, реквизиты платёжной карты (полный номер не хранится); для юридических лиц — официальное название и организационно-правовую форму, ИНН и юридический адрес, контакты представителя, банковские реквизиты; данные о грузе — реквизиты отправителя, трек-номера, инвойсы, описание, вес, размеры и стоимость, иные документы для декларации; технические данные — IP, данные браузера и устройства, статистику посещений и cookie.",
          ],
        },
        {
          title: "Принципы безопасности",
          paragraphs: [
            "Khan Cargo применяет организационные и технические меры для предотвращения случайного удаления или раскрытия персональных данных, включая данные карт. Организационные меры: внутренние правила, обязательства о конфиденциальности и обучение, доступ только необходимым сотрудникам, внутренний контроль и аудиты. Технические меры: шифрование SSL/TLS, многоуровневый доступ к БД, регулярные резервные копии, антивирус и мониторинг, обработка платежей через сертифицированные PCI DSS центры. Физические меры: ограниченный доступ к серверам и носителям, защита от пожара и иных внешних рисков. Khan Cargo отвечает за защиту персональных данных клиентов и данных карт.",
          ],
        },
        {
          title: "Срок хранения данных",
          paragraphs: [
            "Персональные данные хранятся по следующим принципам: данные, связанные с услугой — пока аккаунт активен и в течение архивного срока после закрытия; таможенные, бухгалтерские и налоговые документы — в срок, требуемый законом (обычно 5 лет); маркетинговые данные — до отзыва согласия. По истечении срока данные уничтожаются необратимо или обезличиваются.",
          ],
        },
        {
          title: "Обязанности субъекта данных",
          paragraphs: [
            "Клиент несёт ответственность за ответы в форме регистрации. При неполных или недостоверных ответах Компания вправе приостановить или прекратить оказание услуги.",
            "Клиент обязуется обеспечивать достоверность предоставленных данных и оперативно уведомлять Компанию об изменениях.",
          ],
        },
        {
          title: "Права субъекта данных",
          paragraphs: [
            "В соответствии с Законом АР «О персональных данных» клиент вправе: получать информацию об обработке своих данных; требовать исправления неточных или устаревших данных; требовать удаления при отсутствии законных оснований; в любое время отозвать согласие; отказаться от маркетинговых уведомлений; подать жалобу в уполномоченный госорган. Для реализации прав можно направить письменное обращение на info@khan.az или на официальный адрес Компании. Запросы рассматриваются в течение 30 рабочих дней.",
          ],
        },
        {
          title: "Порядок действий при нарушении",
          paragraphs: [
            "При выявлении незаконного получения, утраты или раскрытия персональных данных Khan Cargo: расследует причину и масштаб; принимает срочные меры по устранению последствий; уведомляет уполномоченный орган и пострадавших клиентов по требованию закона; применяет дополнительные меры безопасности для предотвращения подобных случаев.",
          ],
        },
        {
          title: "Изменение документа",
          paragraphs: [
            "Khan Cargo вправе вносить изменения в настоящий документ. Обновлённая редакция вступает в силу с момента публикации на сайте. О существенных изменениях клиенты уведомляются по электронной почте или через уведомление на сайте.",
          ],
        },
        {
          title: "Контакты",
          paragraphs: [
            "По вопросам, запросам и жалобам, связанным с обработкой персональных данных, свяжитесь с Khan Cargo:",
            "Компания: “Khan Cargo” MMC",
            "Электронная почта: info@khan.az",
            "Телефон: (+994) 70 210 10 39",
            "Адрес: Абшерон Т/Ц, ряд 2, корпус 2, Магазин 10",
          ],
        },
      ],
    },
  },
};
