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

sortBtn.addEventListener("click", ()=>{
  career.classList.toggle("top");
  timelineBtnChange();
});

function timelineBtnChange() {
  if (timeline.classList.contains("top")) {
    sortBtn.classList.replace("bx-vertical-bottom", "bx-vertical-top");
  } else {
    sortBtn.classList.replace("bx-vertical-top", "bx-vertical-bottom");
  }
}