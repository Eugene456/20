'use strict';

import carousel from "../script/sliderCarousel";
import valid from "../script/plugins/validator/validator";
import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import navProg from "./modules/navProg";
import tabs from "./modules/tabs";
import changePhoto from "./modules/changePhoto";
import calc from "./modules/calc";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";    

    

    valid();
    //Timer
    countTimer();

    //Меню
    toggleMenu();

    //popup
    togglePopUp();

    navProg();
    //табы
    tabs();

    //изменение картинки по дата атрибуту
    changePhoto();

    //Калькулятор
    calc(100);

    // Слайдер
    slider();

    carousel();
    //send-ajax-form
    sendForm('form1');
    sendForm('form2');
    sendForm('form3');