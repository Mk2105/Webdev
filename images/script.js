const left = document.querySelector('.left');
const right= document.querySelector('.right');
const slider = document.querySelector('.slider');
const images=document.querySelectorAll('.img');

let slidenumber = 1;
const length=images.length;


right.addEventListener('click',()=>{
    if(slidenumber < length){
    slider.style.transform = `translateX(-${slidenumber*800}px)`;
        slidenumber++;
    }
    else{
        slider.style.transform = `translateX(0px)`;
        slidenumber=1;
    }
})

left.addEventListener('click',()=>{
    if(slidenumber > 1){
    slider.style.transform = `translateX(-${(slidenumber-2)*800}px)`;
        slidenumber--;
    }
    else{
        slider.style.transform = `translateX(-${(length-1)*800}px)`;
        slidenumber=length;
    }

})
