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

          const speedButton = document.getElementById('speed-button');
          if(typeof(speedButton) != 'undefined' && speedButton != null && speedButton.length != 0) {
            speedButton.addEventListener('click', function(e) {
              e.preventDefault();
              const urlInput = document.querySelector('.url-button');
              const valueOfUrlInput = urlInput.value;
              const link = 'https://developers.google.com/speed/pagespeed/insights/?hl=pl&url=';
              if(valueOfUrlInput !== '' && valueOfUrlInput !== 'Podaj adres strony do sprawdzenia') {
                var win = window.open(`${link}${valueOfUrlInput}`, '_blank');
                win.focus();
              }else {
                urlInput.value = 'Podaj adres strony do sprawdzenia';
                urlInput.style.color = '#f57619';
                urlInput.addEventListener('click', function() {
                  if (this.value === 'Podaj adres strony do sprawdzenia') {
                    this.value = '';
                    this.style.color = '#797e97';
                  }
                });
              }
            });
          }

          const benefitsWrapper = document.querySelector('.benefits-features-wrapper');
          if(typeof(benefitsWrapper) != 'undefined' && benefitsWrapper != null && benefitsWrapper.length != 0) {
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
            });
            featuresButton.addEventListener('click', function() {      
              featuresDescription.classList.add('active');
              benefitsDescription.classList.remove('active');
              if(!this.classList.contains('active')) {
                this.classList.add('active');
                benefitsButton.classList.add('active-features');
                benefitsButton.classList.remove('active');
              }
            });
          }

        });
    }
  };
})(jQuery, Drupal);
