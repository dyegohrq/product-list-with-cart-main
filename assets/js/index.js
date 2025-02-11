const body = document.querySelector('body')



let product = [
    {
       'image': {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]

function container() {    
    const container = document.createElement('div')
    container.classList = 'container'

    const h1 = document.createElement('h1')
    h1.classList = 'text-present-1'
    h1.innerText = 'Desserts'
    container.appendChild(h1)

    const productContant = document.createElement('div')
    productContant.classList = 'product_contant'
    productContant.id = 'product_contant'
    container.appendChild(productContant)

    product.map((item) => {
        const productCart = document.createElement('section')
        productCart.classList = 'product_cart'
        productContant.appendChild(productCart)

        const product = document.createElement('div')
        product.classList = 'product'
        productCart.appendChild(product)
               
        const imgCart = document.createElement('div')
        imgCart.classList = `img_cart ${formattedName(item)}`
        product.appendChild(imgCart)

        const button = document.createElement('button')
        button.classList = 'button button-add text-present-4-bold'
        button.innerHTML = '<i><img src="assets/images/icon-add-to-cart.svg" alt=""></i> Add to cart'
        product.appendChild(button)

        const buttonActive = document.createElement('button')
        buttonActive.innerHTML = '<i class="decrement" ><img src="assets/images/icon-decrement-quantity.svg" alt=""></i> <span class="quantity" ></span> <i class="increment"><img src="assets/images/icon-increment-quantity.svg" alt=""></i>'
        buttonActive.classList = 'button button-active text-present-4-bold'
        product.appendChild(buttonActive)

        const productDescription = document.createElement('div')
        productDescription.classList = 'product_description'
        productCart.appendChild(productDescription)

        const category = document.createElement('small')
        category.classList = 'category text-present-4';
        category.innerHTML = item.category
        productDescription.appendChild(category)
        
        const titleDescription = document.createElement('h2')
        titleDescription.classList = 'title_description text-present-3'
        titleDescription.innerHTML = item.name
        productDescription.appendChild(titleDescription)

        const price = document.createElement('span')
        price.classList = 'price text-present-3'
        price.innerHTML = formattedPrice(item.price)
        productDescription.appendChild(price)
    })

    function formattedName(item) {
        let name = item.name.split(' ')[1].toLowerCase()

        return name
    }

    function formattedPrice(price) {
        let formattedNumber = price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })

        return formattedNumber
    }

    body.prepend(container)
}
container()