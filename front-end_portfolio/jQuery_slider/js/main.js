//$(document).ready(function(){
//    var slider = $('#slider');
//    var slideShow = $('.slide-show');
//    var slideCount = slideShow.children().length;
//    console.log(slideCount);
//    var slideWidth = 100/slideCount;
//    console.log(slideWidth);
//    var slideIndex = 0;
//    console.log(slideIndex);
//    
//    //szerokość slideShow:
//    
//    $(slideShow).css('width', slideCount * 100 + '%');
//    
//    //nadanie marginesów i szerokości:
//    
//    slideShow.find('.single-slide').each(function(){
//        $(this).css({
//            'width': slideWidth+'%',
//            'margin-left': index * slideWidth + '%',
//        });
//    });
//    
//    function slide(newSlideIndex){
//        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
//            return;
//        }
//        
//        var napis = $('.slider-caption').eq(newSlideIndex);
//        
//        napis.hide();
//        
//        var marginLeft = newSlideIndex * (-100) + '%';
//        
//        slideShow.animate({'margin-left': marginLeft}, 800, function(){
//            slideIndex = newSlideIndex;
//            napis.fadeIn('slow');
//        });
//    }
//    
//    $('.prev-slide').click(function(event){
//        event.preventDefault();
//        slide(slideIndex - 1);
//    });
//    
//    $('.next-slide').click(function(event){
//        event.preventDefault();
//        slide(slideIndex + 1);
//    });
//
//
//
//    
//});
// Workshop version
$(document).ready(function() {
var slider = $("#slider");
var slideShow = $(".slide-show");
var slideCount = $(".single-slide").length;
var slideWidth = 100 / slideCount;
var slideIndex = 0;

    
// Slide show container width
slideShow.css('width', slideCount * 100 + "%"); //szerokość 500%

    
// New margins
slideShow.find(".single-slide").each(function(index){
    $(this).css({
       "width": slideWidth + "%",
       "margin-left": index * slideWidth + "%" //index * 20%
    });
})
 
    
//Navigation
 $(".prev-slide").click(function(event){
     event.preventDefault();
     slide(slideIndex - 1);
 });
 $(".next-slide").click(function(event){
     event.preventDefault();
     slide(slideIndex + 1);
 });   
    
    
//Function declaration
function slide(newSlideIndex){
    if (newSlideIndex < 0 || newSlideIndex >= slideCount){
        return;
    };
    
    var slideText = $(".slider-caption").eq(newSlideIndex);
    slideText.hide();
    
    var leftMargin = newSlideIndex * (-100) + "%";
    
    slideShow.animate({"margin-left": leftMargin}, 
                      1000,
                      function(){
                            slideIndex = newSlideIndex;
                            slideText.fadeIn("slow");
                            }); 
};
    
});