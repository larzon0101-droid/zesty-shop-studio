import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = [];

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
      {/* Cart items will be displayed here */}
    </div>
  );
};

export default Cart;
