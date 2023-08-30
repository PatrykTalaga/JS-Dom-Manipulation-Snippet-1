document.querySelector('#mode-switch-L').addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', 'rgba(184, 189, 255, 0.507)');
    document.documentElement.style.setProperty('--footer-backround', 'rgba(134, 142, 250, 0.692');
    document.documentElement.style.setProperty('--button-color', 'rgb(76, 73, 221)');
    document.documentElement.style.setProperty('--text-color', 'rgb(65, 65, 65)');
});


document.querySelector('#mode-switch-D').addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', 'rgb(65, 65, 65)');
    document.documentElement.style.setProperty('--footer-backround', 'black');
    document.documentElement.style.setProperty('--button-color', 'black');
    document.documentElement.style.setProperty('--text-color', 'rgb(240, 240, 240)');
});


let arrImages = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
let mainImage = document.querySelector('#main-image');
let counterI = 0;

document.querySelector('#next-button').addEventListener('click', ()=> {imagesFunct(1)})
document.querySelector('#previous-button').addEventListener('click', ()=> {imagesFunct(-1)})

function imagesFunct(num){
    if(num>0){
        if(counterI<3 && counterI>=0){
            counterI += num;
            mainImage.src = arrImages[counterI]
        }        
    }
    else{
        if(counterI<=3 && counterI>0){
            counterI += num;
            mainImage.src = arrImages[counterI]
        }
    }
}

