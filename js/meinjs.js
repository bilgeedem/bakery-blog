

function alertbtn(){


   
    document.getElementById("Thanks").innerHTML= "thank you for registration";


}


function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }




function submit(choice){


    if(choice=="topnav"){
        console.log("topnav");
        document.getElementById("where").href="#top";
      
    }else{
        console.log("all recipes");
        document.getElementById("where").href="#all";
       
        
    }




}



function addItem() {
 
    let textEingabe= document.getElementById("eingabe").value;
    
   document.getElementById("list").innerHTML += " &#8618; " +textEingabe +".<br>";
}




function deleteList(){

    document.getElementById("list").innerHTML = " ";


}




function radiobtn(){

      
    if (document.getElementById("r").checked){
        console.log("r");

        document.getElementById("fav").innerHTML="Thank you for your choice : rasbperry tartlets";
        
   }
   else if (document.getElementById("c").checked){
    console.log("c");
    document.getElementById("fav").innerHTML="Thank you for your choice : chocolate rasbperry cake";

   } else if (document.getElementById("b").checked){
    console.log("b");
    document.getElementById("fav").innerHTML="Thank you for your choice : blueberry cheesecake";
   }
   
   
       
   }




 

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



let slideIndex = 1;
showSlides(slideIndex);



function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}