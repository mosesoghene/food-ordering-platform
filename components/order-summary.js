"use client"

import { CheckCircle, Clock, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OrderSummary({ onNewOrder }) {
  const orderNumber = Math.floor(Math.random() * 10000) + 1000

  return (
    <div className="max-w-2xl mx-auto text-center">
      <Card className="border-green-200 bg-green-50">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl text-green-700">Order Confirmed!</CardTitle>
          <CardDescription className="text-green-600">
            Thank you for your order. We're preparing your delicious meal!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <p className="text-sm text-gray-600 mb-1">Order Number</p>
            <p className="text-2xl font-bold text-gray-900">#{orderNumber}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-green-200">
              <Clock className="h-8 w-8 text-orange-500" />
              <div>
                <p className="font-semibold">Estimated Time</p>
                <p className="text-sm text-gray-600">25-35 minutes</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-green-200">
              <Utensils className="h-8 w-8 text-orange-500" />
              <div>
                <p className="font-semibold">Status</p>
                <p className="text-sm text-gray-600">Being prepared</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-green-200">
            <h3 className="font-semibold mb-2">What's next?</h3>
            <ul className="text-sm text-gray-600 space-y-1 text-left">
              <li>• We'll start preparing your order right away</li>
              <li>• You'll receive updates via SMS/email</li>
              <li>• Your food will be delivered hot and fresh</li>
            </ul>
          </div>

          <Button onClick={onNewOrder} className="w-full bg-orange-500 hover:bg-orange-600" size="lg">
            Order Again
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
