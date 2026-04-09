/* ================================================
   SCRIPT.JS — Perfect Smile Dental Clinic
   Footer, FABs, AOS, WhatsApp, Services, Counters
   ================================================ */
(function () {
  'use strict';

  // ══════════════════════════════════════════════
  // 1. CONFIGURATION
  // ══════════════════════════════════════════════
  var CONFIG = {
    whatsappNumber: '919054841901',
    callNumber: '+919054841901',
    animationDuration: 800,
    experienceBaseYear: 2013
  };
  window.CLINIC_CONFIG = CONFIG;

  // ══════════════════════════════════════════════
  // 2. SERVICES DATA (JSON-based CMS)
  // ══════════════════════════════════════════════
  window.CLINIC_SERVICES = [
    {
      id: 'ceramicCrowns',
      name: 'Ceramic Crowns & Bridges Fixing',
      category: 'procedures',
      icon: 'mdi:tooth-outline',
      image: 'images/CeramicCrownsAndBridgesFixing.webp',
      description: 'Restore your smile with premium ceramic crowns and bridges. Our state-of-the-art solutions use high-quality materials to ensure durable and aesthetically pleasing results, restoring your smile with precision and care.'
    },
    {
      id: 'fixedProsthodontics',
      name: 'Fixed Prosthodontics',
      category: 'procedures',
      icon: 'mdi:medical-bag',
      image: 'images/FixedProsthodontics.webp',
      description: 'Specialized in providing reliable and long-lasting dental restorations. Whether it\'s crowns, bridges, or dental implants, our prosthodontic treatments are tailored to each patient\'s unique requirements.'
    },
    {
      id: 'maxillofacialProsthetics',
      name: 'Maxillofacial Prosthetics',
      category: 'treatment',
      icon: 'mdi:face-man-outline',
      image: 'images/MaxillofacialProsthetics.webp',
      description: 'Expert care for creating custom prosthetic devices to address facial and oral concerns. Our team is skilled in crafting solutions that ensure optimal comfort and functionality.'
    },
    {
      id: 'oralSurgery',
      name: 'Oral & Maxillofacial Surgery',
      category: 'surgery',
      icon: 'mdi:hospital-box-outline',
      image: 'images/OralAndMaxillofacialSurgery.webp',
      description: 'Comprehensive oral and maxillofacial surgical care delivered by experienced surgeons. From wisdom teeth extractions to corrective jaw surgery, we cover a wide spectrum of procedures.'
    },
    {
      id: 'rct',
      name: 'RCT (Root Canal Treatment)',
      category: 'treatment',
      icon: 'mdi:needle',
      image: 'images/RCT(RootCanalTreatment).webp',
      description: 'Advanced root canal treatments to save infected teeth and relieve pain. Our gentle approach and modern techniques ensure a comfortable experience and successful outcomes.'
    },
    {
      id: 'dentalTreatments',
      name: 'Dental Treatments',
      category: 'treatment',
      icon: 'streamline-ultimate:dental-crown-1',
      image: 'images/DentalTreatments.webp',
      description: 'Comprehensive dental treatments for all your oral health needs, from routine check-ups to advanced care.'
    },
    {
      id: 'dentalImplants',
      name: 'Dental Implants',
      category: 'surgery',
      icon: 'hugeicons:dental-braces',
      image: 'images/Dental_Implants.webp',
      description: 'Modern and durable dental implants to restore missing teeth and improve your overall dental function and aesthetics.'
    },
    {
      id: 'preventiveDentistry',
      name: 'Preventive Dentistry',
      category: 'procedures',
      icon: 'mdi:shield-plus-outline',
      image: 'images/PreventiveDentistry.webp',
      description: 'Maintain a healthy smile with our preventive dental care services, including cleanings, exams, and protective treatments.'
    },
    {
      id: 'bracesAligners',
      name: 'Braces / Aligners',
      category: 'procedures',
      icon: 'mdi:tooth-outline',
      image: 'images/Braces_Aligners.webp',
      description: 'Expert orthodontic solutions including traditional braces and modern clear aligners to straighten your teeth and enhance your smile.'
    },
    {
      id: 'teethWhitening',
      name: 'Teeth Whitening',
      category: 'procedures',
      icon: 'mdi:sparkles',
      image: 'images/TeethWhitening.webp',
      description: 'Professional teeth whitening treatments to brighten your smile and remove tough stains effectively and safely.'
    },
    {
      id: 'pediatricDentistry',
      name: 'Pediatric Dentistry',
      category: 'treatment',
      icon: 'mdi:baby-face-outline',
      image: 'images/PediatricDentistry.webp',
      description: 'Gentle and friendly dental care specialized for children, ensuring a positive dental experience and healthy smiles for life.'
    }
  ];


  // ══════════════════════════════════════════════
  // 3. UTILITY: Debounce
  // ══════════════════════════════════════════════
  function debounce(fn, wait) {
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, wait);
    };
  }

  // ══════════════════════════════════════════════
  // 4. INJECT FOOTER
  // ══════════════════════════════════════════════
  var footerEl = document.getElementById('footer');
  if (footerEl) {
    footerEl.classList.add('footer');
    footerEl.innerHTML =
      '<div class="container">' +
        '<div class="row gy-4">' +
          '<div class="col-lg-4 col-md-6">' +
            '<a class="footer-brand" href="index.html">' +
              '<img height="42px" width="128.06px" src="images/BrandLogo.webp" alt="Perfect Smile Dental Clinic | Dr. Fora Patel">' +
            '</a>' +
            '<p class="pe-md-4">A premier dental facility dedicated to providing top-notch dental care services with a focus on excellence, comfort, and patient satisfaction.</p>' +
            '<div class="d-flex gap-3 mt-4 socialLinks">' +
              '<a target="_blank" href="https://www.facebook.com/Drforapatel" class="fs-5" aria-label="Facebook"><iconify-icon icon="mdi:facebook"></iconify-icon></a>' +
              '<a target="_blank" href="https://www.instagram.com/perfectsmiledentalclinic_27/" class="fs-5" aria-label="Instagram"><iconify-icon icon="mdi:instagram"></iconify-icon></a>' +
            '</div>' +
          '</div>' +
          '<div class="col-lg-2 col-md-6 footer-col">' +
            '<h5>Quick Links</h5>' +
            '<ul class="footer-links">' +
              '<li><a href="index.html">Home</a></li>' +
              '<li><a href="about.html">About Us</a></li>' +
              '<li><a href="services.html">Our Services</a></li>' +
              '<li><a href="contact.html">Contact Us</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="col-lg-3 col-md-6 footer-col">' +
            '<h5>Our Services</h5>' +
            '<ul class="footer-links">' +
              '<li><a href="services.html#ceramicCrowns">Ceramic Crowns & Bridges</a></li>' +
              '<li><a href="services.html#fixedProsthodontics">Fixed Prosthodontics</a></li>' +
              '<li><a href="services.html#oralSurgery">Oral & Maxillofacial Surgery</a></li>' +
              '<li><a href="services.html#rct">Root Canal Treatment</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="col-lg-3 col-md-6 footer-col">' +
            '<h5>Contact Info</h5>' +
            '<ul class="footer-links contInfo">' +
              '<li class="d-flex align-items-start gap-2">' +
                '<a class="locationLink d-flex align-items-start gap-2" target="_blank" href="https://maps.google.com/?q=Perfect+Smile+Dental+Clinic+Vadodara">' +
                  '<iconify-icon icon="mdi:map-marker" class="text-primary mt-1 flex-shrink-0"></iconify-icon>' +
                  '410, 411, Nexus Connecting Hub, Near Spring Retreat 4, White House Lane, Vasna Bhayli Main Road, Vadodara - 390007' +
                '</a>' +
              '</li>' +
              '<li class="d-flex align-items-center gap-2 mt-3">' +
                '<a href="tel:+919054841901" class="d-flex align-items-center gap-2">' +
                  '<iconify-icon icon="mdi:phone" class="text-primary"></iconify-icon> +91 90548 41901' +
                '</a>' +
              '</li>' +
              '<li class="d-flex align-items-center gap-2 mt-2">' +
                '<a href="mailto:forapatel27@gmail.com" class="d-flex align-items-center gap-2">' +
                  '<iconify-icon icon="mdi:email" class="text-primary"></iconify-icon> forapatel27@gmail.com' +
                '</a>' +
              '</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom text-center mt-5">' +
          '&copy; <span id="year"></span> Perfect Smile Dental Clinic. All Rights Reserved.' +
        '</div>' +
      '</div>';
  }

  // ── Dynamic Year ──
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ══════════════════════════════════════════════
  // 5. WHATSAPP URL ADJUSTER (Device-based)
  // ══════════════════════════════════════════════
  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function getWhatsAppBase() {
    return isMobileDevice()
      ? 'https://api.whatsapp.com/send'
      : 'https://web.whatsapp.com/send';
  }

  function setWhatsAppLinks() {
    var base = getWhatsAppBase();
    var url = base + '?phone=' + CONFIG.whatsappNumber + '&text=Hi%2C%20I%27m%20interested%20in%20your%20dental%20services.';
    document.querySelectorAll('.whatsapp-link, .set-url-target').forEach(function (el) {
      el.setAttribute('href', url);
    });
  }

  setWhatsAppLinks();
  window.addEventListener('resize', debounce(setWhatsAppLinks, 300));

  // ══════════════════════════════════════════════
  // 6. WHATSAPP FORM HANDLER
  // ══════════════════════════════════════════════
  window.handleContactForm = function (formEl) {
    if (!formEl.checkValidity()) {
      formEl.classList.add('was-validated');
      return false;
    }
    formEl.classList.add('was-validated');

    var name = (formEl.querySelector('[name="name"]') || {}).value || '';
    var phone = (formEl.querySelector('[name="phone"]') || {}).value || '';
    var email = (formEl.querySelector('[name="email"]') || {}).value || '';
    var service = (formEl.querySelector('[name="service"]') || {}).value || '';
    var message = (formEl.querySelector('[name="message"]') || {}).value || '';

    var text = 'Hello Perfect Smile Dental Clinic!%0A%0A';
    text += '*Name:* ' + encodeURIComponent(name) + '%0A';
    if (phone) text += '*Phone:* ' + encodeURIComponent(phone) + '%0A';
    if (email) text += '*Email:* ' + encodeURIComponent(email) + '%0A';
    if (service) text += '*Service:* ' + encodeURIComponent(service) + '%0A';
    if (message) text += '*Message:* ' + encodeURIComponent(message) + '%0A';

    var base = getWhatsAppBase();
    var waUrl = base + '?phone=' + CONFIG.whatsappNumber + '&text=' + text;
    window.open(waUrl, '_blank');
    formEl.reset();
    formEl.classList.remove('was-validated');
    return false;
  };

  // ══════════════════════════════════════════════
  // 7. SERVICE ENQUIRY (Quick WhatsApp)
  // ══════════════════════════════════════════════
  window.enquireService = function (serviceName) {
    var base = getWhatsAppBase();
    var text = encodeURIComponent('Hi, I would like to enquire about ' + serviceName + ' at Perfect Smile Dental Clinic. Please share more details.');
    var url = base + '?phone=' + CONFIG.whatsappNumber + '&text=' + text;
    window.open(url, '_blank');
  };

  // ══════════════════════════════════════════════
  // 8. INJECT FABs (WhatsApp + Call)
  // ══════════════════════════════════════════════
  function injectFABs() {
    if (document.getElementById('dynamic-fabs')) return;
    var fabContainer = document.createElement('div');
    fabContainer.id = 'dynamic-fabs';
    var waUrl = isMobileDevice()
      ? 'https://api.whatsapp.com/send?phone=' + CONFIG.whatsappNumber
      : 'https://web.whatsapp.com/send?phone=' + CONFIG.whatsappNumber;

    fabContainer.innerHTML =
      '<a href="tel:' + CONFIG.callNumber + '" class="fab-btn fab-call" rel="noopener" aria-label="Call us">' +
        '<iconify-icon icon="mdi:phone"></iconify-icon>' +
      '</a>' +
      '<a href="' + waUrl + '" class="fab-btn fab-whatsapp" rel="noopener" target="_blank" aria-label="Chat on WhatsApp">' +
        '<iconify-icon icon="mdi:whatsapp"></iconify-icon>' +
      '</a>';
    document.body.appendChild(fabContainer);
  }
  injectFABs();

  // ══════════════════════════════════════════════
  // 9. AOS & COUNTER INITIALIZATION
  // ══════════════════════════════════════════════
  function easeOutQuad(t) { return t * (2 - t); }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 2000;
    var start = performance.now();
    function update(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var value = Math.floor(easeOutQuad(progress) * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  function initAnimations() {
    if (typeof AOS !== 'undefined') {
      AOS.init({ once: true, duration: 800, offset: 60, easing: 'ease-out-cubic' });
      setTimeout(function () { AOS.refresh(); }, 200);
    }
    document.querySelectorAll('.stat-counter').forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  if (document.body.classList.contains('loaded')) {
    initAnimations();
  } else {
    document.addEventListener('loaderDismissed', initAnimations);
  }

  // ── Experience Auto-Update ──
  function updateExperienceYears() {
    var experience = new Date().getFullYear() - CONFIG.experienceBaseYear;
    // Update simple number badges
    document.querySelectorAll('.about-experience-badge .number').forEach(function (el) {
      el.textContent = experience + '+';
    });
    // Update stats counters (data-target)
    document.querySelectorAll('.stat-counter').forEach(function (el) {
      if (el.nextElementSibling && el.nextElementSibling.textContent.toLowerCase().includes('years experience')) {
        el.setAttribute('data-target', experience);
      }
    });
    // Update text in feature list
    document.querySelectorAll('.about-feature-item span').forEach(function (el) {
      if (el.textContent.includes('Years Experience')) {
        el.textContent = experience + '+ Years Experience';
      }
    });
  }
  updateExperienceYears();

  // ── Debounced Resize for AOS ──
  window.addEventListener('resize', debounce(function () {
    if (typeof AOS !== 'undefined') AOS.refresh();
  }, 250));

  // ══════════════════════════════════════════════
  // 10. BACK TO TOP
  // ══════════════════════════════════════════════
  var backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.addEventListener('scroll', function () {
      backBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    backBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ══════════════════════════════════════════════
  // 11. CUSTOM CURSOR (Desktop only)
  // ══════════════════════════════════════════════
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        if (!cursor.classList.contains('active')) cursor.classList.add('active');
      });
      document.addEventListener('mouseover', function (e) {
        if (e.target.closest('a, button, .btn, input, select, textarea, label')) {
          cursor.classList.add('hovered');
        }
      });
      document.addEventListener('mouseout', function (e) {
        if (e.target.closest('a, button, .btn, input, select, textarea, label')) {
          cursor.classList.remove('hovered');
        }
      });
    }
  }

  // ══════════════════════════════════════════════
  // 12. DYNAMIC SERVICE RENDERERS
  // ══════════════════════════════════════════════

  // Render service cards into a Swiper on the homepage
  window.renderServiceSwiper = function (containerSelector) {
    var container = document.querySelector(containerSelector);
    if (!container || !window.CLINIC_SERVICES) return;
    var wrapper = container.querySelector('.swiper-wrapper');
    if (!wrapper) return;

    window.CLINIC_SERVICES.forEach(function (svc) {
      var slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML =
        '<div class="service-card">' +
          '<div class="service-card-imgWrap">' +'<div class="service-card-img"><img src="' + svc.image + '" alt="' + svc.name + '" loading="lazy"></div>'
             +
            '<div class="service-icon"><iconify-icon icon="' + svc.icon + '"></iconify-icon></div>' +
          '</div>' +
          '<div class="service-card-body">' +
            '<h4>' + svc.name + '</h4>' +
            '<p>' + svc.description + '</p>' +
            '<div class="service-card-footer">' +
              '<a href="services.html#' + svc.id + '" class="btn-primary-custom" style="padding:.5rem 1.2rem;font-size:.82rem;">Learn More</a>' +
              '<button class="btn-whatsapp" onclick="enquireService(\'' + svc.name.replace(/'/g, "\\'") + '\')" style="font-size:.78rem;padding:.45rem 1rem;">' +
                '<iconify-icon icon="mdi:whatsapp"></iconify-icon> Enquiry' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>';
      wrapper.appendChild(slide);
    });
  };

  // Render service cards into Isotope grid on services page
  window.renderServiceGrid = function (containerSelector) {
    var container = document.querySelector(containerSelector);
    if (!container || !window.CLINIC_SERVICES) return;

    window.CLINIC_SERVICES.forEach(function (svc) {
      var card = document.createElement('div');
      card.className = 'service-grid-item';
      card.setAttribute('data-category', svc.category);
      card.id = svc.id;
      card.innerHTML =
        '<div class="service-card">' +
          '<a href="' + svc.image + '" data-fancybox="services" data-caption="' + svc.name + '">' +
            '<div class="service-card-img">' +
              '<img src="' + svc.image + '" alt="' + svc.name + '" loading="lazy">' +
              '<div class="gallery-overlay"><iconify-icon icon="mdi:magnify-plus-outline"></iconify-icon></div>' +
              '<div class="service-icon"><iconify-icon icon="' + svc.icon + '"></iconify-icon></div>' +
            '</div>' +
          '</a>' +
          '<div class="service-card-body">' +
            '<h4>' + svc.name + '</h4>' +
            '<p style="-webkit-line-clamp:5;">' + svc.description + '</p>' +
            '<div class="service-card-footer">' +
              '<button class="btn-whatsapp" onclick="enquireService(\'' + svc.name.replace(/'/g, "\\'") + '\')">' +
                '<iconify-icon icon="mdi:whatsapp"></iconify-icon> Enquiry for ' + svc.name.split(' ')[0] +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>';
      container.appendChild(card);
    });
  };

  // ══════════════════════════════════════════════
  // 13. TESTIMONIALS SWIPER INIT
  // ══════════════════════════════════════════════
  if (typeof Swiper !== 'undefined' && document.querySelector('.testimonials-swiper')) {
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      pagination: { el: '.testimonials-swiper .swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

})();
