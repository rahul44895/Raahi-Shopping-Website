window.onscroll = function () {
let element=document.getElementById('header_bar');
  if(this.scrollY>470){
    console.log(this.scrollY);
    element.style.position="fixed";
    element.style.animation= "header_anime 1.5s 1";
    

  }
  else{
    element.style.position="";
    element.style.animation= "";
  }
};
