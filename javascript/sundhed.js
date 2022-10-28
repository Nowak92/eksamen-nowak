let accordion = document.querySelector('.accordion');
const accordionHeader = document.querySelectorAll('.accordion-header');
const accordionParagraph = document.querySelectorAll('.accordion-p');


fetch('https://smuknu.webmcdm.dk/questions')
.then((response) => response.json())
.then((responseData) => {

    
    for (let i = 0; i < responseData.length; i++) {

        accordion.innerHTML += 
        `<div class="accordion-con">
            <div class="accordion-header-wrap">
                <i class="fa-solid fa-question fa-2xl questionmark"></i>
                <h3 class="accordion-header">${responseData[i].question}</h3>
            </div>
            <div style="height: 0px;" class="accordion-text-wrap">
                <p class="accordion-p">${responseData[i].answer}</p>
            </div>
        </div>`
    }


    
    



    let accordionContainer = document.querySelectorAll('.accordion-con');
    const borderElement = document.querySelectorAll('.accordion-header-wrap');
    const accordionText = document.querySelectorAll('.accordion-text-wrap');
    const questionmark = document.querySelectorAll('.questionmark');
    const accordionHeader = document.querySelectorAll('.accordion-header');
    let accordionParagraph = document.querySelectorAll('.accordion-p');
    
    for (let i = 0; i < accordionContainer.length; i++) {
        borderElement[i].classList.add('border' + i);
        
        
        let accordionParagraphHeight = accordionParagraph[i].offsetHeight + "px";
        

        
        
        accordionContainer[i].addEventListener('click', (event) => {
            questionmark[i].classList.toggle('questionmarkScript');
            accordionHeader[i].classList.toggle('accordion-headerScript');
            
            if (accordionText[i].style.height !== "0px") {
                accordionText[i].style.height = "0px"
            } else {
                accordionText[i].style.height = accordionParagraphHeight
            }         
        })
      }
    })

    let medlemImgContainer = document.querySelector('.bliv-medlem-img-con');
    fetch('https://smuknu.webmcdm.dk/reviews')
    .then((response) => response.json())
    .then((responseData) => {
        for (let i = 0; i < responseData.length; i++) {
            medlemImgContainer.innerHTML += 
            `<img class="bliv-medlem-img" src="${responseData[i].image}" alt="${responseData[i].byline}">`
        }
    })


