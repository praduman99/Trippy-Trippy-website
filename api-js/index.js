
$(document).ready(function() {
    $(window).scroll( function(){
        $('#1v').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'0px'},1000);
            }
            
        }); 
    });
});
$(document).ready(function() {
  $(window).scroll( function(){
      $('#2v').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'0px'},1000);
          }
          
      }); 
  });
});
$(document).ready(function() {
  $(window).scroll( function(){
      $('#3v').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'0px'},1000);
          }
          
      }); 
  });
});