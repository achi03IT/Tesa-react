import React from 'react'
import Tesa from './Tesa'
import Footer from './Footer'
import Header from './Header'

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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-center mb-6">Tesa Cafe</h1>
          <hr className="mb-8 border-gray-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
              tesa.map((t) => (
                <div key={t.name}>
                  <Tesa {...t} />
                </div>
              ))
            }
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
 

export default App