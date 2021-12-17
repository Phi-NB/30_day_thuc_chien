var images = document.querySelectorAll(".image img")
var gallery = document.querySelector(".gallery")
var galleryImg = document.querySelector(".gallery__inner img")
var close = document.querySelector(".gallery .close")
var prev = document.querySelector(".gallery .prev")
var right = document.querySelector(".gallery .right")

function galleryShow() {
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
    if(currentIndex == 0)
    {
        prev.classList.add('hide')
    }
    else{
        prev.classList.remove('hide')
    }
    if(currentIndex == images.length - 1){
        right.classList.add('hide')
    }
    else{
        right.classList.remove('hide')
    }
}

var currentIndex = 0;
images.forEach((item, index) => {
    item.addEventListener("click", () =>{
        currentIndex = index
        galleryShow();
    })
})

close.addEventListener("click", () =>{
    gallery.classList.remove('show')
})

document.addEventListener("keydown", (e) =>{
    if(e.keyCode == 27)
    {
        gallery.classList.remove('show')
    }
})

prev.addEventListener("click", () =>{
    if(currentIndex > 0)
    {
        currentIndex--
        galleryShow();
    }
})

right.addEventListener("click", () =>{
    if(currentIndex < images.length - 1)
    {
        currentIndex++
        galleryShow();
    }
})