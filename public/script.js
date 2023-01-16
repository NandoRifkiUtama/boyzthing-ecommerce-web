const data = [
  {
    id: 1,
    name: "Black Jacket",
    price: 350,
    image:
      "https://media.istockphoto.com/id/1210106212/photo/black-jacket-and-t-shirt-isolated-on-white-background.jpg?s=170667a&w=0&k=20&c=DpdJc337ZyxFiOCJ7LzI5KfBNO27wVl3jGRORwpyP30=",
    category: "Jacket",
  },
  {
    id: 2,
    name: "Army Jacket",
    price: 300,
    image:
      "https://purepng.com/public/uploads/large/purepng.com-red-black-jacketgarmentupper-bodyjacketlighterredblack-1421526362521xzz7q.png",
    category: "Jacket",
  },
  {
    id: 3,
    name: "Red Jacket",
    price: 370,
    image: "https://www.pngall.com/wp-content/uploads/2016/05/Jacket-PNG.png",
    category: "Jacket",
  },
  {
    id: 4,
    name: "Erigo Sweater Hoodie",
    price: 200,
    image:
      "https://id-test-11.slatic.net/p/3e4f986ff20dec22da1b34edad647fbe.png",
    category: "Sweater",
  },
  {
    id: 5,
    name: "Erigo Sweater",
    price: 200,
    image:
      "https://id-live-01.slatic.net/p/0dce289cc8ab351c737899cd66f231d2.png",
    category: "Sweater",
  },
  {
    id: 6,
    name: "Blue Sweater",
    price: 250,
    image:
      "https://w7.pngwing.com/pngs/166/791/png-transparent-sweater-knitting-icon-round-neck-knit-sweater-children-blue-child-effect.png",
    category: "Sweater",
  },
  {
    id: 7,
    name: "T-Shirt Uniqlo",
    price: 150,
    image:
      "https://img2.pngdownload.id/20180614/pg/kisspng-t-shirt-uniqlo-neckline-sleeve-anti-social-social-club-5b2204069356a8.1927080815289559106035.jpg",
    category: "Tshirt",
  },
  {
    id: 8,
    name: "T-Shirt Uniqlo",
    price: 150,
    image:
      "https://w7.pngwing.com/pngs/192/18/png-transparent-t-shirt-hoodie-uniqlo-clothing-skate-supply-tshirt-fashion-logo.png",
    category: "Tshirt",
  },
  {
    id: 9,
    name: "T-Shirt Uniqlo",
    price: 150,
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/445128/item/goods_55_445128.jpg",
    category: "Tshirt",
  },
  {
    id: 10,
    name: "T-Shirt Bon Jovi",
    price: 90,
    image:
      "https://w7.pngwing.com/pngs/346/603/png-transparent-t-shirt-bon-jovi-this-house-is-not-for-sale-tour-you-give-love-a-bad-name-t-shirt.png",
    category: "Tshirt",
  },
  {
    id: 11,
    name: "T-Shirt Bon Jovi",
    price: 90,
    image:
      "https://5.imimg.com/data5/ECOM/Default/2022/7/LK/GY/XM/83482573/bon-jovi-t-shirt-2-500x500.jpg",
    category: "Tshirt",
  },
  {
    id: 12,
    name: "T-Shirt Bon Jovi",
    price: 90,
    image:
      "https://ih1.redbubble.net/image.982091869.5382/ra,kids_tee,x750,000000:44f0b734a5,front-pad,600x600,f8f8f8.jpg",
    category: "Tshirt",
  },
  {
    id: 13,
    name: "T-Shirt Rock n Roll",
    price: 120,
    image:
      "https://assets.tees.design/arts/2019/04/12171536/Get-80s-Rock-T-Shirts-Band-Tee-Vintage-Band-T-Shirts-Concert-Royal-Blue-Unisex-T-shirt.png",
    category: "Tshirt",
  },
  {
    id: 14,
    name: "T-Shirt Hard Rock",
    price: 100,
    image:
      "https://blog.printsome.com/wp-content/uploads/square_center_WorldLogo_MensTee_Sand_01a.jpg",
    category: "Tshirt",
  },
  {
    id: 15,
    name: "Pants Cargo",
    price: 220,
    image:
      "https://e7.pngegg.com/pngimages/808/215/png-clipart-cargo-pants-khaki-pocket-others-miscellaneous-cargo.png",
    category: "Pants",
  },
  {
    id: 16,
    name: "Pants Cargo",
    price: 220,
    image:
      "https://w7.pngwing.com/pngs/345/142/png-transparent-t-shirt-cargo-pants-hoodie-craghoppers-beige-trousers-cargo-kids-hoodie.png",
    category: "Pants",
  },
  {
    id: 17,
    name: "Pants Chinos",
    price: 190,
    image:
      "https://e7.pngegg.com/pngimages/375/521/png-clipart-chino-cloth-pants-dri-fit-clothing-amazon-com-red-point-amazoncom-trousers.png",
    category: "Pants",
  },
  {
    id: 18,
    name: "Pants Chinos",
    price: 190,
    image:
      "https://banner2.cleanpng.com/20180910/upv/kisspng-pants-jeans-chino-cloth-clothing-fashion--5b9711a2e99d57.6227465415366271069569.jpg",
    category: "Pants",
  },
  {
    id: 19,
    name: "Hat Korean",
    price: 99,
    image:
      "https://www.pngfind.com/pngs/m/656-6565333_fisherman-hat-men-and-women-spring-and-autumn.png",
    category: "Hat",
  },
  {
    id: 20,
    name: "Hat Korean",
    price: 99,
    image:
      "https://e7.pngegg.com/pngimages/591/283/png-clipart-bucket-hat-sun-hat-cap-clothing-hat-child-hat.png",
    category: "Hat",
  },
];

