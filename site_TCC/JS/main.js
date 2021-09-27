jQuery(document).ready(function($) {
//fixar o header 
window.onscroll = function(){
    if(window.pageYOffset > 140){
       $ ("#header").addClass("active"); 
    }else{
        $ ("#header").removeClass("active"); 
    }

}
});
let btns = $("#sobre .button-group button");

  btns.click(function (e) {
    $("#sobre .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $("#sobre .grid").isotope({
      filter: selector,
    });
  });

  $(window).on("load", function () {
    $("#sobre .grid").isotope({
      filter: "*",
    });
  });


jQuery(document).ready(function($){
    $("#includedContent").load("Atv1.html"); // incluir conteúdo do menu.html na div com id #includedContent
  });
 

  
 