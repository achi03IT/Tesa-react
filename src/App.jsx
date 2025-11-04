import React from 'react'
import Tesa from './Tesa'
import Footer from './Footer'

const App = () => {
  const tesa = [
    {
      image: "Sweet potato.jpg",
      name: "Red Sweet Potato",
      description: "Creamy and sweet red sweet potato beverage, perfect for cold days.",
      price: "$4.00",
    },
    {
      image: "americano-foam.jpg",
      name: "Americano with Foam",
      description: "Espresso diluted with hot water, topped with a creamy foam.",
      price: "$3.50",
    },
    {
      image: "dark-rich-cocoa.jpg",
      name: "Dark and Rich Cocoa",
      description: "Deep and decadent chocolatey drink, perfect for chocolatelovers.",
      price: "$4.00",
    },
    {
      image: "fruit-smoothie.jpg",
      name: "Fruit Smoothie",
      description: "Refreshing blend of seasonal fruits, perfect for a healthyboost.",
      
      price: "$4.50",
    },
    {
      image: "hot-cocoa.jpg",
      name: "Classic Hot Cocoa",
      description: "Warm and comforting hot chocolate, made with real Belgianchocolate.",
      
      price: "$3.00",
    },
    {
      image: "orange-coconut.jpg",
      name: "Orange Coconut Delight",
      description: "Tropical blend of orange and coconut milk, perfect for a summerday.",
      
      price: "$4.50",
    },
    {
      image: "orange-juice.jpg",
      name: "Freshly Squeezed Orange Juice",
      description: "100% pure orange juice, a healthy and refreshing start to yourday.",
      
      price: "$3.00",
    },
    {
      image: "pink-lemonade.jpg",
      name: "Pink Lemonade",
      description: "Tangy and sweet pink lemonade, a perfect thirst quencher.",
      price: "$3.00"
    },
    {
      image: "plan-americano.jpg",
      name: "Classic Americano",
      description: "Espresso diluted with hot water, a strong and flavorful coffee.",
      price: "$3.00"
    },
    {
      image: "Matcha.jpg",
      name: "Matcha Latte",
      description: "Creamy matcha latte made with premium Japanese matcha.",
      price: "$4.00"
    },
  ];
  return (
    <>
      <div className="container py-4">
        <h1 className='text-center mb-3'>Tesa Cafe</h1>
        <hr />

        <div className="row">
          {
            tesa.map((t) => (
              <div key={t.name} className="col-12 col-sm-6 col-md-4 mb-4">
                <Tesa {...t} />
              </div>
            ))
          }
        </div>
      </div>

      <Footer />
    </>
  )
}
 

export default App