const productContainer = document.querySelector(".display-product-container");
const searchProduct = document.querySelector(".search-product");
const categoryContainer = document.querySelector(".product-category-items");
const rangeValue = document.querySelector(".range-value");
const priceValue = document.querySelector(".price-value");

const displayProduct = (productData) => {
  productContainer.innerHTML = productData
    .map(
      (item) => `<div class="display-product-card">
  <div class="card-image">
    <img
      src=${item.image}
      alt=${item.name}
    />
  </div>
  <div class="card-content">
    <h3>${item.name}</h3>
    <p>IDR ${item.price}K</p>
  </div>
</div>`
    )
    .join("");
};

displayProduct(data);


searchProduct.addEventListener("keyup", (event) => {
  const value = event.target.value.toLowerCase();
  if (value) {
    displayProduct(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProduct(data);
  }
});

const setCategories = () => {
  const categoriesList = data.map((item) => item.category);
  const displaycategory = [
    "All",
    ...categoriesList.filter((item, index) => {
      return categoriesList.indexOf(item) === index;
    }),
  ];

  categoryContainer.innerHTML = displaycategory
    .map((item) => `<span class="category-item">${item}</span>`)
    .join("");

  categoryContainer.addEventListener("click", (event) => {
    const selectedCategory = event.target.textContent;

    selectedCategory === "All"
      ? displayProduct(data)
      : displayProduct(
          data.filter((item) => item.category === selectedCategory)
        );
  });
};

const setPrice = () => {
  const priceData = data.map((item) => item.price);
  const minPrice = Math.min(...priceData);
  const maxPrice = Math.max(...priceData);

  rangeValue.min = minPrice;
  rangeValue.max = maxPrice;
  rangeValue.value = maxPrice;
  priceValue.textContent = "IDR " + maxPrice + "K";

  rangeValue.addEventListener("input", (event) => {
    priceValue.textContent = "IDR " + event.target.value + "K";
    displayProduct(data.filter((item) => item.price <= event.target.value));
  });
};

setPrice();
setCategories();
