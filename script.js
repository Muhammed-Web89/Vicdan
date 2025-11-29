// ============================================
// Translation System
// ============================================

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      mission: "Mission",
      values: "Values",
      programs: "Programs",
      support: "Support",
      contact: "Contact",
    },
    hero: {
      title1: "Building Bridges of",
      title2: "Compassion & Unity",
      subtitle:
        "Empowering communities, preserving heritage, and extending a helping hand to those in need across Turkic nations and beyond.",
      cta1: "Make a Difference",
      cta2: "Learn More",
    },
    about: {
      tag: "Who We Are",
      title: "About Vicdan",
      lead: "Vicdan Humanitarian Aid Association stands as a beacon of hope and solidarity, dedicated to fostering compassion, unity, and meaningful support within and beyond Turkic communities.",
      p1: "Founded on the principles of humanitarian service and cultural preservation, we serve as an <strong>ensar community</strong>—a supportive network that welcomes and assists migrants arriving in Türkiye from Turkic states. Our mission extends beyond immediate aid; we are committed to building lasting foundations for future generations.",
      p2: "Through our comprehensive programs, we address critical needs while nurturing the spiritual and national values that bind our communities together. We believe that true humanitarian work combines immediate relief with long-term empowerment, ensuring that every individual we serve can thrive with dignity and purpose.",
      stat1: "Families Supported",
      stat2: "Children Educated",
      stat3: "Active Programs",
    },
    mission: {
      title: "Our Mission",
      text: "To promote solidarity, compassion, and humanitarian support across Turkic communities while serving as a trusted ensar network for migrants. We are dedicated to preserving cultural heritage, strengthening moral foundations, and ensuring access to quality education for all, especially the most vulnerable.",
    },
    vision: {
      title: "Our Vision",
      text: "To become a leading force in humanitarian aid and cultural preservation, where every individual—regardless of their origin—finds support, dignity, and opportunity. We envision a world where Turkic communities are united in brotherhood, where children grow with strong values, and where compassion transcends borders.",
    },
    values: {
      tag: "Our Foundation",
      title: "Core Values",
      compassion: {
        title: "Compassion",
        desc: "We approach every individual with empathy and understanding, recognizing the inherent dignity in all human beings.",
      },
      solidarity: {
        title: "Solidarity",
        desc: "We stand together as one community, supporting each other through challenges and celebrating shared successes.",
      },
      cultural: {
        title: "Cultural Preservation",
        desc: "We honor and protect the rich heritage, traditions, and spiritual values that define our identity and strengthen our bonds.",
      },
      education: {
        title: "Education",
        desc: "We believe education is the cornerstone of empowerment, providing pathways to opportunity and personal growth.",
      },
      integrity: {
        title: "Integrity",
        desc: "We operate with transparency, accountability, and ethical principles in all our actions and decisions.",
      },
      inclusivity: {
        title: "Inclusivity",
        desc: "We welcome all who seek support, fostering an environment of acceptance and mutual respect.",
      },
    },
    programs: {
      tag: "What We Do",
      title: "Programs & Initiatives",
      migrant: {
        title: "Migrant Support Services",
        desc: "Comprehensive assistance for families arriving from Turkic states, including housing support, legal guidance, language education, and integration programs that help newcomers build new lives with dignity.",
        f1: "Housing assistance and temporary shelter",
        f2: "Legal and administrative support",
        f3: "Language and cultural orientation",
        f4: "Employment and skills training",
      },
      education: {
        title: "Children's Education & Development",
        desc: "Ensuring every child receives quality education while maintaining strong moral foundations. Our programs combine academic excellence with character development, preserving cultural identity and values.",
        f1: "Scholarship and educational support",
        f2: "After-school programs and tutoring",
        f3: "Moral and character education",
        f4: "Cultural heritage workshops",
      },
      cultural: {
        title: "Cultural Preservation",
        desc: "Protecting and celebrating the rich traditions, languages, and spiritual values of Turkic communities through workshops, events, and educational initiatives that connect generations.",
        f1: "Cultural festivals and celebrations",
        f2: "Language preservation programs",
        f3: "Traditional arts and crafts workshops",
        f4: "Intergenerational storytelling",
      },
      emergency: {
        title: "Emergency Relief & Aid",
        desc: "Rapid response to urgent needs, providing essential supplies, medical assistance, and financial support to families facing crises, natural disasters, or unexpected hardships.",
        f1: "Food and essential supplies distribution",
        f2: "Medical and healthcare assistance",
        f3: "Emergency financial aid",
        f4: "Crisis counseling and support",
      },
      community: {
        title: "Community Building",
        desc: "Strengthening bonds of brotherhood through regular gatherings, networking events, mentorship programs, and collaborative initiatives that unite communities.",
        f1: "Community gatherings and events",
        f2: "Mentorship and networking programs",
        f3: "Volunteer coordination",
        f4: "Collaborative community projects",
      },
      youth: {
        title: "Youth Empowerment",
        desc: "Investing in the next generation through leadership development, career guidance, skill-building workshops, and opportunities that prepare youth for meaningful futures.",
        f1: "Leadership development programs",
        f2: "Career counseling and guidance",
        f3: "Skill-building workshops",
        f4: "Youth mentorship initiatives",
      },
    },
    support: {
      tag: "Join Our Cause",
      title: "Make a Lasting Impact",
      desc1:
        "Your support enables us to continue our vital work of providing humanitarian aid, preserving cultural heritage, and empowering communities. Every contribution, no matter the size, creates ripples of positive change that extend far beyond what we can see.",
      desc2:
        "Together, we can build a future where compassion knows no borders, where children grow with strong values and quality education, and where every individual has the opportunity to thrive.",
      option1: {
        title: "One-Time Donation",
        desc: "Make a single contribution to support our ongoing programs and initiatives.",
      },
      option2: {
        title: "Monthly Support",
        desc: "Become a sustaining member with a recurring monthly donation.",
      },
      option3: {
        title: "Volunteer",
        desc: "Join our team of dedicated volunteers and make a hands-on difference.",
      },
      form: {
        title: "Support Our Mission",
        amount: "Donation Amount",
        amountPlaceholder: "Or enter custom amount",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        recurring: "Make this a monthly recurring donation",
        submit: "Donate Now",
        note: "Your donation is secure and tax-deductible. We respect your privacy and will never share your information.",
      },
    },
    contact: {
      tag: "Get in Touch",
      title: "Contact Us",
      intro:
        "We'd love to hear from you. Whether you're seeking assistance, interested in volunteering, or have questions about our programs, our team is here to help.",
      address: { title: "Address" },
      email: { title: "Email" },
      phone: { title: "Phone" },
      hours: {
        title: "Office Hours",
        weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
        saturday: "Saturday: 10:00 AM - 4:00 PM",
      },
      form: {
        name: "Full Name *",
        email: "Email Address *",
        phone: "Phone Number",
        subject: "Subject *",
        subjectSelect: "Select a subject",
        subject1: "General Inquiry",
        subject2: "Seeking Support",
        subject3: "Volunteer Opportunity",
        subject4: "Donation Question",
        subject5: "Program Information",
        subject6: "Other",
        message: "Message *",
        submit: "Send Message",
      },
    },
    footer: {
      description:
        "Building bridges of compassion and unity across Turkic communities and beyond.",
      quickLinks: "Quick Links",
      about: "About Us",
      mission: "Mission & Vision",
      programs: "Programs",
      support: "Support Us",
      getInvolved: "Get Involved",
      donate: "Donate",
      volunteer: "Volunteer",
      contact: "Contact",
      ourPrograms: "Our Programs",
      connect: "Connect",
      copyright:
        "© 2024 Vicdan Humanitarian Aid Association. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    alerts: {
      donationSuccess:
        "Thank you for your generous donation! We will contact you shortly to complete the process.",
      contactSuccess:
        "Thank you for contacting us! We will get back to you as soon as possible.",
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      mission: "Misyon",
      values: "Değerler",
      programs: "Programlar",
      support: "Destek",
      contact: "İletişim",
    },
    hero: {
      title1: "Merhamet ve Birlik",
      title2: "Köprüleri Kuran",
      subtitle:
        "Toplulukları güçlendiriyor, mirası koruyor ve Türk devletleri ve ötesindeki ihtiyaç sahiplerine yardım eli uzatıyoruz.",
      cta1: "Fark Yarat",
      cta2: "Daha Fazla Bilgi",
    },
    about: {
      tag: "Biz Kimiz",
      title: "Vicdan Hakkında",
      lead: "Vicdan İnsani Yardım Derneği, Türk toplulukları içinde ve ötesinde merhamet, birlik ve anlamlı desteği teşvik etmeye adanmış, umut ve dayanışma ışığı olarak durmaktadır.",
      p1: "İnsani hizmet ve kültürel koruma ilkeleri üzerine kurulmuş olan derneğimiz, Türk devletlerinden Türkiye'ye gelen göçmenleri karşılayan ve destekleyen destekleyici bir ağ olan <strong>ensar topluluğu</strong> olarak hizmet vermektedir. Misyonumuz acil yardımın ötesine uzanır; gelecek nesiller için kalıcı temeller inşa etmeye kararlıyız.",
      p2: "Kapsamlı programlarımız aracılığıyla, topluluklarımızı bir araya getiren manevi ve ulusal değerleri beslerken kritik ihtiyaçları ele alıyoruz. Gerçek insani yardım çalışmasının, hizmet ettiğimiz her bireyin onur ve amaçla gelişebilmesini sağlayarak acil yardımı uzun vadeli güçlendirme ile birleştirdiğine inanıyoruz.",
      stat1: "Desteklenen Aile",
      stat2: "Eğitilen Çocuk",
      stat3: "Aktif Program",
    },
    mission: {
      title: "Misyonumuz",
      text: "Göçmenler için güvenilir bir ensar ağı olarak hizmet verirken Türk toplulukları arasında dayanışma, merhamet ve insani desteği teşvik etmek. Kültürel mirası korumaya, ahlaki temelleri güçlendirmeye ve özellikle en savunmasız olanlar olmak üzere herkes için kaliteli eğitime erişimi sağlamaya kendimizi adamış durumdayız.",
    },
    vision: {
      title: "Vizyonumuz",
      text: "Her bireyin—kökeni ne olursa olsun—destek, onur ve fırsat bulduğu, insani yardım ve kültürel koruma alanında önde gelen bir güç haline gelmek. Türk topluluklarının kardeşlik içinde birleştiği, çocukların güçlü değerlerle büyüdüğü ve merhametin sınırları aştığı bir dünya hayal ediyoruz.",
    },
    values: {
      tag: "Temelimiz",
      title: "Temel Değerler",
      compassion: {
        title: "Merhamet",
        desc: "Her bireye empati ve anlayışla yaklaşıyor, tüm insanlardaki doğuştan gelen onuru tanıyoruz.",
      },
      solidarity: {
        title: "Dayanışma",
        desc: "Zorluklar karşısında birbirimizi destekleyerek ve ortak başarıları kutlayarak tek bir topluluk olarak birlikte duruyoruz.",
      },
      cultural: {
        title: "Kültürel Koruma",
        desc: "Kimliğimizi tanımlayan ve bağlarımızı güçlendiren zengin mirası, gelenekleri ve manevi değerleri onurlandırıyor ve koruyoruz.",
      },
      education: {
        title: "Eğitim",
        desc: "Eğitimin güçlendirmenin temel taşı olduğuna, fırsat ve kişisel gelişim için yollar sağladığına inanıyoruz.",
      },
      integrity: {
        title: "Dürüstlük",
        desc: "Tüm eylemlerimizde ve kararlarımızda şeffaflık, hesap verebilirlik ve etik ilkelerle çalışıyoruz.",
      },
      inclusivity: {
        title: "Kapsayıcılık",
        desc: "Destek arayan herkesi kabul ediyor, kabul ve karşılıklı saygı ortamı oluşturuyoruz.",
      },
    },
    programs: {
      tag: "Ne Yapıyoruz",
      title: "Programlar ve Girişimler",
      migrant: {
        title: "Göçmen Destek Hizmetleri",
        desc: "Türk devletlerinden gelen aileler için konut desteği, yasal rehberlik, dil eğitimi ve yeni gelenlerin onurlu yeni hayatlar kurmasına yardımcı olan entegrasyon programlarını içeren kapsamlı yardım.",
        f1: "Konut yardımı ve geçici barınma",
        f2: "Yasal ve idari destek",
        f3: "Dil ve kültürel oryantasyon",
        f4: "İstihdam ve beceri eğitimi",
      },
      education: {
        title: "Çocuk Eğitimi ve Gelişimi",
        desc: "Her çocuğun güçlü ahlaki temelleri korurken kaliteli eğitim almasını sağlamak. Programlarımız akademik mükemmelliği karakter gelişimi ile birleştirerek kültürel kimliği ve değerleri korur.",
        f1: "Burs ve eğitim desteği",
        f2: "Okul sonrası programlar ve özel ders",
        f3: "Ahlaki ve karakter eğitimi",
        f4: "Kültürel miras atölyeleri",
      },
      cultural: {
        title: "Kültürel Koruma",
        desc: "Nesilleri birbirine bağlayan atölyeler, etkinlikler ve eğitim girişimleri aracılığıyla Türk topluluklarının zengin geleneklerini, dillerini ve manevi değerlerini korumak ve kutlamak.",
        f1: "Kültürel festivaller ve kutlamalar",
        f2: "Dil koruma programları",
        f3: "Geleneksel sanat ve el sanatları atölyeleri",
        f4: "Nesiller arası hikaye anlatımı",
      },
      emergency: {
        title: "Acil Yardım ve Destek",
        desc: "Krizler, doğal afetler veya beklenmedik zorluklarla karşılaşan ailelere temel ihtiyaçlar, tıbbi yardım ve mali destek sağlayarak acil ihtiyaçlara hızlı yanıt.",
        f1: "Gıda ve temel ihtiyaç dağıtımı",
        f2: "Tıbbi ve sağlık yardımı",
        f3: "Acil mali yardım",
        f4: "Kriz danışmanlığı ve destek",
      },
      community: {
        title: "Topluluk Oluşturma",
        desc: "Toplulukları birleştiren düzenli toplantılar, ağ oluşturma etkinlikleri, mentorluk programları ve işbirlikçi girişimler aracılığıyla kardeşlik bağlarını güçlendirmek.",
        f1: "Topluluk toplantıları ve etkinlikleri",
        f2: "Mentorluk ve ağ oluşturma programları",
        f3: "Gönüllü koordinasyonu",
        f4: "İşbirlikçi topluluk projeleri",
      },
      youth: {
        title: "Gençlik Güçlendirme",
        desc: "Liderlik gelişimi, kariyer rehberliği, beceri geliştirme atölyeleri ve gençleri anlamlı gelecekler için hazırlayan fırsatlar aracılığıyla gelecek nesle yatırım yapmak.",
        f1: "Liderlik geliştirme programları",
        f2: "Kariyer danışmanlığı ve rehberlik",
        f3: "Beceri geliştirme atölyeleri",
        f4: "Gençlik mentorluk girişimleri",
      },
    },
    support: {
      tag: "Hedefimize Katılın",
      title: "Kalıcı Bir Etki Yaratın",
      desc1:
        "Desteğiniz, insani yardım sağlama, kültürel mirası koruma ve toplulukları güçlendirme konusundaki hayati çalışmalarımıza devam etmemizi sağlar. Büyüklüğü ne olursa olsun, her katkı, görebileceğimizden çok daha öteye uzanan olumlu değişim dalgaları yaratır.",
      desc2:
        "Birlikte, merhametin sınır tanımadığı, çocukların güçlü değerler ve kaliteli eğitimle büyüdüğü ve her bireyin gelişme fırsatına sahip olduğu bir gelecek inşa edebiliriz.",
      option1: {
        title: "Tek Seferlik Bağış",
        desc: "Devam eden programlarımızı ve girişimlerimizi desteklemek için tek bir katkı yapın.",
      },
      option2: {
        title: "Aylık Destek",
        desc: "Tekrarlayan aylık bağışla sürdürülebilir bir üye olun.",
      },
      option3: {
        title: "Gönüllü Ol",
        desc: "Kararlı gönüllüler ekibimize katılın ve elle tutulur bir fark yaratın.",
      },
      form: {
        title: "Misyonumuzu Destekleyin",
        amount: "Bağış Tutarı",
        amountPlaceholder: "Veya özel tutar girin",
        name: "Ad Soyad",
        email: "E-posta Adresi",
        phone: "Telefon Numarası",
        recurring: "Bunu aylık tekrarlayan bağış yap",
        submit: "Şimdi Bağış Yap",
        note: "Bağışınız güvenli ve vergiden düşülebilir. Gizliliğinize saygı duyuyoruz ve bilgilerinizi asla paylaşmayız.",
      },
    },
    contact: {
      tag: "İletişime Geçin",
      title: "Bize Ulaşın",
      intro:
        "Sizden haber almak isteriz. Yardım arıyorsanız, gönüllü olmakla ilgileniyorsanız veya programlarımız hakkında sorularınız varsa, ekibimiz size yardımcı olmak için burada.",
      address: { title: "Adres" },
      email: { title: "E-posta" },
      phone: { title: "Telefon" },
      hours: {
        title: "Çalışma Saatleri",
        weekdays: "Pazartesi - Cuma: 09:00 - 18:00",
        saturday: "Cumartesi: 10:00 - 16:00",
      },
      form: {
        name: "Ad Soyad *",
        email: "E-posta Adresi *",
        phone: "Telefon Numarası",
        subject: "Konu *",
        subjectSelect: "Bir konu seçin",
        subject1: "Genel Bilgi",
        subject2: "Destek Arıyorum",
        subject3: "Gönüllü Fırsatı",
        subject4: "Bağış Sorusu",
        subject5: "Program Bilgisi",
        subject6: "Diğer",
        message: "Mesaj *",
        submit: "Mesaj Gönder",
      },
    },
    footer: {
      description:
        "Türk toplulukları ve ötesinde merhamet ve birlik köprüleri kuruyoruz.",
      quickLinks: "Hızlı Bağlantılar",
      about: "Hakkımızda",
      mission: "Misyon ve Vizyon",
      programs: "Programlar",
      support: "Bizi Destekleyin",
      getInvolved: "Katılın",
      donate: "Bağış Yap",
      volunteer: "Gönüllü Ol",
      contact: "İletişim",
      ourPrograms: "Programlarımız",
      connect: "Bağlan",
      copyright: "© 2024 Vicdan İnsani Yardım Derneği. Tüm hakları saklıdır.",
      privacy: "Gizlilik Politikası",
      terms: "Hizmet Şartları",
    },
    alerts: {
      donationSuccess:
        "Cömert bağışınız için teşekkür ederiz! Süreci tamamlamak için kısa süre içinde sizinle iletişime geçeceğiz.",
      contactSuccess:
        "Bizimle iletişime geçtiğiniz için teşekkür ederiz! En kısa sürede size geri dönüş yapacağız.",
    },
  },
};

