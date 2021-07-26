$(document).ready(function(){
  $(".image1").click(function(){
    $(".image1").hide();
    $(".p1").toggle();
    $(".p1").show();
  })
  $(".p1").click(function(){
    $(".p1").hide();
    $(".image1").toggle();
    $(".image1").show();
  });
});
$(document).ready(function(){
    $(".image2").click(function(){
      $(".image2").hide();
      $(".p2").toggle();
      $(".p2").show();
    })
    $(".p2").click(function(){
      $(".p2").hide();
      $(".image2").toggle();
      $(".image2").show();
    });
});
$(document).ready(function(){
    $(".image3").click(function(){
      $(".image3").hide();
      $(".p3").toggle();
      $(".p3").show();
    })
    $(".p3").click(function(){
      $(".p3").hide();
      $(".image3").toggle();
      $(".image3").show();
    });
});
$(document).ready(function(){
    $('.text').hover(function () {
    $(this).alert({opacity:'1'});
    },
    function () {
    $(this).alert({opacity:'0'});
})
});
$(document).ready(function(){
    $('#submission').submit(function(event){
        var display1 = $('input:first').val();
        var display2 = $('input#mail').val();
        if(display1 && display2 != ''){
            alert ('Thank you ' + display1 + ' your subscription is well received');
        }else {
            alert ('Invalid input');
        }
        event.preventDefault();
    })
});