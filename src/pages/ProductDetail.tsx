import { useParams } from "react-router-dom";
import { mockProducts } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      toast.error("Please select a size");
      return;
    }
    toast.success("Added to cart");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-[3/4] bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl mb-6">${product.price}</p>
          <p className="text-muted-foreground mb-8">{product.description}</p>

          {/* Size Selection */}
          {product.sizes && (
            <div className="mb-6">
              <h3 className="font-medium mb-3">SELECT SIZE</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-16"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && (
            <div className="mb-8">
              <h3 className="font-medium mb-3">SELECT COLOR</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <Button size="lg" onClick={handleAddToCart} className="w-full md:w-auto">
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
