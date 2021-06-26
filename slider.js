list_slide=document.getElementsByClassName("slide");
var nb_slide=list_slide.length;
i=0;
var time= 5000;
var percent=0;
var nb_percent=100/nb_slide;
var slides=document.getElementsByClassName('slides')[0];
var left_arrow=document.getElementsByClassName('button_slider_left')[0];
var right_arrow=document.getElementsByClassName('button_slider_right')[0];

slides.style.width=nb_slide*100+"%";
for(j=0; j<list_slide.length;j++){
    list_slide[j].style.width=nb_percent+"%";
}

function next_img_slider(){
    if(i<nb_slide-1){
        percent+=nb_percent;
        i++;
    }else{
        percent=0;
        i=0;
    }
    slides.style.transform="translate3d(-"+percent+"%, 0, 0)";
    reset_loop_slider_auto();
}
right_arrow.addEventListener('click',next_img_slider);

function prev_img_slider(){
    if(i>0){
        percent-=nb_percent;
        i--;
    }else{
        percent=100-nb_percent;
        i=nb_slide-1;
    }
    slides.style.transform="translate3d(-"+percent+"%, 0, 0)";
    reset_loop_slider_auto();
}
left_arrow.addEventListener('click',prev_img_slider);

function reset_loop_slider_auto(){
    clearInterval(itvImg);
    itvImg=setInterval(next_img_slider, time);
}

document.addEventListener("DOMContentLoaded",
function(event){
    itvImg=setInterval(next_img_slider, time)
});