var wrapper = document.querySelector(".sliderwrapper");
var menuItems = document.querySelectorAll(".menuItem");


const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        images: "./images/air.png",
      },
      {
        code: "darkblue",
        images: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        images: "./images/jordan.png",
      },
      {
        code: "green",
        images: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        images: "./images/blazer.png",
      },
      {
        code: "green",
        images: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        images: "./images/crater.png",
      },
      {
        code: "lightgray",
        images: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        images: "./images/hippie.png",
      },
      {
        code: "black",
        images: "./images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].images;

        currentProductColors.forEach((c, index) => {
          c.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});


currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].images;
  });
});

currentProductSizes.forEach((size,index) => {
  size.addEventListener("click",() =>{
    currentProductSizes.forEach((size) => {
    size.style.backgroundColor= "white";
    size.style.color= "black";
});
    size.style.backgroundColor= "black";
    size.style.color= "white";
 });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () =>{
  payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
})
