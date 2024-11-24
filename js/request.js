const serverUrl = "http://localhost:3000/products";
const getProducts = async () => {
    try {
        const response = await fetch(serverUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error("Error fetching products: ", error);
        return null;
    }
};

const createProduct = async (product) => {
    try {
        const response = await fetch(serverUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        return response.json();
    } catch (error) {
        console.error("Error creating product: ", error);
        return null;
    }
};

const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${serverUrl}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error("Error deleting product: ", error);
        return null;
    }
};

export { getProducts, createProduct, deleteProduct };