import { products } from "../constants"

const popularProducts = () => {
  return (
    <div>
      <section 
        id="products"
        className="max-container max-sm:mt-12"
      >
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-center text-3xl font-bold mb-8">Popular Products</h2>
        </div>

      </section>
    </div>
  )
}

export default popularProducts