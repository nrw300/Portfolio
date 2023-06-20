sidebar = document.querySelector(".sidebar");
closeBtn = document.querySelector("#btn");

timeline = document.querySelector(".timeline-body");
sortBtn = document.querySelector("#sort_btn");



closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the icons class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the icons class
 }
}

// preload images:
var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("images/logo.png", "images/IMG.png", "images/njord2.png", "images/njord.jpg");