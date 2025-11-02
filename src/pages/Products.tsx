import { Link } from "react-router-dom";
import { mockProducts } from "@/data/mockProducts";

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">ALL PRODUCTS</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-muted mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium mb-2">{product.name}</h3>
              <p className="text-muted-foreground">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
