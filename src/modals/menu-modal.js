const openOrderBtn = document.getElementById('openOrderBtn')
const ordernMenuModal = document.getElementById('orderMenuModal')
const closeOrderMenuBtn= document.getElementById('closeOrderMenuBtn')


// Functia de deschide a modalului

openOrderBtn.addEventListener('click', function(){
    ordernMenuModal.style.display='block';
    closeOrderMenuBtn.style.display='block'
    document.body.classList.add('no-scroll-menu');
})

// Functia de inchidere a modalului 
closeOrderMenuBtn.addEventListener('click', function(){
    ordernMenuModal.style.display='none';
    
})
