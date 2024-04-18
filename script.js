const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
// const main=document.querySelector('.main');
var count=0;
    bar.addEventListener('click', () => {
        if(count==0){
            nav.classList.add('active');
            console.log('ramesh')
            count=1;
        }
        
    })
    document.addEventListener('click', (event) => {

        if(count==1 && event.target!=bar && event.target!=nav){
            console.log('hello');
            nav.classList.remove('active');
            count=0;
            
        }
    })