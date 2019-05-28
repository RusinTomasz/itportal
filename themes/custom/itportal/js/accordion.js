(function ($, Drupal) {
  Drupal.behaviors.myCustomAcordion = {
    attach: function (context, settings) {
      $(context).find('body').once("myCustomAcordion").each(function () {
        $(function(){
          var accordionTitle = document.querySelectorAll(".accordion-button");
          var faqWrapper =  document.querySelector('.faq-questions-wrapper');
          if(accordionTitle) {
            accordionTitle.forEach(function(e) {
              e.addEventListener("click", function(e) {
                e.preventDefault();
                var description = this.querySelector(".question-answer");
                if (description.style.maxHeight == 0 || description.style.maxHeight == "0px") {
                  description.style.maxHeight = description.scrollHeight + "px";
                  var activeElement = faqWrapper.querySelector('.active');
                  console.log(activeElement);
                  if(activeElement) {
                    activeElement.classList.remove('active');
                    activeElement.querySelector('.question-answer').style.maxHeight = 0;
                  }
                  this.classList.add('active');
                }else {
                  description.style.maxHeight = 0;
                  this.classList.remove('active');
                }
              });
            });
          };
        });
      });
    }
  };
})(jQuery, Drupal);