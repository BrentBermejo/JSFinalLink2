/* ========================= */
/* About Us Button   */
/* ========================= */


const aboutBtn = document.querySelector(".about-button a");

aboutBtn.addEventListener("click", function(event) {

    event.preventDefault();

    alert("🚧 Currently under development.\n\nThis feature will be available in a future update.");

});



/* ========================= */
/* Product Card Generation   */
/* ========================= */

const products = [
    {
        name: "Lucky Lacquer Thinner", 
        image: "assets/images/products/Lacquer thinner.png",
        description: "High-grade, new and improved formula designed for excellent paint thinning, smoothing, and equipment cleanup. Ideal for professional automotive and wood finishing projects." 
    },

    {   name: "Lucky Paint Thinner", 
        image: "assets/images/products/Paint thinner.png",
        description: "Premium-grade industrial solvent designed to seamlessly reduce paint viscosity, maximize spray equipment efficiency, and deliver a smooth, even finish on heavy-duty applications."
    },    

    {   name: "Lucky Acrylic Thinner", 
        image: "assets/images/products/Acrylic thinner.png",
        description: "A versatile, professional-grade formula engineered. Designed to reduce viscosity seamlessly, minimize clogging in spray equipment, and leave an ultra-smooth, high-gloss finish without blushing."
    }
    
];


const productsGrid = document.querySelector('.products-grid');

let cards = "";

products.forEach(function(product){

cards += `

<div class="products-card"> 

<img src="${product.image}" alt="${product.name}">

<hr>

<h3>${product.name}</h3>

<p>${product.description}</p>

<button class="view-btn" data-name="${product.name}" data-image="${product.image}" data-description="${product.description}">
    View Image
</button>

</div>

`;

});

productsGrid.innerHTML = cards;



/* ========================= */
/* Modal image button   */
/* ========================= */

const buttons = document.querySelectorAll('.view-btn');
const closeBtn = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.image-modal');
const modalContent = document.querySelector('.modal-content');
const modalImage = document.querySelector('#modal-image');
const modalName = document.querySelector('#modal-name');
const modalDescription = document.querySelector('#modal-description');

buttons.forEach(function(button){
    button.addEventListener('click', function(){

        const image = button.dataset.image;
        const name = button.dataset.name;
        const description = button.dataset.description;

        modal.classList.add('show');

        modalImage.src = image;
        modalImage.alt = name;
        modalName.textContent = name;
        modalDescription.textContent = description;
        
    });

});

closeBtn.addEventListener('click', function(){

    modal.classList.remove('show');
    
});


modal.addEventListener('click',function(){

    if(event.target === modal) {

        modal.classList.remove('show');

    }

});


const catalogBtn = document.querySelector(".products-catalog a");

catalogBtn.addEventListener("click", function(event) {

    event.preventDefault();

    alert("🚧 Product Catalog is currently under development.\n\nThis feature will be available in a future update.");

});


/* ========================= */
/* Hamburger Button   */
/* ========================= */

const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');

menuButton.addEventListener('click', function() {

    navList.classList.toggle('show');

});

