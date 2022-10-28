let recommendedContainer = document.querySelector('.recommended-con'); 
let discountContainer = document.querySelectorAll('.con');

fetch('https://smuknu.webmcdm.dk/products')
.then((response) => response.json())
.then((responseData) => {
    const recommendedItems = responseData

    for (let i = 0; i < recommendedItems.length; i++) {
        /* products */
        recommendedContainer.innerHTML += 
        `
            <div class="product-wrap">
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

        /* discount */
        let con = document.querySelector('.con' + [i]);
        if (recommendedItems[i].discountInPercent == "") {
            con.classList.add('remove');
        } else {
            con.classList.add('stay')
        }
    }
})










    /* Medlem */
    let medlemImgContainer = document.querySelector('.bliv-medlem-img-con');
    fetch('https://smuknu.webmcdm.dk/reviews')
    .then((response) => response.json())
    .then((responseData) => {
        for (let i = 0; i < responseData.length; i++) {
            medlemImgContainer.innerHTML += 
            `<img class="bliv-medlem-img" src="${responseData[i].image}" alt="${responseData[i].byline}">`
        }
    })