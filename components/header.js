"use client"

import { ShoppingCart, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Header({ cartItemCount, onCartClick, onLogoClick }) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={onLogoClick}>
            <Utensils className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-900">FoodieExpress</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Menu
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>

          <Button variant="outline" size="sm" className="relative" onClick={onCartClick}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart
            {cartItemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
