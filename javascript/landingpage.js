/* Products landingpage */
let recommendedContainer = document.querySelector('.recommended-con'); 
let discountContainer = document.querySelectorAll('.con');


/* let productWrap  */
let product

fetch('https://smuknu.webmcdm.dk/products')
.then((response) => response.json())
.then((responseData) => {
    
     recommendedItems = responseData.filter((item) => {
    return item.recommended == true;
   })
//    const recommendedItems = responseData
    for (let i = 0; i < recommendedItems.length; i++) {
        recommendedContainer.innerHTML += 
        `<div class="product-wrap">
                <div class="product-img-con">
                    <div class="background-img" style="background-image: url(${recommendedItems[i].image});">
                        <div class="discount-con con${i}">
                            <p class="discount-value-1">SPAR</p>
                            <p class="discount-value-2">${recommendedItems[i].discountInPercent}%</p>
                        </div>
                    </div>

                </div>
                <div class="product-text-wrap">
                    <p class="product-description">${recommendedItems[i].title}</p>
                    <p class="product-price">${recommendedItems[i].price} kr.</p>
                </div>
            </div>`;
         

        
            
        
        
         

            let con = document.querySelector('.con' + [i]);
            if (recommendedItems[i].discountInPercent == "") {
                con.classList.add('remove');
            } else {
                con.classList.add('stay')
            }


            
        }  
        
    })

    
    
    



    /* Reviews */
    let reviewContainer = document.querySelector('.reviews-con');
    let medlemImgContainer = document.querySelector('.bliv-medlem-img-con');
    fetch('https://smuknu.webmcdm.dk/reviews')
    .then((response) => response.json())
    .then((responseData) => {
        for (let i = 0; i < responseData.length; i++) {
            reviewContainer.innerHTML += 
            `<div class="review-card">
                <img class="review-img" src="${responseData[i].image}" alt="${responseData[i].byline}">
                <div class="review-text-con">
                    <p class="review-p review-p-1">${responseData[i].description}</p>
                    <p class="review-p review-p-2">${responseData[i].name}</p>
                    <p class="review-p review-p-3">${responseData[i].byline}</p>
                </div>
            </div>`

            medlemImgContainer.innerHTML += 
            `<img class="bliv-medlem-img" src="${responseData[i].image}" alt="${responseData[i].byline}">`
        }
    })

