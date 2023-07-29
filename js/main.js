let counter = document.querySelector('#counter');
let decrease = document.querySelector('#decrease');
let reset = document.querySelector('#reset');
let increase = document.querySelector('#increase');

let currentCounter =Number(counter.innerHTML);

increase.addEventListener('click',()=>{
currentCounter+=1;
counter.innerHTML=currentCounter;
});

decrease.addEventListener('click',()=>{
currentCounter-=1;
counter.innerHTML=currentCounter;
});

reset.addEventListener('click',()=>{
currentCounter=0;
counter.innerHTML=currentCounter;
})
