const list = document.querySelector('.list');
const profile = document.querySelector('.profile');

profile.addEventListener('click',(e)=>{
    list.classList.toggle('on');
})