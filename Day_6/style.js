var box = document.querySelector('.box')
var btn = document.querySelector('.btn')
var eKey = document.querySelector('.card.key .card__key')
var eLocation = document.querySelector('.card.location .card__key')
var eWhich = document.querySelector('.card.which .card__key')
var eCode = document.querySelector('.card.code .card__key')
var result = document.querySelector('.result')
document.addEventListener('keydown', (e)=>{
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    result.innerHTML = e.which
    box.classList.remove('hide')
    btn.classList.add('hide')
})