import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/data/mockProducts";

const Home = () => {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-muted flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            NEW COLLECTION
          </h1>
          <Link to="/products">
            <Button size="lg" variant="outline" className="bg-white text-foreground hover:bg-white/90">
              SHOP NOW
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">FEATURED PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/women" className="group relative h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
              alt="Women"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <h3 className="text-4xl font-bold text-white">WOMEN</h3>
            </div>
          </Link>
          <Link to="/men" className="group relative h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80"
              alt="Men"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <h3 className="text-4xl font-bold text-white">MEN</h3>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
