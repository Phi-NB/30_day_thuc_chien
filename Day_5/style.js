// var btn_open = document.querySelector('.search-box__btn')
// var search_box = document.querySelector('.search-box')

// btn_open.addEventListener('click', (e) =>{
//     console.log(e.target)
//     search_box.classList.toggle('open')
// })

var btn_search = document.querySelector('.search-box__btn')

btn_search.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus();
})