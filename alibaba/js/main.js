$(document).ready(function(){
$('#fly').click(function(){
  $('#fly .arrow').toggleClass('rotate-arrow')  
    $('#fly > ul').toggle();
});

$('.support').click(function(){
    $('.support .arrow').toggleClass('rotate-arrow')  
      $('#support').toggle();
  });
});

$(document).ready(function(){
  $('.btn-search').click(function(){
    if($('#origin').val().length === 0){
        $('.modal-bell').show()
     setTimeout(function(){
      $('.modal-bell').hide()
     },3000) 
    }
 
  })
  $('.modal-bell').click(function(){ 
    $('.modal-bell').hide()
  });
});



$(document).ready(function() {
  $('.x').on('click', function(e) {
    e.preventDefault();
    $('#main-menu').find('.active-i').removeClass('active-i');
    $(this).addClass('active-i');
  });
}); 

$(document).ready(function(){
$('#origin').click(function(){ 
    $('#dest-dd').hide();  
    $('#origin-dd').toggle();
    $('.modal-cover').show();
});
    $('.modal-cover , #origin-dd').click(function(){ 
      $('.modal-cover').hide();
      $('#origin-dd').hide();
    });  
   
});



$('#dest').click(function(){ 
  $('#origin-dd').hide()  
    $('#dest-dd').toggle();
    $('.modal-cover').show();
    $('.modal-cover , #dest-dd').click(function(){ 
    $('.modal-cover').hide();
     $('#dest-dd').hide();
});
}); 

$('#passenger').click(function(){ 
    $('#dest-dd').hide()  
    $('#passenger-dd').toggle();
    $('.modal-cover').show();
    $('.modal-cover , .passenger-btn ').click(function(){ 
    $('.modal-cover').hide();
    $('#passenger-dd').hide();
});
});

$(document).ready(function(){
  $('#input1 .nav-dropdown li a').click(function(e){
      e.preventDefault()
    var selText = $(this).text();
    $('#origin').attr('value',selText);
    $('#input1 .nav-dropdown').hide()

 $('#input2 .nav-dropdown li a').click(function(e){
    e.preventDefault()
  var selText2 = $(this).text();
  $('#dest').attr('value',selText2);
  $('#input2 .nav-dropdown').hide()

  $('.reverse').click(function(){ 
    if($('#dest-dd , #origin-dd').show()){
        $('#dest-dd , #origin-dd').hide()  
    }
    $('#origin').attr('value',selText2);
    $('#dest').attr('value',selText);
});
});
});
});
$(document).ready(function(){
    $("#first-li .inc").click(function(){
   $("#amount-1").text(Number($("#amount-1").text()) + 1);
      //  var abc = $('#amount-1').text();
      $("#passenger").val( Number($("#amount-1").text()) + ' مسافر ');
    });
    $("#first-li .dec").click(function(){
      $("#amount-1").text( Math.max(1, Number($("#amount-1").text()) - 1 ));
      $("#passenger").val( Number($("#amount-1").text()) + ' مسافر ');
    });

  $("#second-li .inc").click(function(){
    $("#amount-2").text(Number($("#amount-2").text()) + 1);
  });
  $("#second-li .dec").click(function(){
    $("#amount-2").text( Math.max(0, Number($("#amount-2").text()) - 1 ));
  });

  $("#third-li .inc").click(function(){
    $("#amount-3").text(Number($("#amount-3").text()) + 1);
  });
  $("#third-li .dec").click(function(){
    $("#amount-3").text( Math.max(0, Number($("#amount-3").text()) - 1 ));
  });
  // $("#passenger").val(Number($("#amount-1").text())  + Number($("#amount-2").text()) + Number($("#amount-3").text()) +' مسافر ');
});

$(document).ready(function(){
$('.link').click(function(){
      $('.sub-link').toggleClass('d-flex');
  });
  $('.btn-follow , .login-btn').click(function(e){
      e.preventDefault();
    $('.bg-modal').show();
    $('.modal-login').show();
});
$('.modal-close , .bg-modal').click(function(e){
    e.preventDefault();
  $('.bg-modal').hide();
  $('.modal-login').hide();
});
});
$(document).ready(function(){
$('.alert-box-1 .alert-close').click(function(){  
  $('.alert-box-1').hide();
});
});

$(window).scroll(function(){
if($(this).scrollTop()>=400){  
    $('.navigation').hide(); 
}else{
    $('.navigation').show();
}

});
$(document).ready(function() {
    $(".data-picker").pDatepicker({
        initialValue: false,
        format: 'YYYY/MM/DD',
        autoClose: true
    });
  });
  $(document).ready(function() {
    $(".data-picker-2").pDatepicker({
        initialValue: false,
        format: 'YYYY/MM/DD',
        autoClose: true
    });
  });
  

$('.owl-carousel-slider').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:2
        },
        1300:{
            items:2
        }
    }
})
$('.owl-carousel-airline').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:6
        },
        1000:{
            items:6
        },
        1200:{
            items:10
        }
    }
})
