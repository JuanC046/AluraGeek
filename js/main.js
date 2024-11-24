import {product as productTemplate} from './product.js';
import { getProducts, createProduct, deleteProduct } from './request.js';

const productsList = document.querySelector('.products__list');
const products = await getProducts();
if (products) {
    productsList.innerHTML = "";
    products.forEach((product) => {
        const { image, name, price } = product;
        productsList.innerHTML += productTemplate(image, name, price);
    });
} else {
    productsList.innerHTML = "<h2>No products available</h2>";
}

const productForm = document.querySelector('.addProduct-form');
productForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const image = document.querySelector('#image').value;
    const name = document.querySelector('#name').value;
    const price = document.querySelector('#price').value;
    const newProduct = { name, price, image };
    console.log("New Product\n",newProduct);
    const response = await createProduct(newProduct);
    if (response) {
        productsList.innerHTML += productTemplate(image, name, price);
    }
    else {
        alert("Error creating product");
    }
});

const deleteButtons = document.querySelectorAll('#delete');
deleteButtons.forEach((button, index) => {
    button.addEventListener('click', async () => {
        await deleteProduct(products[index].id);
    });
});