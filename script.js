function gg(){
    let maxWidth = document.querySelectorAll(".capital")[0].offsetWidth - document.querySelectorAll(".no")[0].offsetWidth;
    let maxHeight = document.querySelectorAll(".capital")[0].offsetHeight - document.querySelectorAll(".no")[0].offsetHeight;
    document.querySelectorAll(".no")[0].style.right =  Math.random() * maxWidth + "px";
    document.querySelectorAll(".no")[0].style.top =  Math.random() * maxHeight + "px";
    // console.log(max)
    // return Math.random() * (max - min) + min;
}
function win(){
    document.querySelectorAll(".block1")[0].style.display = "none";
    document.querySelectorAll(".block2")[0].style.display = "block";
}