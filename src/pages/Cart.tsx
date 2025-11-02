import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Card } from "@/components/ui/card";
import { Minus, Plus, X } from "lucide-react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8">SHOPPING CART</h1>
        <p className="text-muted-foreground mb-8">Your cart is empty</p>
        <Link to="/products">
          <Button>CONTINUE SHOPPING</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">SHOPPING CART</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card
              key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
              className="p-4"
            >
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="w-24 h-32 bg-muted flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      {item.selectedSize && (
                        <p className="text-sm text-muted-foreground">
                          Size: {item.selectedSize}
                        </p>
                      )}
                      {item.selectedColor && (
                        <p className="text-sm text-muted-foreground">
                          Color: {item.selectedColor}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        removeFromCart(item.id, item.selectedSize, item.selectedColor)
                      }
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mt-auto flex justify-between items-center">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1,
                            item.selectedSize,
                            item.selectedColor
                          )
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1,
                            item.selectedSize,
                            item.selectedColor
                          )
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Price */}
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-6">ORDER SUMMARY</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>FREE</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full mb-3" size="lg">
              CHECKOUT
            </Button>
            <Link to="/products">
              <Button variant="outline" className="w-full" size="lg">
                CONTINUE SHOPPING
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
