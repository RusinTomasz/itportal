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

          const menuMobile = new MobileMenu(".main-menu", true);
        });
    }
  };
})(jQuery, Drupal);
