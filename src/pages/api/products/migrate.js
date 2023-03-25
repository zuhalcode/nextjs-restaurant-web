import { connect, disconnect } from "@lib/mongo";
import { sendOk } from "@lib/responseHelper";
import Product from "@model/Product";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const productData = [
      {
        name: "Ribeye Steak",
        price: 35000,
        desc: `Our juicy and tender ribeye steak is a favorite among beef lovers. Grilled to perfection and served with your choice of sides, this dish is sure to satisfy your cravings for a hearty meal`,
        image: "/images/products/beef/beef.jpg",
      },
      {
        name: "Classic Cheeseburger",
        price: 45000,
        desc: `Our classic cheeseburger is a timeless favorite, made with a juicy beef patty, melted cheese, and fresh toppings. Served with a side of fries, this burger is sure to satisfy your hunger`,
        image: "/images/products/burger/burger-(2)-123.jpg",
      },
      {
        name: "Spicy Chicken Burger",
        price: 45000,
        desc: `Our classic cheeseburger is a timeless favorite, made with a juicy beef patty, melted cheese, and fresh toppings. Served with a side of fries, this burger is sure to satisfy your hunger`,
        image: "/images/products/burger/burger.jpg",
      },
      {
        name: "Veggie Burger",
        price: 65000,
        desc: `Our veggie burger is a delicious and healthy option for vegetarians and meat-lovers alike. Made with a blend of fresh vegetables, beans, and spices, this burger is served on a toasted bun with your favorite toppings`,
        image: "/images/products/burger/burger1.jpg",
      },
      {
        name: "BBQ Bacon Burger",
        price: 45000,
        desc: `Our BBQ bacon burger is a meat lover's dream, made with a juicy beef patty, crispy bacon, and smothered in BBQ sauce. Served with a side of onion rings, this burger is a flavor sensation`,
        image: "/images/products/burger/burger123.jpg",
      },
      {
        name: "Margherita Pizza",
        price: 24000,
        desc: `Our classic Margherita pizza is a crowd-pleaser, made with fresh tomato sauce, mozzarella cheese, and fresh basil. This pizza is a perfect choice for those who love simple yet delicious flavors`,
        image: "/images/products/pizza/pizza3.jpg",
      },
      {
        name: "Pepperoni Pizza",
        price: 56000,
        desc: `Our spicy pepperoni pizza is a perfect choice for those who love a little heat in their meal. Made with a generous amount of pepperoni, fresh tomato sauce, and mozzarella cheese, this pizza is a favorite among meat lovers`,
        image: "/images/products/pizza/pizza4.jpg",
      },
      {
        name: "BBQ Chicken Pizza",
        price: 60000,
        desc: `Our BBQ chicken pizza is a perfect choice for those who love a little sweetness in their meal. Made with tender chicken, BBQ sauce, red onions, and mozzarella cheese, this pizza is a flavor sensation`,
        image: "/images/products/pizza/pizza.jpg",
      },
      {
        name: "Veggie Pizza",
        price: 70000,
        desc: `Our veggie pizza is a healthy and delicious option for vegetarians and meat-lovers alike. Made with a variety of fresh vegetables, including peppers, mushrooms, and onions, this pizza is a perfect choice for a light and flavorful meal`,
        image: "/images/products/pizza/pizza123.jpg",
      },
    ];

    try {
      await connect();
      for (let product of productData) {
        const newProduct = new Product(product);
        await newProduct.save();
        console.log(`Successfully migrated product ${product.name}`);
      }
      return sendOk(res, "", "All products migrated successfully!");
    } catch (error) {
      console.error(`Error migrating products: ${error.message}`);
    } finally {
      await disconnect();
    }
  }
}
