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
        });
    }
  };
})(jQuery, Drupal);
