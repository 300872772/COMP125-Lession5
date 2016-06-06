/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression

/**
 * FileName: app.js
 * 
 * @author Mamun
 * @date June 1, 2016
 * 
 * Student ID: 300818557
 * website: my azure website link
 * 
 *@description This file is the java script file for the web.
 */
(function(){
    "use strict";
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    
    // define your paragraphs array;
    var paragraphs = [];
    
    //create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    
    if (sendButton){
    //event listener
    sendButton.addEventListener("click",sendButtonClick);
    }
    
    function sendButtonClick(event){
        
        //event.preventDefault(); 
        console.log("clicked");
    }
    
    //create a ref to firstName field
    var firstName = document.getElementById("firstName");
    //firstName.value = "";
    
    var contactForm = document.getElementById("contactForm");
    
    if (contactForm){
    contactForm.addEventListener("submit",function(event){
        
        event.preventDefault();
        console.log("submitted");
       showFormInput();
        firstName.value="";
    });}
    
    /**
     * this function shows input from each form field on the console
     * @method showFormInput
     * @return {void}
     * 
     */
    function showFormInput(){
        
        console.log("********************");
         console.log(firstName.value);
    }

    
    
    
    
    
    
    // data for my pages
    paragraphs[0] = "<span class='firstSentence'>This is my first paragraph</span>. It is only visible on the first page. This next sentence is to prove that this really works!!!Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.";
    paragraphs[1] = "<span class='firstSentence'>This is my first paragraph</span>. It is only visible on the first page. This next sentence is to prove that this really works!!!Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.3";
    paragraphs[2] = "<span class='firstSentence'>This is my first paragraph</span>. It is only visible on the first page. This next sentence is to prove that this really works!!!Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.";
    
    // second way to define an array
    //var paragraphs = new Array();
    
    // check to see if paragraph one exists
    var paragraphElimentLength = paragraphElements.length-1;
    
    
    //if paragraphs exists 
    for (var index = paragraphElimentLength; index >=0; index--) {
        
       /* console.log(index);
         console.log(paragraphElements[index]);
         console.debug("this is a debug");
         console.error("this is an error");
         console.info("this is an info");
         console.warn("this is a warning");*/
         console.assert(index  < paragraphElements.length,"index out of bounce");
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    
    
})();