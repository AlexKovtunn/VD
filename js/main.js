function updateFileName() {
  console.log('upload');

  const fileInput = document.getElementById('create-ticket__file');
  const fileName = document.getElementById('create-ticket__file-name');
  fileName.textContent = "Вы загрузили: " + fileInput.files[0].name;
}


document.addEventListener("DOMContentLoaded", function(event) {
  const selectBtn = document.querySelectorAll('.header__selectbtn');
  const selectedLang = document.querySelectorAll('.header__selectoption');
  const menuLang = document.querySelectorAll('.header__langwrap');


  for(let i = 0; i < selectBtn.length; i++){
    selectBtn[i].addEventListener('click', () => menuLang[i].classList.toggle('active'));

    selectedLang[i].addEventListener('click', function(){
      let swapLang = selectedLang[i].innerHTML;
      let firstLang = selectBtn[i].innerHTML;
  
      selectBtn[i].innerHTML = swapLang;
      selectedLang[i].innerHTML = firstLang;
      menuLang[i].classList.toggle('active');
    })
  }

  const selectBtnMb = document.querySelector('.header__selectbtn-mb');
  const selectedLangMb = document.querySelector('.header__selectoption-mb');
  const menuLangMb = document.querySelector('.header__langwrap-mb');

  selectBtnMb.addEventListener('click', () => menuLangMb.classList.toggle('active'));

  selectedLangMb.addEventListener('click', function(){
    let swapLang = selectedLangMb.innerHTML;
    let firstLang = selectBtnMb.innerHTML;

    selectBtnMb.innerHTML = swapLang;
    selectedLangMb.innerHTML = firstLang;
    menuLangMb.classList.toggle('active');
  })
  


  const burgerButton = document.querySelector('.header__burger-btn');
  const burgerMenu = document.querySelector('.header__burger');
  const burgerButtonClose = document.querySelector('.header__burger-btn-close');

  const accIcon = document.querySelector('.header__account');
  const headerMb = document.querySelector('.header__content-mobile');
  const socialLinks = document.querySelector('.header__links');

  const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.hero__swiper-button-next',
      prevEl: '.hero__swiper-button-prev',
    },
  
  });

  const swiper2 = new Swiper('.dignity__swiper', {
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    grabCursor: 'true',
    breakpoints: {
      300: {
        slidesPerView: 1.5,
      },
      600: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.dignity__swiper-button-next',
      prevEl: '.dignity__swiper-button-prev',
    },
  });

  const swiper3 = new Swiper('.tariff__swiper', {
    loop: true,
    spaceBetween: 30,
    centerSlide: 'true',
    grabCursor: 'true',
    breakpoints: {
      300: {
        slidesPerView: 1.5,
      },
      600: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.tariff__swiper-button-next',
      prevEl: '.tariff__swiper-button-prev',
    },
  });

  
  const swiper4 = new Swiper('.comments__swiper', {
    loop: true,
    spaceBetween: 28,
    centerSlide: 'true',
    grabCursor: 'true',
    breakpoints: {
      300: {
        slidesPerView: 1.1,
      },
      600: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.review__swiper-button-next',
      prevEl: '.review__swiper-button-prev',
    },
  });

  
  const swiper5 = new Swiper('.news__swiper', {
    loop: true,
    spaceBetween: 34.5,
    centerSlide: 'true',
    grabCursor: 'true',
    breakpoints: {
      300: {
        slidesPerView: 1.1,
      },
      600: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.review__swiper-button-next',
      prevEl: '.review__swiper-button-prev',
    },
  });

  const swiper6 = new Swiper('.footer__bottom-list', {
    loop: true,
    spaceBetween: 20,
    centerSlide: 'true',
    grabCursor: 'true',
    breakpoints: {
      300: {
        slidesPerView: 4,
      },
      600: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 8,
      }
    },
  });

  const swiper7 = new Swiper('.team__swiper', {
    loop: true,
    spaceBetween: 40,
    centerSlide: 'true',
    grabCursor: 'true',
    slidesPerView: 4,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.team__swiper-button-next',
      prevEl: '.team__swiper-button-prev',
    },
  });

  const swiper8 = new Swiper('.cabinet__swiper', {
    centerSlide: 'true',
    grabCursor: 'true',
    slidesPerView: 'auto',
  });
  

  var tariffCheckbox = document.querySelectorAll(".tariff__card-input");
  var tariffSDD = document.querySelectorAll(".tariff__card-name1");
  var tariffNVMe = document.querySelectorAll(".tariff__card-name2");

  for( let i = 0; i < tariffCheckbox.length; i++){
    tariffCheckbox[i].addEventListener('change', function() {
      if (this.checked) {
        tariffSDD[i].style.fontWeight = 400;
        tariffNVMe[i].style.fontWeight = 600;

        tariffSDD[i].style.color = '#A2A2A2';
        tariffNVMe[i].style.color = '#303030';
      } else {
        tariffSDD[i].style.fontWeight = 600;
        tariffNVMe[i].style.fontWeight = 400;

        tariffSDD[i].style.color = '#303030';
        tariffNVMe[i].style.color = '#A2A2A2';
      }
    })
  }

  const topicQuestion = document.querySelectorAll(".answers__name-wrap");
  const question = document.querySelectorAll(".answers__question");

  for(let i = 0; i < topicQuestion.length; i++){
    topicQuestion[i].addEventListener('click', function() {
      topicQuestion[i].classList.toggle('active');
    })
  }

  for(let i = 0;i < question.length; i++){
    question[i].addEventListener('click', function(){
      question[i].classList.toggle('active');
    })
  }

  const mbMenuLink = document.querySelectorAll(".header__burger-link");

  for(let i = 0; i < mbMenuLink.length; i++){
    mbMenuLink[i].addEventListener('click', function() {
      mbMenuLink[i].classList.toggle('active');
    })
  }

  const cabinetItem = document.querySelectorAll(".cabinet__item");
  const cabinetContentSections = document.querySelectorAll(".cabinet-section");

  for(let i = 0; i < cabinetItem.length; i++){
    cabinetItem[i].addEventListener('click', function(){
      let cabinetItemActive = document.querySelector(".cabinet__item-active");
      cabinetItemActive.classList.remove('cabinet__item-active');

      cabinetItem[i].classList.add('cabinet__item-active');

      const targetIdOfNav = cabinetItem[i].getAttribute('data-target');

      cabinetContentSections.forEach(section => {
        section.style.display = 'none';
      })

      const targetCabinetContentSection = document.querySelector(`#${targetIdOfNav}`);
      targetCabinetContentSection.style.display = 'block';

    })
  }

  const cabinetButtonOpenAll = document.querySelectorAll(".table__row-parament--all");
  const cabinetColumnParametr = document.querySelectorAll('.table__row-parametr');

  for(let i = 0; i < cabinetButtonOpenAll.length; i++){
    cabinetButtonOpenAll[i].addEventListener('click', function() {
      cabinetColumnParametr[i].classList.toggle('active');
      cabinetButtonOpenAll[i].classList.toggle('table__row-parament--alloff');
    })
  }

  const rowsTicketTable = document.querySelectorAll('.tickettable__row-general');
  const headerRowTicketTable = document.querySelector('.tickettable__header');

  const rowsTicketTable768 = document.querySelectorAll('.tickettable__row-general768');
  const headerRowTicketTable768 = document.querySelector('.tickettable__header-768');

  const addTicketBtn = document.querySelector('.buttons__add-ticket');
  const backTicketBtn = document.querySelector('.buttons__back-ticket');
  
  for(let i = 0; i < rowsTicketTable.length; i++){
    const buttonMoreTicket = rowsTicketTable[i].querySelector('.tickettable__row-more');
    const moreTicket = rowsTicketTable[i].querySelector('.moreticket');
    const nameTicket = rowsTicketTable[i].querySelector('.tickettable__row-name');
    const controlTicketGroupOne = rowsTicketTable[i].querySelector('.tickettable__row-control-basic');
    const controlTicketGroupTwo = rowsTicketTable[i].querySelector('.tickettable__row-control-active');

    const buttonMoreTicket768 = rowsTicketTable768[i].querySelector('.tickettable__row-more');
    const moreTicket768 = rowsTicketTable768[i].querySelector('.moreticket');
    const nameTicket768 = rowsTicketTable768[i].querySelector('.tickettable__row-name');
    const controlTicketGroupOne768 = rowsTicketTable768[i].querySelector('.tickettable__row-control-basic');
    const controlTicketGroupTwo768 = rowsTicketTable768[i].querySelector('.tickettable__row-control-active');
    
    const alertTicketTime = document.querySelector('.tickettable__alert');

    if (buttonMoreTicket !== null) {
      buttonMoreTicket.addEventListener('click', function(){
        rowsTicketTable.forEach(rowTicketTable => rowTicketTable.style.display = 'none');
       
        rowsTicketTable768.forEach(rowTicketTable => rowTicketTable.style.display = 'none');

        rowsTicketTable[i].style.display = 'flex';
        headerRowTicketTable.style.display = 'flex';

        rowsTicketTable768[i].style.display = 'flex';
        headerRowTicketTable768.style.display = 'flex';

        
        addTicketBtn.classList.toggle('none');
        backTicketBtn.classList.toggle('none');

        buttonMoreTicket.classList.toggle('none');

        moreTicket.classList.toggle('none');

        nameTicket.style.fontWeight = '600';

        controlTicketGroupOne.classList.toggle('none');
        controlTicketGroupTwo.classList.toggle('none');

        buttonMoreTicket768.classList.toggle('none');

        moreTicket768.classList.toggle('none');

        nameTicket768.style.fontWeight = '600';

        controlTicketGroupOne768.classList.toggle('none');
        controlTicketGroupTwo768.classList.toggle('none');

        alertTicketTime.classList.toggle('none');
      })
    }
    if(buttonMoreTicket !== null){
      backTicketBtn.addEventListener('click', function(){
        rowsTicketTable.forEach(rowTicketTable => rowTicketTable.style.display = 'flex');
        rowsTicketTable768.forEach(rowTicketTable => rowTicketTable.style.display = 'flex');
  
        addTicketBtn.classList.remove('none');
        backTicketBtn.classList.add('none');
  
        buttonMoreTicket.classList.remove('none');   
  
        moreTicket.classList.add('none');
  
        nameTicket.style.fontWeight = '400';
  
        controlTicketGroupOne.classList.remove('none');
        controlTicketGroupTwo.classList.add('none');

        buttonMoreTicket768.classList.remove('none');   
  
        moreTicket768.classList.add('none');
  
        nameTicket768.style.fontWeight = '400';
  
        controlTicketGroupOne768.classList.remove('none');
        controlTicketGroupTwo768.classList.add('none');
  
        alertTicketTime.classList.add('none');
      })
    }
  }


  
  for(let i = 0; i < rowsTicketTable768.length; i++){
    const buttonMoreTicket768 = rowsTicketTable768[i].querySelector('.tickettable__row-more');
    const moreTicket768 = rowsTicketTable768[i].querySelector('.moreticket');
    const nameTicket768 = rowsTicketTable768[i].querySelector('.tickettable__row-name');
    const controlTicketGroupOne768 = rowsTicketTable768[i].querySelector('.tickettable__row-control-basic');
    const controlTicketGroupTwo768 = rowsTicketTable768[i].querySelector('.tickettable__row-control-active');
    const alertTicketTime = document.querySelector('.tickettable__alert');

    const buttonMoreTicket = rowsTicketTable[i].querySelector('.tickettable__row-more');
    const moreTicket = rowsTicketTable[i].querySelector('.moreticket');
    const nameTicket = rowsTicketTable[i].querySelector('.tickettable__row-name');
    const controlTicketGroupOne = rowsTicketTable[i].querySelector('.tickettable__row-control-basic');
    const controlTicketGroupTwo = rowsTicketTable[i].querySelector('.tickettable__row-control-active');

    if (buttonMoreTicket768 !== null) {
      buttonMoreTicket768.addEventListener('click', function(){
        rowsTicketTable.forEach(rowTicketTable => rowTicketTable.style.display = 'none');
       
        rowsTicketTable768.forEach(rowTicketTable => rowTicketTable.style.display = 'none');

        rowsTicketTable[i].style.display = 'flex';
        headerRowTicketTable.style.display = 'flex';

        rowsTicketTable768[i].style.display = 'flex';
        headerRowTicketTable768.style.display = 'flex';

        
        addTicketBtn.classList.toggle('none');
        backTicketBtn.classList.toggle('none');

        buttonMoreTicket.classList.toggle('none');

        moreTicket.classList.toggle('none');

        nameTicket.style.fontWeight = '600';

        controlTicketGroupOne.classList.toggle('none');
        controlTicketGroupTwo.classList.toggle('none');

        buttonMoreTicket768.classList.toggle('none');

        moreTicket768.classList.toggle('none');

        nameTicket768.style.fontWeight = '600';

        controlTicketGroupOne768.classList.toggle('none');
        controlTicketGroupTwo768.classList.toggle('none');

        alertTicketTime.classList.toggle('none');
      })
    }
    if(buttonMoreTicket768 !== null){
      backTicketBtn.addEventListener('click', function(){
        rowsTicketTable.forEach(rowTicketTable => rowTicketTable.style.display = 'flex');
        rowsTicketTable768.forEach(rowTicketTable => rowTicketTable.style.display = 'flex');
  
        addTicketBtn.classList.remove('none');
        backTicketBtn.classList.add('none');
  
        buttonMoreTicket.classList.remove('none');   
  
        moreTicket.classList.add('none');
  
        nameTicket.style.fontWeight = '400';
  
        controlTicketGroupOne.classList.remove('none');
        controlTicketGroupTwo.classList.add('none');

        buttonMoreTicket768.classList.remove('none');   
  
        moreTicket768.classList.add('none');
  
        nameTicket768.style.fontWeight = '400';
  
        controlTicketGroupOne768.classList.remove('none');
        controlTicketGroupTwo768.classList.add('none');
  
        alertTicketTime.classList.add('none');
      })
    }
  }
  

  const textareaCabinet = document.querySelectorAll('.addmessage__input');

  textareaCabinet.forEach(textareaCabinet =>{
    textareaCabinet.addEventListener('input', function(){
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });
  })
  
  const textareaTopicSupport = document.querySelector('.create-ticket__topic');

  if (textareaTopicSupport !== null){
    textareaTopicSupport.addEventListener('input', function(){
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });
  }

  const createTicketButton = document.querySelector('.buttons__add-ticket');
  const ticketsTable = document.querySelector('.tickettable__container');
  const ticketsTable768 = document.querySelector('.tickettable__container-768');
  const createTicket = document.querySelector('.create-ticket');

  if (createTicketButton !== null){
    createTicketButton.addEventListener('click', function(){
      createTicketButton.classList.toggle('none');
      ticketsTable.classList.toggle('none');
      ticketsTable768.classList.toggle('none');
      createTicket.classList.toggle('none');
    })
  }

  const cancelCreateTicket = document.querySelector('.create-ticket__cancel');

  if (cancelCreateTicket !== null){
    cancelCreateTicket.addEventListener('click', function(){
      createTicketButton.classList.toggle('none');
      ticketsTable.classList.toggle('none');
      createTicket.classList.toggle('none');
      ticketsTable768.classList.toggle('none');
    })
  }

  const modalWindowCommon = document.querySelector('.modal-window');
  const serviceRebootBtn = document.querySelectorAll('.table__row-control--reboot');
  const blackOverlay = document.querySelector('.black-overlay');

  for(let i = 0; i < serviceRebootBtn.length; i++){
    serviceRebootBtn[i].addEventListener('click', function() {
      const modalWindow = document.querySelector('.modal-reboot');
      
      modalWindow.classList.toggle('none');
      blackOverlay.classList.toggle('none');
      modalWindowCommon.classList.toggle('none');

      document.body.classList.toggle('body__overflow');
    })
  }

  const serviceReinstallBtn = document.querySelectorAll('.table__row-control--reinstall');

  for(let i = 0; i < serviceReinstallBtn.length; i++){
    serviceReinstallBtn[i].addEventListener('click', function() {
      const modalWindow = document.querySelector('.modal-reinstall');
      
      modalWindow.classList.toggle('none');
      blackOverlay.classList.toggle('none');
      modalWindowCommon.classList.toggle('none');

      document.body.classList.toggle('body__overflow');
    })
  }

  const registrationFormBtn = document.querySelector('.header__registration');

  registrationFormBtn.addEventListener('click', function() {
    const modalWindow = document.querySelector('.modal-registration');
      
    if (modalWindow !== null){
      modalWindow.classList.toggle('none');
      blackOverlay.classList.toggle('none');
      modalWindowCommon.classList.toggle('none');
  
      document.body.classList.toggle('body__overflow');
    }
  })

  const entryFormBtn = document.querySelector('.header__exit');

  entryFormBtn.addEventListener('click', function() {
    const modalWindow = document.querySelector('.modal-entry');
      
    if (modalWindow !== null){
      modalWindow.classList.toggle('none');
      blackOverlay.classList.toggle('none');
      modalWindowCommon.classList.toggle('none');
  
      document.body.classList.toggle('body__overflow');
    }
  })

  const closeModalWindowBtn = document.querySelectorAll('.modal-window__close');
  const allModalWindows = document.querySelectorAll('.modal');

  for(let j = 0; j < closeModalWindowBtn.length; j++){
    closeModalWindowBtn[j].addEventListener('click', function(){
      for(let k = 0; k < allModalWindows.length; k++){
        if (!allModalWindows[k].classList.contains('none')){
          allModalWindows[k].classList.toggle('none');
          blackOverlay.classList.toggle('none');
          modalWindowCommon.classList.toggle('none');
    
          document.body.classList.toggle('body__overflow');
        }
      }
    })
  }

  const nameRegInput = document.querySelectorAll('.registration-base__name');
  const invalidInputName = document.querySelectorAll('.registration-base__name-alert');

  const emailRegInput = document.querySelectorAll('.registration-base__mail');
  const invalidInputEmail = document.querySelectorAll('.registration-base__mail-alert');

  const passRegInput = document.querySelectorAll('.registration-base__password');
  const invalidInputPass = document.querySelectorAll('.registration-base__pass-alert');

  const telRegInput = document.querySelectorAll('.registration-base__tel');
  const invalidInputTel = document.querySelectorAll('.registration-base__tel-alert');

  const checkRegInput = document.querySelectorAll('.registration-base__checkbox');
  const invalidInputCheck = document.querySelectorAll('.registration-base__checkbox-alert');

  const alertEntryError = document.querySelectorAll('.entry-base__alert');
  const nameForEntry = document.querySelectorAll('.entry-base__name');
  const passwordForEntry = document.querySelectorAll('.entry-base__password');

  const entryForm = document.querySelectorAll('.entry-base__form');

  for(let i = 0; i<nameRegInput.length; i++){
    if (nameRegInput[i] !== null){
      nameRegInput[i].addEventListener('invalid', function(event){
        event.preventDefault();
        nameRegInput[i].style.borderColor = '#DC2E3F';
        invalidInputName[i].classList.remove('none');
      })
      nameRegInput[i].addEventListener('input', function(event){
        event.preventDefault();
        if(nameRegInput[i].validity.valid){
          nameRegInput[i].style.borderColor = '#B3B3B3';
          invalidInputName[i].classList.add('none');
        }
      })
    }

    if (emailRegInput[i] !== null){
      emailRegInput[i].addEventListener('invalid', function(event){
        event.preventDefault();
        emailRegInput[i].style.borderColor = '#DC2E3F';
        invalidInputEmail[i].classList.remove('none');
      })
      emailRegInput[i].addEventListener('input', function(event){
        event.preventDefault();
        if (emailRegInput[i].validity.valid){
          emailRegInput[i].style.borderColor = '#B3B3B3';
          invalidInputEmail[i].classList.add('none');
        }
      })
    }

    if (passRegInput[i] !== null){
      passRegInput[i].addEventListener('invalid', function(event){
        event.preventDefault();
        passRegInput[i].style.borderColor = '#DC2E3F';
        invalidInputPass[i].classList.remove('none');
      })
      passRegInput[i].addEventListener('input', function(event){
        event.preventDefault();
        if (passRegInput[i].validity.valid){
          passRegInput[i].style.borderColor = '#B3B3B3';
          invalidInputPass[i].classList.add('none');
        }
      })
    }

    if (telRegInput[i] !== null){
      const maskOptions = { 
        mask: '+{7}(000)000-00-00' 
      }
      IMask(telRegInput[i], maskOptions);
    
      telRegInput[i].addEventListener('invalid', function(event){
        event.preventDefault();
        telRegInput[i].style.borderColor = '#DC2E3F';
        invalidInputTel[i].classList.remove('none');
      })
    
      telRegInput[i].addEventListener('input', function(event){
        event.preventDefault();
        if (telRegInput[i].validity.valid){
          telRegInput[i].style.borderColor = '#B3B3B3';
          invalidInputTel[i].classList.add('none');
        }
      })
    }

    if (checkRegInput[i] !== null){
      checkRegInput[i].addEventListener('invalid', function(event){
        event.preventDefault();
        checkRegInput[i].style.borderColor = '#DC2E3F';
        invalidInputCheck[i].classList.remove('none');
      })
      checkRegInput[i].addEventListener('input', function(event){
        event.preventDefault();
        if (checkRegInput[i].validity.valid){
          checkRegInput[i].style.borderColor = '#B3B3B3';
          invalidInputCheck[i].classList.add('none');
        }
      })
    }

    if (nameForEntry[i] !== null){
      nameForEntry[i].addEventListener('invalid', function(event){
        event.preventDefault();
        if (alertEntryError[i].classList.contains('none')){
          alertEntryError[i].classList.remove('none');
        }
      })
    
      passwordForEntry[i].addEventListener('invalid', function(event){
        event.preventDefault();
        if (alertEntryError[i].classList.contains('none')){
          alertEntryError[i].classList.remove('none');
        }
      })
    }

    entryForm[i].addEventListener('submit', function(){
      localStorage.setItem('isLoggedIn', true);
    })
  }



  const fromEntryToRegistrationBtn = document.querySelector('.entry-base__registration');
  const modalWindowEntry = document.querySelector('.modal-entry');
  const modalWindowRegistration = document.querySelector('.modal-registration');
  const fromRegistrationToEntryBtn = document.querySelector('.registration-base__entry');

  
  if (fromEntryToRegistrationBtn !== null){
    fromEntryToRegistrationBtn.addEventListener('click', function(){  
      console.log('entry');
      modalWindowEntry.classList.toggle('none');
      modalWindowRegistration.classList.toggle('none');
    })
  
    fromRegistrationToEntryBtn.addEventListener('click',function(){
      console.log('reg');
      modalWindowEntry.classList.toggle('none');
      modalWindowRegistration.classList.toggle('none');
    })
  }

  const registrationBurgerBtn = document.querySelector('.header__registration-burger');
  const formsBurgerMenu = document.querySelector('.header__burger-forms');
  const baseInformationBurgerMenu = document.querySelector('.header__burger-base');
  const regFormBurgerMenu = document.querySelector('.header__burger-formreg');

  const backToBurgerMenuBtn = document.querySelector('.header__burger-backtomenu');

  if(registrationBurgerBtn !== null){
    registrationBurgerBtn.addEventListener('click', function(){
      formsBurgerMenu.classList.remove('none');
      baseInformationBurgerMenu.classList.add('none');
      registrationBurgerBtn.classList.add('none');
      regFormBurgerMenu.classList.remove('none');
  
      entryFormBurgerMenu.classList.add('none');
  
      entryBurgerBtn.classList.remove('none');
  
      backToBurgerMenuBtn.classList.remove('none');
    })
  }

  const entryBurgerBtn = document.querySelector('.header__exit-burger');
  const entryFormBurgerMenu = document.querySelector('.header__burger-formentry');

  if (entryBurgerBtn !== null){
    entryBurgerBtn.addEventListener('click', function(){
      formsBurgerMenu.classList.remove('none');
      baseInformationBurgerMenu.classList.add('none');
      entryBurgerBtn.classList.add('none');
      entryFormBurgerMenu.classList.remove('none');
  
      regFormBurgerMenu.classList.add('none');
  
      registrationBurgerBtn.classList.remove('none');
  
      backToBurgerMenuBtn.classList.remove('none');
    })
  }

  if (backToBurgerMenuBtn !== null){
    backToBurgerMenuBtn.addEventListener('click',function(){
      formsBurgerMenu.classList.add('none');
      baseInformationBurgerMenu.classList.remove('none');
      entryBurgerBtn.classList.remove('none');
      registrationBurgerBtn.classList.remove('none');
      entryFormBurgerMenu.classList.add('none');
      regFormBurgerMenu.classList.add('none');
  
      regFormBurgerMenu.classList.add('none');
      entryFormBurgerMenu.classList.add('none');
  
      backToBurgerMenuBtn.classList.add('none');
    })
  }

  const exitFromCabinetBtn = document.querySelector('.cabinet__exit');

  if (exitFromCabinetBtn !==null){
    exitFromCabinetBtn.addEventListener('click', function(){
      localStorage.setItem('isLoggedIn', false);
      console.log(localStorage);
    })
  }

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const toCabinetAccBtn = document.querySelectorAll('.header__account');
  const headerButtonsContainer = document.querySelector('.header__buttons');

  burgerButton.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    burgerButtonClose.classList.toggle('none');
    burgerButton.classList.toggle('none');

    document.body.classList.toggle('body__overflow');

    menuLangMb.classList.toggle('none');
    if (accIcon !== null){
      accIcon.classList.toggle('none');
    }
    socialLinks.style.display = 'flex';
    headerMb.style.width = '162px';

    for (let i = 0; i < toCabinetAccBtn.length; i++){
      toCabinetAccBtn[i].classList.add('none');
    }
  })

  burgerButtonClose.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    burgerButtonClose.classList.toggle('none');
    burgerButton.classList.toggle('none');

    document.body.classList.toggle('body__overflow');

    menuLangMb.classList.toggle('none');
    if (accIcon !== null){
      accIcon.classList.toggle('none');
    }
    socialLinks.style.display = 'none';

    if (formsBurgerMenu !== null){
      formsBurgerMenu.classList.add('none');
      baseInformationBurgerMenu.classList.remove('none');
      entryBurgerBtn.classList.remove('none');
      registrationBurgerBtn.classList.remove('none');
      entryFormBurgerMenu.classList.add('none');
      regFormBurgerMenu.classList.add('none');
      regFormBurgerMenu.classList.add('none');
      entryFormBurgerMenu.classList.add('none');
      regFormBurgerMenu.classList.add('none');
      entryFormBurgerMenu.classList.add('none');
      backToBurgerMenuBtn.classList.add('none');
    }

    if (document.body.dataset.page === 'cabinet') {
      for (let i = 0; i < toCabinetAccBtn.length; i++){
        toCabinetAccBtn[i].classList.add('none');
      }
      headerMb.style.width = '70px';
    } else{
      if (isLoggedIn == 'true'){
        for (let i = 0; i < toCabinetAccBtn.length; i++){
          toCabinetAccBtn[i].classList.remove('none');
        }
  
        headerMb.style.width = '123px';
      } else{
        for (let i = 0; i < toCabinetAccBtn.length; i++){
          toCabinetAccBtn[i].classList.add('none');
        }
        headerMb.style.width = '70px';
      }
    }
  })

  const btnSectionBurgerMenu = document.querySelector('.header__burger-buttons');
  const contactsSectionBurgerMenu = document.querySelector('.header__burger-contacts');

  if (isLoggedIn === 'true') {
    registrationFormBtn.classList.add('none');
    entryFormBtn.classList.add('none');

    btnSectionBurgerMenu.classList.add('none');

    for (let i = 0; i < toCabinetAccBtn.length; i++){
      toCabinetAccBtn[i].classList.remove('none');
    }

    headerButtonsContainer.style.flex = '0 1 130px'
    contactsSectionBurgerMenu.style.borderBottom = 'unset';
  } else {
    headerButtonsContainer.style.flex = '0 1 378px'

    btnSectionBurgerMenu.classList.remove('none');

    registrationBurgerBtn.classList.remove('none');
    entryBurgerBtn.classList.remove('none');

    for (let i = 0; i < toCabinetAccBtn.length; i++){
      toCabinetAccBtn[i].classList.add('none');
    }
  }

  for (let i = 0; i < toCabinetAccBtn.length; i++){
    if (toCabinetAccBtn[i].classList.contains('none')){
      headerMb.style.width = '70px';
    }
    else {
      headerMb.style.width = '123px';
    }
  }
});
