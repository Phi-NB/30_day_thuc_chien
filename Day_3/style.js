var btnShow = document.querySelector('.btn-show-modal')
var modal = document.querySelector('.modal')
var inner = document.querySelector('.inner')
var iconClose = document.querySelector('.modal__header i')
var btnClose = document.querySelector('.modal__footer button')

function toggleModal(e){
    console.log(e.target)
    modal.classList.toggle('hide')
}
function toggleInner(e){
    console.log(e.target)
    inner.classList.toggle('hide')
}

btnShow.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
inner.addEventListener('click', toggleModal)
btnShow.addEventListener('click', toggleInner)
iconClose.addEventListener('click', toggleInner)
btnClose.addEventListener('click', toggleInner)
inner.addEventListener('click', toggleInner)


