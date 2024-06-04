document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thanks for completing the form well be in touch soon');
    });
});

const button = document.querySelector('button');
function buttonClick() {
        alert('Please i love you')
    }

button.addEventListener('click', buttonClick);




const myDiv = document.querySelector('.heaven');
myDiv.addEventListener('click', () => {
    myDiv.style.color = 'black';
    myDiv.style.backgroundColor = '#E0F7FA';
});
myDiv.addEventListener('mouseleave', () => {
    myDiv.style.color = 'black';
    myDiv.style.backgroundColor = '#E0F7FA';
});


const myDic = document.querySelector('.heven');
myDic.addEventListener('click', () => {
    myDic.style.color = 'black';
    myDic.style.backgroundColor = '#E0F7FA';
});
myDic.addEventListener('mouseleave', () => {
    myDic.style.color = 'black';
    myDic.style.backgroundColor = '#E0F7FA';
});

