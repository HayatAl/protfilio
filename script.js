let first =document.getElementById("first");
let secend =document.getElementById("secend");
let third=document.getElementById("third");
let img1=document.getElementById("img-1");
let img2=document.getElementById("img-2")
let img3=document.getElementById("img-3")
console.log(first);


first.addEventListener("click", ()=>{
    block(img1);

})
secend.addEventListener("click",()=>{
    block(img2);
})

third.addEventListener("click",()=>{
    block(img3);
})




let block = (img)=>{
    let currentDisplay = window.getComputedStyle(img).display;
    if (currentDisplay == "block") {
        img.style.display = "none";
    } else {
        img.style.display = "block";
    }

}



