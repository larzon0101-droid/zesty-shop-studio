import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";

export const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            STORE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/products" className="text-sm hover:opacity-70 transition-opacity">
              PRODUCTS
            </Link>
            <Link to="/women" className="text-sm hover:opacity-70 transition-opacity">
              WOMEN
            </Link>
            <Link to="/men" className="text-sm hover:opacity-70 transition-opacity">
              MEN
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/auth">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
