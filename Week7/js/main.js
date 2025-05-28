(function () {
  "use strict";

  var camera = new Swiper("#camera .swiper", {
    speed: 600,
    spaceBetween: 12,
    navigation: {
      enabled: true,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var photos = GLightbox({
    selector: "#photos .photo",
  });

  var glightbox = GLightbox({
    selector: ".glightbox",
  });

  var comment = new Swiper("#comments .swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
  });

  var header = document.getElementById("header");
  var headerScrolled = (event) => {
    if (window.scrollY > 100) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  };

  window.addEventListener("load", headerScrolled);
  document.addEventListener("scroll", headerScrolled);

  var links = document.getElementsByClassName("scrollto");

  var focusSectionLink = (event) => {
    for (const link of links) {
      var id = link.hash.slice(1);
      var section = document.getElementById(id);
      var position = window.scrollY + window.innerHeight / 2;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        link.ariaCurrent = "page";
        link.classList.add("active");
      } else {
        link.ariaCurrent = null;
        link.classList.remove("active");
      }
    }
  };

  var focusSection = (event) => {
    event.preventDefault();
    var id = event.target.hash.slice(1);
    var section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - header.offsetHeight,
        behavior: "smooth",
      });
    }
  };

  window.addEventListener("scroll", focusSectionLink);

  for (const link of links) {
    link.addEventListener("click", focusSection);
  }
})();
