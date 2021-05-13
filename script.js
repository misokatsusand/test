$(function() {
  $('.menu-list').hover(
    function(){
      const list_index = $('.menu-list').index(this);
      $('.menu-list').eq(list_index).addClass("selected_menu");
      $('.selected_menu').animate({
        'paddingLeft':'23px'
      },100);
      $('.menu-allow').eq(list_index).fadeIn(100);

    },function(){
      $('.menu-allow').fadeOut(100);
      $('.selected_menu').animate({
        'paddingLeft':'10px'
      },100);
      $('.menu-list').removeClass("selected_menu");

    });

    $('.company').hover(
      function(){
        const rightList_index = $('.company').index(this);
        $('.company').eq(rightList_index).addClass("selected_rightList");
        $('.selected_rightList').animate({
          'width':'17%'
        },150,"easeOutQuad");

      },function(){
        $('.selected_rightList').animate({
          'width':'12%'
        },50);
        $('.company').removeClass("selected_rightList");

      });

    $('.fa-bars').click(function(){
      $('.fa-bars').fadeOut(100);
      $('.fa-times').fadeIn(500);
      $('.menu-modal').animate({
        'top':'55px'
      },400,"easeOutQuad");

      $('.modal-bg').fadeIn(500);
    });

    $('.modal-bg').click(function(){
      $('.fa-times').fadeOut(100);
      $('.fa-bars').fadeIn(500);
      $('.menu-modal').animate({
        'top':'-600px'
      },200);
      $('.modal-bg').fadeOut(500);
    });

    $('.fa-times').click(function(){
      $('.fa-times').fadeOut(100);
      $('.fa-bars').fadeIn(500);
      $('.menu-modal').animate({
        'top':'-600px'
      },200);
      $('.modal-bg').fadeOut(500);
    });


});
