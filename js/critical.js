/* ================================================
   CRITICAL.JS — Preloader, Navbar & Scroll
   Perfect Smile Dental Clinic
   ================================================ */
(function () {
  'use strict';

  // ── Preloader Dismissal ──
  function removePreloader() {
    if (document.body.classList.contains('loaded')) return;
    document.body.classList.add('loaded');
    document.dispatchEvent(new CustomEvent('loaderDismissed'));
    var preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(function () { preloader.remove(); }, 600);
    }
  }

  if (document.readyState === 'complete') {
    removePreloader();
  } else {
    window.addEventListener('load', removePreloader);
    setTimeout(removePreloader, 4000);
  }

  // ── Inject Navbar ──
  var headerEl = document.getElementById('mainNavbar');
  if (headerEl) {
    headerEl.innerHTML =
      '<nav class="navbar navbar-expand-lg">' +
        '<div class="container">' +
          '<a class="navbar-brand" href="index.html">' +
            '<img height="42px" width="128.06px"  src="images/BrandLogo.webp" alt="Perfect Smile Dental Clinic | Dr. Fora Patel">' +
          '</a>' +
          '<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-label="Toggle navigation">' +
            '<span class="navbar-toggler-icon"></span>' +
          '</button>' +
          '<div class="collapse navbar-collapse justify-content-end d-none d-lg-flex" id="navbarNav">' +
            '<ul class="navbar-nav align-items-center">' +
              '<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>' +
              '<li class="nav-item dropdown">' +
                '<a class="nav-link dropdown-toggle" href="services.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services <iconify-icon icon="icon-park-outline:down"></iconify-icon></a>' +
                '<ul class="dropdown-menu">' +
                  '<li><a class="dropdown-item" href="services.html">All Services</a></li>' +
                  '<li><hr class="dropdown-divider"></li>' +
                  '<li><a class="dropdown-item" href="services.html#ceramicCrowns">Ceramic Crowns & Bridges</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#fixedProsthodontics">Fixed Prosthodontics</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#maxillofacialProsthetics">Maxillofacial Prosthetics</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#oralSurgery">Oral & Maxillofacial Surgery</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#rct">RCT (Root Canal)</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#dentalTreatments">Dental Treatments</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#dentalImplants">Dental Implants</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#preventiveDentistry">Preventive Dentistry</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#bracesAligners">Braces / Aligners</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#teethWhitening">Teeth Whitening</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#pediatricDentistry">Pediatric Dentistry</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#smileDesigning">Smile Designing</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#dentalVeneers">Dental Veneers / Laminates</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#wisdomToothRemoval">Wisdom Tooth Removal</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#toothExtraction">Tooth Extraction</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#gumTreatment">Gum Treatment (Periodontics)</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#fullMouthRehab">Full Mouth Rehabilitation</a></li>' +
                  '<li><a class="dropdown-item" href="services.html#dentalFillings">Dental Fillings</a></li>' +
                '</ul>' +
              '</li>' +
              '<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>' +
              '<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>' +
              '<li class="nav-item ms-lg-3">' +
                '<a href="contact.html" class="btn btn-primary btn-sm px-4 py-2">Book Appointment</a>' +
              '</li>' +
            '</ul>' +
          '</div>' +
          '<!-- Offcanvas Mobile Menu -->' +
          '<div class="offcanvas offcanvas-end d-lg-none" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">' +
            '<div class="offcanvas-header">' +
              '<a class="navbar-brand" href="index.html">' +
                '<img height="42px" width="128.06px" src="images/BrandLogo.webp" alt="Perfect Smile Dental Clinic | Dr. Fora Patel">' +
              '</a>' +
              '<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>' +
            '</div>' +
            '<div class="offcanvas-body">' +
              '<ul class="navbar-nav">' +
                '<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>' +
                '<li class="nav-item dropdown">' +
                  '<a class="nav-link dropdown-toggle" href="services.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services <iconify-icon icon="icon-park-outline:down"></iconify-icon></a>' +
                  '<ul class="dropdown-menu">' +
                    '<li><a class="dropdown-item" href="services.html">All Services</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#ceramicCrowns">Ceramic Crowns & Bridges</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#fixedProsthodontics">Fixed Prosthodontics</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#maxillofacialProsthetics">Maxillofacial Prosthetics</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#oralSurgery">Oral & Maxillofacial Surgery</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#rct">RCT (Root Canal)</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#dentalTreatments">Dental Treatments</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#dentalImplants">Dental Implants</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#preventiveDentistry">Preventive Dentistry</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#bracesAligners">Braces / Aligners</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#teethWhitening">Teeth Whitening</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#pediatricDentistry">Pediatric Dentistry</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#smileDesigning">Smile Designing</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#dentalVeneers">Dental Veneers / Laminates</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#wisdomToothRemoval">Wisdom Tooth Removal</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#toothExtraction">Tooth Extraction</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#gumTreatment">Gum Treatment (Periodontics)</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#fullMouthRehab">Full Mouth Rehabilitation</a></li>' +
                    '<li><a class="dropdown-item" href="services.html#dentalFillings">Dental Fillings</a></li>' +
                  '</ul>' +
                '</li>' +
                '<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>' +
                '<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>' +
                '<li class="nav-item mt-3">' +
                  '<a href="contact.html" class="btn btn-primary w-100 py-2">Book Appointment</a>' +
                '</li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</nav>';

    // ── Active Link Detection ──
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = headerEl.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.split('?')[0].split('#')[0] === currentPage) {
        link.classList.add('active');
        // If it's inside a dropdown, also activate the parent
        var parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
          var toggle = parentDropdown.querySelector('.dropdown-toggle');
          if (toggle) toggle.classList.add('active');
        }
      }
    });

    // ── Scroll Behavior ──
    var navbar = document.getElementById('mainNavbar');
    var onScrollState = function () {
      if (!navbar) return;
      navbar.classList.toggle('scrolled', window.scrollY > 70);
    };
    window.addEventListener('scroll', onScrollState, { passive: true });
    onScrollState();
  }
})();