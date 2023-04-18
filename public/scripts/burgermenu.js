const burger = document.querySelector('.burgericon')
const burgerbar = document.querySelector('.burgerbar')

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    burgerbar.classList.toggle('active')
})

burgerbar.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    burgerbar.classList.toggle('active')
})

burgerbar.addEventListener('touchmove', ()=>{
    burger.classList.toggle('active')
    burgerbar.classList.toggle('active')
})