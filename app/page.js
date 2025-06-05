"use client"

import { useState } from "react"
import Header from "@/components/header"
import MenuSection from "@/components/menu-section"
import Cart from "@/components/cart"
import OrderSummary from "@/components/order-summary"

const foodCategories = [
  {
    id: "appetizers",
    name: "Appetizers",
    items: [
      {
        id: 1,
        name: "Chicken Wings",
        price: 12.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Crispy buffalo wings with ranch dip",
      },
      {
        id: 2,
        name: "Mozzarella Sticks",
        price: 8.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Golden fried mozzarella with marinara sauce",
      },
      {
        id: 3,
        name: "Loaded Nachos",
        price: 14.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Tortilla chips with cheese, jalapeños, and sour cream",
      },
    ],
  },
  {
    id: "mains",
    name: "Main Courses",
    items: [
      {
        id: 4,
        name: "Classic Burger",
        price: 16.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Beef patty with lettuce, tomato, and fries",
      },
      {
        id: 5,
        name: "Margherita Pizza",
        price: 18.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Fresh mozzarella, basil, and tomato sauce",
      },
      {
        id: 6,
        name: "Grilled Salmon",
        price: 24.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Atlantic salmon with vegetables and rice",
      },
      {
        id: 7,
        name: "Chicken Alfredo",
        price: 19.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Creamy pasta with grilled chicken",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: 8,
        name: "Chocolate Cake",
        price: 7.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Rich chocolate layer cake",
      },
      {
        id: 9,
        name: "Ice Cream Sundae",
        price: 6.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "Vanilla ice cream with toppings",
      },
      {
        id: 10,
        name: "Cheesecake",
        price: 8.99,
        image: "/placeholder.svg?height=200&width=200",
        description: "New York style cheesecake with berry sauce",
      },
    ],
  },
]

export default function FoodOrderingPlatform() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [currentView, setCurrentView] = useState("menu")
  const [orderPlaced, setOrderPlaced] = useState(false)

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId)
      return
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)),
    )
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
    setCurrentView("order-summary")
    setCartItems([])
  }

  const handleNewOrder = () => {
    setOrderPlaced(false)
    setCurrentView("menu")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={() => setCurrentView("menu")}
      />

      <main className="container mx-auto px-4 py-8">
        {currentView === "menu" && (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Delicious Food Delivered</h1>
              <p className="text-xl text-gray-600">Order your favorite meals from our kitchen to your door</p>
            </div>

            {foodCategories.map((category) => (
              <MenuSection key={category.id} category={category} onAddToCart={addToCart} />
            ))}
          </div>
        )}

        {currentView === "order-summary" && <OrderSummary onNewOrder={handleNewOrder} />}
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
        onPlaceOrder={handlePlaceOrder}
      />
    </div>
  )
}
