$(function () {
    /**
    * 메뉴를 아래로 스크롤 시, 특정 구역에서 이벤트(메뉴사라짐)발생
    * @version 1.0.0
    * @since 2022-05-28
    * @author 이유라 (Nico)
    * @memo 
    * ISSUE : 스크롤 방향에 따라 메뉴 사라짐 & 생성
    * > 특정 위치 offset().top으로 절대좌표 선언!
    */
    $(window).scroll(function () {

        var curr = $(this).scrollTop();//현재 스크롤 위치
        target = $('.sc-campaign').offset().top;//sc-campaign의 스크롤위치
        //@@@@@@@ top 괄호없음!!!!**offset().top**
    
        if (curr >= target) {
            $('.header-area').addClass('remove')
        } else {
            $('.header-area').removeClass('remove')
        }

    })




    /**
    * 메뉴 hover 시, 세부메뉴 영역 생성 & 세부메뉴 hover event
    * @version 1.0.0
    * @since 2022-05-28
    * @author 이유라 (Nico)
    * @memo 
    * ISSUE : 오버 시, 세부메뉴 배경은 고정 & 텍스트만 사라지고 생성
    * >length == 1 로 '회사소개~ 뉴스룸'과 '글꼴' 조건 다르게 주기
    */
    $('.gnb-area .menu-item').hover(function(){
    //오답    $(this).children('.sub-list').stop().slideDown();
        $('.sub-list .sub-item:first-child').addClass('hover').siblings().removeClass('hover');//첫번째 오버 시, 첫번째 선택하도록!!
        // ↑ .sub-item.first도 가능
        if ($(this).find('.sub-list').length == 1) {
            //length == 1 의 의미 :sub-list의 태그 개수가 1개라면> 한마디로 sub-list태그가 있는 고릴라차트~ 브랜드(검색, 콘텐츠)까지 조건 주기위함
            //length 태그의 개수가 1이면 1, 없으면0 10개면 10
            //length == 1을 아예 삭제할 경우: sub-list가 없는 검색, 콘텐츠까지 배경이 유지되버림
            $('.header-area').addClass('active')
            $(this).find('.sub-list').addClass('active')
        }
    },function(){
    //오답    $('..sub-list').stop().slideUp();
        $('.header-area').removeClass('active')
        $('.sub-list').removeClass('active')//줘야만 모두 빠짐
    })//

    $('.sub-list .sub-item').hover(function(){
        $(this).addClass('hover').siblings().removeClass('hover');
    })

        // 오답 var otherParent = parent('.sub-list');

        // $('.sub-item.first').hover(function(){
        //   $(this).addClass('active')
        // //   다른 sublist호버하면 active 제거
        // //   if (otherParent.hover()) {
              
        // //       $(this).removeClass('active')
        // //   }
        // })//

        // $('.sub-item').hover(function(){
        //     // $(this).css('color','#d6d7da')
        //     $(this).add
        // },function(){
        //     // $(this).css('color','#232324')
        //     $(this).addClass('active')
        // })//

    //   $('.sub-item.first').hover(function(){
    //       if ($(this).hasClass(':not(first)')) {
              
    //         $(this).addClass('first')
    //         $(this).addClass('active')
    //       } else {

    //         $(this).removeClass('first')
    //         $(this).removeClass('remove')
    //       }
    //     })//

       

 



    /**
    * footer : related-site 아코디언
    * @version 1.0.0
    * @since 2022-05-29
    * @author 이유라
    * @memo 
    */

    $('.btn-down').click(function () {
        siblings = $(this).siblings('.related-list')

    if (siblings.css('display') == 'none') {
        // 슬라이드열기 up이 아니고, down!! 
        // 삭제 $('.related-list').stop().slideUp();
        siblings.stop().slideDown();
        $(this).addClass('on');

    } else {
        // 삭제 $('.related-list').stop().slideDown();
        siblings.stop().slideUp();
        $(this).removeClass('on');
    }
    })//






    /**
    * 반응형 우측 메뉴 생성 & 메뉴 닫기버튼과 어두운 영역 클릭 시, 닫히기
    * @version 1.0.0
    * @since 2022-05-29
    * @author 이유라 (Nico)
    * @memo 
    * ISSUE : 스크롤바 숨기기
    */
    $('.header-area .btn-open').click(function(e){
        e.preventDefault();
        $('.gnb-right-area').addClass('active'); 
        $('body').addClass('scroll-hidden');
    })//
    $('.gnb-right-area .btn-close, .dimmed').click(function(e){
        e.preventDefault();
        $('.gnb-right-area').removeClass('active');
        $('body').removeClass('scroll-hidden');
    })//

      
    $('.gnb-right-area .menu-option .child').click(function(e){
        e.preventDefault();
        
        var siblings = $(this).siblings('.sub-menu')

        siblings.slideToggle('on');
        $(this).toggleClass('on');
        
    })//


}) //end