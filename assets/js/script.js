function link(){
    open('https://www.youtube.com/watch?v=2nsT9uQPIrk&t=1s')
};

function info(){
    open('https://peaky-blinders.fandom.com/wiki/Peaky_Blinders_Wiki')
};

const assista = document.getElementById('assista');
const infor = document.getElementById('info');

infor.addEventListener('click', info);
assista.addEventListener('click', link);


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

