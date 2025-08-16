"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { 
  ShoppingCart, 
  Star, 
  Check, 
  Truck, 
  MapPin,
  Phone,
  Mail,
  User,
  CreditCard,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

interface OrderForm {
  name: string
  mobile: string
  email: string
  size: string
  color: string
  quantity: number
  fulfillmentMethod: 'self-collect' | 'delivery'
  shippingAddress: string
}

export default function TShirtOrderPage() {
  const [showOrderForm, setShowOrderForm] = React.useState(false)
  const [showPayment, setShowPayment] = React.useState(false)
  const [formData, setFormData] = React.useState<OrderForm>({
    name: '',
    mobile: '',
    email: '',
    size: 'M',
    color: 'Navy',
    quantity: 1,
    fulfillmentMethod: 'self-collect',
    shippingAddress: ''
  })

  const product = {
    name: "Rulang Alumni T-Shirt",
    price: 25.00,
    image: "/images/merchandise/rulang-tshirt.png",
    description: "Premium cotton t-shirt with alumni logo",
    longDescription: "Show your alumni pride with this premium cotton t-shirt featuring the iconic Rulang Alumni logo. Made from 100% organic cotton, this comfortable and durable shirt is perfect for casual wear, alumni events, or as a thoughtful gift for fellow graduates.",
    rating: 4.8,
    reviews: 23,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "White", "Gray"],
    features: [
      "100% Organic Cotton",
      "Pre-shrunk fabric",
      "Reinforced seaming",
      "Classic fit",
      "Alumni logo embroidered",
      "Machine washable"
    ]
  }

  const handleInputChange = (field: keyof OrderForm, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPayment(true)
  }

  const totalAmount = product.price * formData.quantity
  const inputClassName = "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
  const textareaClassName = "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

  if (showPayment) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Submitted Successfully!</h1>
              <p className="text-gray-600">Please complete your payment using PayNow</p>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{product.name} ({formData.size}, {formData.color})</span>
                  <span>{formData.quantity} × ${product.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total Amount</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* PayNow QR Code */}
            <div className="mb-6">
              <div className="w-64 h-64 bg-white border-2 border-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                {/* PayNow QR Code Placeholder */}
                <div className="text-center">
                  <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                    {/* PayNow Logo */}
                    <div className="text-center">
                      <div className="w-16 h-8 bg-red-600 rounded mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">PayNow</span>
                      </div>
                      <div className="text-xs text-gray-500">QR Code</div>
                      <div className="text-xs text-gray-400 mt-1">Scan to Pay</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Amount:</strong> S${totalAmount.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Reference:</strong> TSHIRT-{Date.now().toString().slice(-6)}
              </p>
            </div>

            {/* Payment Instructions */}
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 mb-3">Payment Instructions</h3>
              <div className="text-sm text-blue-800 space-y-2 text-left">
                <p>1. Open your banking app or PayNow-enabled app</p>
                <p>2. Scan the QR code above</p>
                <p>3. Verify the amount: <strong>S${totalAmount.toFixed(2)}</strong></p>
                <p>4. Complete the payment</p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-green-50 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-green-900 mb-3">What happens next?</h3>
              <div className="text-sm text-green-800 space-y-2">
                <p>• Once payment is verified, we will contact you within 1-2 business days</p>
                <p>• For <strong>Self-Collection</strong>: We'll provide pickup location and timing details</p>
                <p>• For <strong>Delivery</strong>: We'll coordinate delivery arrangements to your specified address</p>
                <p>• You'll receive order confirmation and tracking information via email</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowPayment(false)
                  setShowOrderForm(false)
                  setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    size: 'M',
                    color: 'Navy',
                    quantity: 1,
                    fulfillmentMethod: 'self-collect',
                    shippingAddress: ''
                  })
                }}
              >
                Order Another Item
              </Button>
              <Link href="/mockups">
                <Button>Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/mockups" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">S${product.price.toFixed(2)}</p>
              <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Product Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {showOrderForm ? (
              /* Order Form */
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Details</h2>
                <form onSubmit={handleSubmitOrder} className="space-y-6">
                  
                  {/* Customer Information */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Customer Information</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="inline h-4 w-4 mr-1" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className={inputClassName}
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="inline h-4 w-4 mr-1" />
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          className={inputClassName}
                          value={formData.mobile}
                          onChange={(e) => handleInputChange('mobile', e.target.value)}
                          placeholder="+65 XXXX XXXX"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="inline h-4 w-4 mr-1" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className={inputClassName}
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Options */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Product Options</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Size *</label>
                        <select
                          className={inputClassName}
                          value={formData.size}
                          onChange={(e) => handleInputChange('size', e.target.value)}
                          required
                        >
                          {product.sizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Color *</label>
                        <select
                          className={inputClassName}
                          value={formData.color}
                          onChange={(e) => handleInputChange('color', e.target.value)}
                          required
                        >
                          {product.colors.map(color => (
                            <option key={color} value={color}>{color}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Quantity *</label>
                        <select
                          className={inputClassName}
                          value={formData.quantity}
                          onChange={(e) => handleInputChange('quantity', parseInt(e.target.value))}
                          required
                        >
                          {[1,2,3,4,5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Fulfillment Method */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Fulfillment Method *</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="fulfillmentMethod"
                          value="self-collect"
                          checked={formData.fulfillmentMethod === 'self-collect'}
                          onChange={(e) => handleInputChange('fulfillmentMethod', e.target.value)}
                          className="mr-3"
                        />
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">Self-Collection (Free)</span>
                      </label>
                      
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="fulfillmentMethod"
                          value="delivery"
                          checked={formData.fulfillmentMethod === 'delivery'}
                          onChange={(e) => handleInputChange('fulfillmentMethod', e.target.value)}
                          className="mr-3"
                        />
                        <Truck className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">Home Delivery (+S$5.00)</span>
                      </label>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  {formData.fulfillmentMethod === 'delivery' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Shipping Address *
                      </label>
                      <textarea
                        className={textareaClassName}
                        value={formData.shippingAddress}
                        onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                        placeholder="Enter your complete delivery address including postal code"
                        required={formData.fulfillmentMethod === 'delivery'}
                      />
                    </div>
                  )}

                  {/* Order Total */}
                  <div className="border-t pt-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Subtotal ({formData.quantity} × S${product.price.toFixed(2)})</span>
                        <span>S${(product.price * formData.quantity).toFixed(2)}</span>
                      </div>
                      {formData.fulfillmentMethod === 'delivery' && (
                        <div className="flex justify-between">
                          <span>Delivery Fee</span>
                          <span>S$5.00</span>
                        </div>
                      )}
                      <div className="flex justify-between font-semibold text-lg border-t pt-2">
                        <span>Total</span>
                        <span>S${(product.price * formData.quantity + (formData.fulfillmentMethod === 'delivery' ? 5 : 0)).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowOrderForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Proceed to Payment
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              /* Order Button */
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => setShowOrderForm(true)}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Order Now
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Free self-collection or S$5 delivery within Singapore
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}