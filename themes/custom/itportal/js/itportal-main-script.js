(function($, Drupal) {
  Drupal.behaviors.myCustomMainBehavior = {
    attach: function(context, settings) {
      $(context)
        .find("body")
        .once("myCustomMainBehavior")
        .each(function() {
          // if ($("body")) {
          //   new WOW().init();
          // }

          // setTimeout(function () {
          //   $('#page-loader').addClass('loaded');
          // }, 500);
          // setTimeout(function () {
          //   $('#page-loader').remove();
          // }, 1500);
          let imageWrapper = document.querySelectorAll('.responsive-img-background');
          if(typeof(imageWrapper) != 'undefined' && imageWrapper != null && imageWrapper.length != 0) {
            for (let i=0; i<imageWrapper.length; i++) {
              new ResponsiveBackgroundImage(imageWrapper[i]);
            }
          }

          const menuMobile = new MobileMenu(".main-menu", true);
          const primaryMenuContainer = document.querySelector('.primary-menu-container');
          window.addEventListener("scroll", function (event) {
            var scroll = this.scrollY;
            if (scroll > 0) {
              primaryMenuContainer.classList.add('active');
            } else {
              primaryMenuContainer.classList.remove('active');
            }
          });

          const featuresButton = document.getElementById('features-button');
          const benefitsButton = document.getElementById('benefits-button');
          const benefitsDescription = document.querySelector("[data-toggle='benefits']");
          const featuresDescription = document.querySelector("[data-toggle='features']");
          benefitsButton.addEventListener('click', function() {
            if(!this.classList.contains('active')) {         
              benefitsDescription.classList.add('active');
              featuresDescription.classList.remove('active');
              this.classList.add('active');
              if(this.classList.contains('active-features')) {
                this.classList.remove('active-features');
              }
              featuresButton.classList.remove('active');
            }
          })
          featuresButton.addEventListener('click', function() {      
            featuresDescription.classList.add('active');
            benefitsDescription.classList.remove('active');
            if(!this.classList.contains('active')) {
              this.classList.add('active');
              benefitsButton.classList.add('active-features');
              benefitsButton.classList.remove('active');
            }
          })


        });
    }
  };
})(jQuery, Drupal);
