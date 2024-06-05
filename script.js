    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const firstName = document.querySelector('#first-name').value;
        const lastName = document.querySelector('#last-name').value;
        const email = document.querySelector('#email').value;
        const querytype = document.contact.queryType.value
        const message = document.contact.message.value;
        const consent = document.contact.consent.value;
        console.log(consent);
        let error = false
        document.querySelector(".lastAlert").style.display = "none"
        document.querySelector(".nameAlert").style.display = "none"
        document.querySelector(".eAlert").style.display = "none"
        document.querySelector(".messageAlert").style.display = "none"
        document.querySelector(".queryAlert").style.display = "none"
        document.querySelector(".consentAlert").style.display = "none"
        if (!lastName) {        
            document.querySelector(".lastAlert").style.display = "block"
            error =true
        }
        if (!firstName) {
            document.querySelector(".nameAlert").style.display = "block"
            error =true
        }
        if (!email) {
            let alert = document.querySelector(".eAlert")
            alert.style.display = "block"
            error =true
        }
        if (!message) {
            let alert = document.querySelector(".messageAlert")
            alert.style.display = "block"
            error =true
        }
        if (!querytype) {
            let alert = document.querySelector(".queryAlert")
            alert.style.display = "block"
            error =true
        }
        if (!consent) {
            document.querySelector(".consentAlert").style.display = "block"
            error =true
        }

        // if (!firstName) {
        //     let alert = document.querySelector(".nameAlert")
        //     alert.style.display = "block"
        //     error =true
        // }




        if (!error) {
            document.querySelector(".success").style.display = "flex"
            document.querySelector(".success").style.justifyContent = "center"
            document.querySelector(".success").style.alignItems = "center"
        }
        error=false
        console.log(querytype);
        // alert('Thanks for completing the form well be in touch soon');
    });

//     function name(params) {
        
// }
// const name = () => {
        
//     }































// const button = document.querySelector('button');
// function buttonClick() {
//         alert('you have clicked')
//     }

// button.addEventListener('click', buttonClick);












const myDiv = document.querySelector('.heven');
myDiv.addEventListener('click', () => {
    myDiv.style.color = 'black';
    myDic.style.backgroundColor = '#fff';
    myDiv.style.backgroundColor = '#E0F7FA';
});
// myDiv.addEventListener('mouseleave', () => {
//     myDiv.style.color = 'black';
//     myDiv.style.backgroundColor = '#E0F7FA';
// });


const myDic = document.querySelector('.heaven');
myDic.addEventListener('click', () => {
    
    myDic.style.color = 'black';
    myDic.style.backgroundColor = '#E0F7FA';
    myDiv.style.backgroundColor = '#fff';
});
// myDic.addEventListener('mouseleave', () => {
//     myDic.style.color = 'black';
//     myDic.style.backgroundColor = '#E0F7FA';
// });

