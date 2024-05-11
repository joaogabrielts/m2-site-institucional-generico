function handleModal(){
const buttonHeader = document.querySelector(".header__button")
const modal = document.querySelector('.modal')
buttonHeader.addEventListener('click', () => {
modal.showModal()
closeModal()
})

const buttonFraq = document.querySelector(".fraq__button")
const modalFraq = document.querySelector('.modal')
buttonFraq.addEventListener('click', () => {
    modalFraq.showModal()
    closeModal()
    })



}

function closeModal(){
    spanClose = document.querySelector('.material-symbols-outlined')
    const modal = document.querySelector('.modal')

    spanClose.addEventListener('click', () =>{
        modal.close()
    })
}

handleModal()