let currentLanguage = localStorage.getItem("language") || "en";

function getNestedTranslation(obj, path) {
  return path.split(".").reduce((o, p) => o && o[p], obj);
}

function translateElement(element, key, translation) {
  if (
    element.tagName === "INPUT" &&
    element.hasAttribute("data-i18n-placeholder")
  ) {
    element.placeholder = translation;
  } else if (element.tagName === "OPTION") {
    element.textContent = translation;
  } else if (
    element.tagName === "LABEL" &&
    element.querySelector('input[type="checkbox"]')
  ) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    const span = element.querySelector("span");
    if (span) {
      span.textContent = translation;
    } else {
      element.childNodes.forEach((node) => {
        if (node.nodeType === 3) {
          // Text node
          node.textContent = translation;
        }
      });
    }
  } else if (
    element.innerHTML.includes("<strong>") ||
    element.innerHTML.includes("<em>")
  ) {
    // Preserve HTML tags
    element.innerHTML = translation;
  } else {
    element.textContent = translation;
  }
}

function updateLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
  const htmlLang = document.getElementById("htmlLang");
  if (htmlLang) htmlLang.setAttribute("lang", lang);

  const translation = translations[lang];
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translationText = getNestedTranslation(translation, key);
    if (translationText) {
      translateElement(element, key, translationText);
    }
  });

  // Update placeholders
  const placeholderElements = document.querySelectorAll(
    "[data-i18n-placeholder]"
  );
  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    const translationText = getNestedTranslation(translation, key);
    if (translationText) {
      element.placeholder = translationText;
    }
  });

  // Update select options
  const selectOptions = document.querySelectorAll("select option[data-i18n]");
  selectOptions.forEach((option) => {
    const key = option.getAttribute("data-i18n");
    const translationText = getNestedTranslation(translation, key);
    if (translationText) {
      option.textContent = translationText;
    }
  });

  // Update language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });

  // Update page title
  const pageTitle = document.getElementById("pageTitle");
  if (pageTitle) {
    if (lang === "tr") {
      pageTitle.textContent =
        "Vicdan İnsani Yardım Derneği | Merhamet ve Birlik Köprüleri";
    } else {
      pageTitle.textContent =
        "Vicdan Humanitarian Aid Association | Building Bridges of Compassion";
    }
  }

  // Update alert messages
  window.donationSuccessMessage = translation.alerts.donationSuccess;
  window.contactSuccessMessage = translation.alerts.contactSuccess;
}

