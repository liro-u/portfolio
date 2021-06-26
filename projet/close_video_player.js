var close_back=document.getElementsByClassName('popup_box')[0];
var close_button=document.getElementsByClassName('close_popup_button')[0];
var video_list=document.getElementsByClassName('popup_video');
var num_video_active=0;

var img_video_1=document.getElementsByClassName('img_video_slider')[0];

function show(num){
    num_video_active=num;
    close_back.style.display="block";
    video_list[num_video_active].style.display="block";
}
img_video_1.addEventListener('click',function(){show(0)});

function close(){
    close_back.style.display="none";
    video_list[num_video_active].style.display="none";
}
close_back.addEventListener('click',close);
close_button.addEventListener('click',close);