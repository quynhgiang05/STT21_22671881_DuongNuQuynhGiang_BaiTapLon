// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfUNFkMldAkdyMprfW20xoyD-HtXtz6RE",
  authDomain: "petshopdb-8fc3d.firebaseapp.com",
  projectId: "petshopdb-8fc3d",
  storageBucket: "petshopdb-8fc3d.appspot.com",
  messagingSenderId: "719810590943",
  appId: "1:719810590943:web:2f385e37ca17de869a116a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
// Kết nối db
const db = getFirestore(app);

// Collection Food
async function getDataFood() {
  const foodCol = collection(db, "food");
  let productItems = "";
  const querySnapshot = await getDocs(foodCol);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    productItems += renderProductCard(item.name, item.price, item.imgMain, item.brand, item.state);
    console.log(productItems);
    document.getElementById('products-container').innerHTML = productItems;
  });
}

// Collection clothes
async function getDataCleaning() {
  const foodCol = collection(db, "cleaning");
  let productItems = "";
  const querySnapshot = await getDocs(foodCol);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    productItems += renderProductCard(item.name, item.price, item.imgMain, item.brand, item.state);
    document.getElementById('products-container').innerHTML = productItems;
  });
}

// Collection cosmetic
async function getDataCosmetic() {
  const foodCol = collection(db, "cosmetic");
  let productItems = "";
  const querySnapshot = await getDocs(foodCol);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    productItems += renderProductCard(item.name, item.price, item.imgMain, item.brand, item.state);
    document.getElementById('products-container').innerHTML = productItems;
  });
}

// Collection cleaning
async function getDataClothes() {
  const foodCol = collection(db, "clothes");
  let productItems = "";
  const querySnapshot = await getDocs(foodCol);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    productItems += renderProductCard(item.name, item.price, item.imgMain, item.brand, item.state);
    document.getElementById('products-container').innerHTML = productItems;
  });
}

// Hàm renderFoodCard
function renderProductCard(name, price, imgMain, brand, state) {
  return `<div class="thumbnail border border-black" style="height: 250px; width: 180px; margin-right: 32px" id="pets">
            <div class="frameImg">
                <img class="lazy" id="imgMain" src="${imgMain}">
            </div>
            <h6 class="nameProduct" id="name">${name}</h6>
            <h5 id="price" class="price text-danger">${price}</h5>
            <button class="btn btn-success themGioHang">Thêm vào giỏ hàng</button>
            <h5 class="brand" id="brand" hidden>${brand}</h5>
            <p id="state" hidden>${state}</p>
          </div>`;
}
// const all = document.querySelector('#all');
const food = document.querySelector('#food');
const clothes = document.querySelector('#clothes');
const cleaning = document.querySelector('#cleaning');
const cosmetic = document.querySelector('#cosmetic');


food.addEventListener('click', function() {
  getDataFood();
});

clothes.addEventListener('click', function() {
  getDataClothes();
});

cleaning.addEventListener('click', function() {
  getDataCleaning();
});

cosmetic.addEventListener('click', function() {
  getDataCosmetic();
});

getDataFood();

// Lazy load images
document.addEventListener("DOMContentLoaded", function() {
  let lazyloadImages = document.querySelectorAll("img.lazy");    
  let lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        let scrollTop = window.pageYOffset;
        console.log(scrollTop);
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

$(document).ready(function() {
  // Select the target container using jQuery
  const productContainer = $('#products-container');

  // Attach a click event handler to the container
  productContainer.on('click', function(event) {
    // The event handler will be executed when any child element within the container is clicked
    const clickedElement = event.target;
    // ... Handle the click event based on the clickedElement ...
    if ($(clickedElement).hasClass('thumbnail') || $(clickedElement).hasClass('nameProduct') || 
        $(clickedElement).hasClass('price') || $(clickedElement).hasClass('lazy') || $(clickedElement).closest('.thumbnail').length) {
      // Get the closest parent element with the class 'thumbnail'
      const thumbnail = $(clickedElement).closest('.thumbnail');
      // Get the values of the child elements within the thumbnail
      const name = thumbnail.find('.nameProduct').text();
      const img = thumbnail.find('#imgMain').attr('src');
      const price = thumbnail.find('.price').text();
      const state = thumbnail.find('#state').text();
      const brand = thumbnail.find('.brand').text();
      // console.log(name, img, price, brand, state);

      localStorage.setItem('name', name);
      localStorage.setItem('img', img);
      localStorage.setItem('price', price);
      localStorage.setItem('state', state);
      localStorage.setItem('brand', brand);
    }

    // chuyển qua trang chi tiết sản phẩm
    if ($(clickedElement).hasClass('themGioHang')) {
      // nếu ấn vào nút thêm vào giỏ hàng thì thông tin của sản phẩm sẽ được chuyển qua js file cart.js

      // Lấy thông tin sản phẩm
      // const name = localStorage.getItem('name');
      // const img = localStorage.getItem('img');
      // const price = localStorage.getItem('price');
      // const state = localStorage.getItem('state');
      // const brand = localStorage.getItem('brand');
      
      // // Lưu thông tin sản phẩm vào một mảng trong localStorage
      // let products = JSON.parse(localStorage.getItem('products'));
      // if (products === null) {
      //   products = [];
      // } 
      // products.push({
      //   name: name,
      //   img: img,
      //   price: price,
      //   state: state,
      //   brand: brand,
      //   quantity: 1
      // });
    } else {
      window.location.href = 'DetailProduct.html';
    }
  });
});