// ============================================
// Smooth Scrolling & Navigation
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // Initialize language
  updateLanguage(currentLanguage);

  // Language switcher
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      updateLanguage(lang);
    });
  });
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll("section[id]");

  function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightActiveSection);

  // ============================================
  // Animated Counter for Statistics
  // ============================================

  const statNumbers = document.querySelectorAll(".stat-number");
  let hasAnimated = false;

  function animateCounter(element) {
    const target = parseInt(element.getAttribute("data-target"));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  }

  function checkStatsVisibility() {
    const statsSection = document.querySelector(".about-stats");
    if (!statsSection || hasAnimated) return;

    const rect = statsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      statNumbers.forEach((stat) => {
        animateCounter(stat);
      });
      hasAnimated = true;
    }
  }

  window.addEventListener("scroll", checkStatsVisibility);
  checkStatsVisibility(); // Check on load

  // ============================================
  // Donation Form Handling
  // ============================================

  const donationForm = document.getElementById("donationForm");
  const amountButtons = document.querySelectorAll(".amount-btn");
  const amountInput = document.getElementById("amount");

  // Amount button selection
  amountButtons.forEach((button) => {
    button.addEventListener("click", function () {
      amountButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      amountInput.value = this.getAttribute("data-amount");
    });
  });

  // Custom amount input
  amountInput.addEventListener("input", function () {
    amountButtons.forEach((btn) => btn.classList.remove("active"));
  });

  // Form submission
  if (donationForm) {
    donationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Here you would typically send this to your backend
      console.log("Donation data:", data);

      // Show success message (you can replace this with actual API call)
      alert(
        window.donationSuccessMessage ||
          "Thank you for your generous donation! We will contact you shortly to complete the process."
      );

      // Reset form
      this.reset();
      amountButtons.forEach((btn) => btn.classList.remove("active"));
    });
  }

  // ============================================
  // Contact Form Handling
  // ============================================

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Here you would typically send this to your backend
      console.log("Contact form data:", data);

      // Show success message (you can replace this with actual API call)
      alert(
        window.contactSuccessMessage ||
          "Thank you for contacting us! We will get back to you as soon as possible."
      );

      // Reset form
      this.reset();
    });
  }

  // ============================================
  // Scroll Animations
  // ============================================

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animateElements = document.querySelectorAll(
    ".value-card, .program-card, .mission-card"
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // ============================================
  // Scroll to Top Button (Optional Enhancement)
  // ============================================

  // Create scroll to top button
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.innerHTML = "↑";
  scrollTopBtn.className = "scroll-top-btn";
  scrollTopBtn.setAttribute("aria-label", "Scroll to top");
  scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--turquoise);
        color: var(--dark-blue);
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(64, 224, 208, 0.4);
    `;

  document.body.appendChild(scrollTopBtn);

  // Show/hide scroll to top button
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.opacity = "1";
      scrollTopBtn.style.visibility = "visible";
    } else {
      scrollTopBtn.style.opacity = "0";
      scrollTopBtn.style.visibility = "hidden";
    }
  });

  // Scroll to top functionality
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  scrollTopBtn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
    this.style.boxShadow = "0 6px 20px rgba(64, 224, 208, 0.6)";
  });

  scrollTopBtn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "0 4px 12px rgba(64, 224, 208, 0.4)";
  });
});
