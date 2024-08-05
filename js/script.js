
document.addEventListener(`DOMContentLoaded`, function (){
  //AOS
  AOS.init();
  
  //배너스와이퍼
  var swiper = new Swiper(".firstSwiper", {
    loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
       autoplay: {
        delay: 1500,
        speed: 1000,
       }
  });

  // 메인메뉴에 마우스 올리면 서브메뉴 활성화(클래스명 active)
  const submenuTab = document.querySelectorAll(`.header_area`);
  const submenuBox = document.querySelector(`.sub_menu_box`);

  for (const li of submenuTab){
     li.addEventListener(`mouseenter`, function(){
      submenuBox.classList.add(`active`);

      const subMenu = document.querySelectorAll(`.sub_menu`);

      for (const tabContent of subMenu){
        tabContent.classList.add(`active`);
      }
     });
  }

  submenuBox.addEventListener(`mouseleave`, function (){
    this.classList.remove(`active`);
  });


  //sec3 body에 bg 색상 변경(스크롤이벤트 offset 값 활용)
  const sec3 = document.querySelector(`.sec_3`);
  const sec4 = document.querySelector(`.sec_4`);

  window.addEventListener(`scroll`, () => {
    const sec3Offset = sec3.offsetTop - 700;
    const sec4Offset = sec4.offsetTop - 700;

    const scrollTop = window.scrollY;
    const bodyBg = document.querySelector(`body`);

    if (scrollTop > sec3Offset && scrollTop < sec4Offset){
      bodyBg.classList.add(`bg`);
    } else {
      bodyBg.classList.remove(`bg`);
    }
  });


  //상단이동버튼
  //300px 이상일때 top_btn 보여지게 (클래스명scroll)/ 클릭시 최상단으로 이동
  const topBtn = document.querySelector(`.top_btn`);

  window.addEventListener(`scroll`, function (){
    const scrollTop = window.scrollY;

    if (scrollTop >= 300) {
      topBtn.classList.add(`scroll`);
    } else {
      topBtn.classList.remove(`scroll`);
    }
  });

  topBtn.addEventListener(`click`, () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`
    });
  });

  //작은 그리드에서 햄버거 버튼 클릭하면 메인메뉴 출력
  const menuBtn = document.querySelector(`#hamburger`);
  const mainMenu  = document.querySelector(`.main_menu`);

  menuBtn.addEventListener(`click`, function () {
    this.classList.toggle(`active`);

    const hasClass = this.classList.contains(`active`);

    if(hasClass){
      mainMenu.classList.add(`active`);
    } else {
      mainMenu.classList.remove(`active`);
    }
  });


    // //AOS
    // AOS.init();

   //sec1에 width760px이하 aos없애기
   function aosInit() {
    const ww = window.innerWidth;

    if (ww >= 760) {
      // AOS 초기화
      AOS.init();
    } else {
      // 필요한 경우, 작은 화면에 대한 AOS 초기화 해제 또는 다른 동작 추가
      AOS.refreshHard();  // 또는 AOS의 초기화를 해제하는 코드가 필요할 경우 추가
    }
  }

  aosInit();

  window.addEventListener('resize', function() {
      aosInit();
  });

});
