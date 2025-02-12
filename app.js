console.log("JavaScript APP.JS loaded successfully");

var modal_Dir = document.getElementsByClassName("modal");

var btn_Contact = document.getElementById("Contact_Button");
var btn_Master = document.getElementsByClassName("Modal_Button");

var close = document.getElementsByClassName("close");

var plaque = document.getElementById("ftright_plaque");
var footer = document.getElementById("SectionFooter");

ftright_plaque.onclick = function() {
   ftright_plaque.style.cssText = "animation: flip 2s; transition: all 1s; box-shadow: inset 0vw 1.6vw red; background-color: gray; color: white;";
   SectionFooter.style.cssText = "background-color: black; transition: all 1s; color: white;";
   };