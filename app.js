const showBtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const overLay = document.getElementById('overlay')


showBtn.addEventListener('click', ()=> {
   modal.classList.remove('hidden')
   overLay.classList.remove('hidden')
}) 
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden')
  overLay.classList.add('hidden')
})
overLay.addEventListener('click', () => {
  modal.classList.add('hidden')
  overLay.classList.add('hidden')
})

document.addEventListener('keydown', (e) => {
  if(e.key == 'Escape'){
    modal.classList.add('hidden')
    overLay.classList.add('hidden')
  }
})