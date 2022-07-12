$(function () {
    /**
    * 메인비주얼 슬라이드 + 한 글자씩 타이핑
    * @version 1.0.0
    * @since 2022-05-26
    * @author 이유라 
    * @memo 
    */

    var mainSlide = new Swiper(".sc-visual .swiper", {
        loop: true,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
     
    });

    // @@ 글자 한글자씩 생기는 스크립트
    // splitText = (ele)=>{
    //     const textAry = ele.innerText.split("");
    //     let html = "<div class='split-chars'>";
    //     textAry.forEach(function(ele){
    //       html+= "<div class='split-char'>" + ele + "</div>";
    //     })
    //     html+= "</div>";  
    
    //     ele.innerHTML = html;
    //   }

    
    // @@구글링 스크립트 > 실행 안됨 
    // var content = "이런 일도 하나요?" //표시하고자 하는 텍스트는 content 변수로선언
    // var text = document.querySelector(".typing-txt")//타이핑 효과를 줄 태그
    // let index = 0;
    
    // function typing(){
    // text.textContent += content[index++]
    // if(index > content.length){
    //     text.textContent = ""
    //     index = 0;
    // }
    // }
    // setInterval(typing, 500)

    // typing  함수는 index 를 1씩 증가시키면서 content 텍스트의 내용을 하나씩 덧붙여가며 
    // <h1 class="typing-txt"> 태그에 표시하는 기능을 수행
    // 이 함수를 호출할 때마다 표시되는 문자는 하나씩 증가
    // 그러다 index 가 텍스트(content 문자열)의 길이보다 길어지게 되면, 
    // 처음부터 다시 표시를 시작할 수 있도록 관련 값들을 리셋
    // typing 함수가 주기적으로 계속 실행되도록 500ms 마다 호출
    
 


    /** GSAP의 시작
    * 카드 스크롤 슬라이드
    * @version 1.0.0
    * @since 2022-05-26
    * @author 이유라 
    * @memo
    * issue : 메뉴가 천천히 롤링되는 상태 > keyframe과 gsap 모두 구현 가능
    * 
    *///@@@@@@@@@@@@@@css keyframe으로도 구현 가능
    // var fontSlide = new Swiper(".sc-font-service .swiper", {
    //     loop: true,
    //     slidesPerView: 6,
    //     pauseOnHover:false,

    //     autoplay: {
    //         delay: 2000,
    //         disableOnInteraction: false,
    //     },
    // });


    // $(this).css("left",bannerLeft);                
    // bannerLeft += $(this).width()+5;               
    // $(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가            


    // var fontSlide = require('jquery');
    // require(".sc-font-service .swiper");

    // $(".sc-font-service .swiper").simplyScroll({
    //     speed: 1,
    //     pauseOnHover:false,
    // });

    // $(".sc-font-service .swiper").simplyScroll({
    //     loop:true,
    //     // swiperperview:10,
    //     pauseOnHover:false
    // });

    // $('.sc-font-service .swiper-wrapper').carouFreSel({
    //     items :{
    //         visible : 6
    //     },
    //     scroll : {
    //         duration : 800, //롤링 속도
    //         pauseOnHover : false //마우스 오버 시 롤링멈춤을 끔

    //     },
    //     direction : "left",
    // });




    // **** 
    // *GSAP의 시작
    // /

    //@@ fromto 로 해야만 전과후 설정 가능!!!!
    
    gsap.fromTo('.card-wrap .card-item',10,{
        y:30,
        opcity:1,
    },{
        scrollTrigger:{
            //시작할 기준태그로는 스크롤이 도달해야만 실행되기 때문에
            // 도달 이전(= 화면에서 보이기 시작할시점)부터 실행되기 위해서는 
            // 윈도우 시작지점을 조정하여 실행시키는 것이 적절!!
            trigger:"card-wrap",//시작할 기준태그
            start:"0% 90%",//[기준태그의 시작지점(0%), 윈도우 시작지점(90%) => 두개가 만나야실행]
            end:"100% 0%",//[기준태그의 시작지점(100%), 윈도우 시작지점(0%) => 두개가 만나야실행]
            // markers:true,
        },
        y:0,//(30에서 0으로)
        duration: 1,//1초동안
        stagger:0.2,//각각 순차적으로 0.2씩 실행됨
        // repeat:-1,

    })

    cardMotion = gsap.to('.card-wrap .inner',10,{
        // x:-50 (: px just 그냥 숫자-50은 px을 의미)
        xPercent:-50,// > %
        repeat : -1,
        ease:"none",
        paused:true,//정지상태 세팅
    })

    cardMotion.play() //기본실행

    $('.card-wrap').hover(function(){
        cardMotion.pause();//정지
    },function(){
        cardMotion.play();//실행
    })



    
    
    /**
    * GSAP 스크롤 시, 글자가 나타남
    * @version 1.0.0
    * @since 2022-05-30
    * @author 이유라 
    * @memo 
    */
    // 부모요소에 주지 말고 자식요소에 세부적으로 적용해야함
    // 하나하나 각각 효과주기위해서는 each구문 사용!
    // element(태그)는 this와 같은 역할 
    $('[data-fade]').each(function(index,element){//순서, 태그

        gsap.fromTo(element,{
            opacity:0,
            y:50
        },{
            scrollTrigger:{//> ":" 잊지말기
                trigger:element,//시작할 기준태그
                start:"0% 90%",//[기준태그의 시작지점, 윈도우 시작지점 => 두개가 만나야실행]
                end:"100% 0%",//[기준태그의 시작지점, 윈도우 시작지점 => 두개가 만나야실행]
                // markers:true,//scroller 표기기능 킴
            },
            y:0,
            opacity:1,
    
        })
    })
    
    // @@@ 문법 오류 이력 check
    // $('[data-fade]').each(function(index,element){
    //     gsap.fromTo(element,{
    //         opacity:0,
    //         y:50
    //     },{//한번 더 대괄호 열기
    //         scrollTrigger:{//> ":" 잊지말기
    //             trigger:element,
    //             start:"0% 90%",
    //             end:"100% 0%",
    //             markers:true,
    //         },
    //         opacity:1,
    //         y:0,
    //     })
    // })

  




    /**
    * 동영상 재생 정지 & 정지, 재생 버튼
    * @version 1.0.0
    * @since 2022-05-30
    * @author 이유라 
    * @memo 
    * issue : 정지버튼 클릭 시, 동영상정지([0]활용!)
    */

    
    $('.sc-vision .btn.pause').click(function(e){
        e.preventDefault();
        $('.video-box').addClass('active');
        $('.video-box').find('video')[0].pause();//[0]으로 접근해야만음악이나 영상 모두 컨트롤 할 수 잇음
    });
    
    $('.sc-vision .btn.play').click(function(e){
        e.preventDefault();
        $('.video-box').removeClass('active');
        $('.video-box').find('video')[0].play();//[0]으로 접근해야만음악이나 영상 모두 컨트롤 할 수 잇음
    });





    /** gsap
    * 브랜드 파트너 스크롤 슬라이드
    * @version 1.0.0
    * @since 2022-05-30
    * @author 이유라 
    * @memo 
    */
    gsap.fromTo('.partner-wrap .partner-item',15,{

    },{
        scrollTrigger:{
            trigger:"partner-wrap",//.(클라스 .)없어도됨
            start:"0% 80%",
            end:"100% 0%",
            // markers:true,

        },
        duration: 1,
    })


  
    partnerMotion = gsap.to('.partner-wrap .inner',15,{
        xPercent:-50,
        repeat : -1,
        ease:"none",
        paused:true,
    })

    partnerMotion.play() 

    $('.partner-wrap').hover(function(){
        partnerMotion.pause();
    },function(){
        partnerMotion.play();
    })
    


   
    

}) //end






