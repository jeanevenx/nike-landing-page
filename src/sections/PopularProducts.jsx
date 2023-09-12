import { products } from '../constants'
import ProductCard from '../components/ProductCard';

const popularProducts = () => {
  return (
    <div>
      <section 
        id="products"
        className="max-container max-sm:mt-12"
      >
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red inline-block mt-3">Popular</span> Products</h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Experience top-notch quality and style with our sought-after selections. 
            At Nike, we're dedicated to delivering the finest in sportswear and lifestyle 
            products that transcend trends and elevate your game. Discover a world of comfort, 
            design, and value like never before
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 
                      sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
        >
          {
            products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))
          }

        </div>

      </section>
    </div>
  )
}

export default popularProducts