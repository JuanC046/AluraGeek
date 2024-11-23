product = (image, name, price)=>{
    return `<li class="product">
                    <img class="product_img" src=${image} alt=${name}>
                    <h4 class="product__description">${name}</h4>
                    <div class="product_footer">
                        <p class="product__price">${price}</p>
                        <img src="assets\Trash 2.svg" alt="Trash">
                    </div>
                </li>`;
} 