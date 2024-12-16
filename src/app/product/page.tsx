'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../components/CartContext'; // Adjust path as needed

const products = [
  { id: '1', name: 'Product 1', price: '$49.99', image: '/products/product1.png' },
  { id: '2', name: 'Product 2', price: '$59.99', image: '/products/product2.png' },
  { id: '3', name: 'Product 3', price: '$69.99', image: '/products/product3.png' },
  { id: '4', name: 'Product 4', price: '$79.99', image: '/products/product4.png' },
  { id: '5', name: 'Product 5', price: '$89.99', image: '/products/product5.png' },
  { id: '6', name: 'Product 6', price: '$99.99', image: '/products/product6.png' },
  { id: '7', name: 'Product 7', price: '$109.99', image: '/products/product7.png' },
  { id: '8', name: 'Product 8', price: '$119.99', image: '/products/product8.png' },
  { id: '9', name: 'Product 9', price: '$129.99', image: '/products/product9.png' },
  { id: '10', name: 'Product 10', price: '$139.99', image: '/products/product1.png' },
  { id: '11', name: 'Product 11', price: '$149.99', image: '/products/product2.png' },
  { id: '12', name: 'Product 12', price: '$159.99', image: '/products/product3.png' },
];

export default function ProductPage() {
  const { addToCart } = useCart(); // Get addToCart function from context

  return (
    <div className="product-page">
      <h1 className="text-start text-3xl font-bold mx-48 mt-11 mb-8">Our Products</h1>

      {/* Product Grid */}
      <div className="product-grid grid grid-cols-4 gap-4 mx-36">
        {products.map((product) => (
          <div key={product.id} className="product-item p-4 rounded shadow-md">
            <Link href={`/products/${product.id}`}>
              <div className="cursor-pointer group">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={312}
                  height={312}
                  className="w-[312px] h-[312px] object-contain mb-4 rounded group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="product-title text-lg font-semibold mb-2">{product.name}</h3>
              </div>
            </Link>
            <p className="product-price text-sm text-gray-600 mb-4">{product.price}</p>
            <button
              onClick={() => addToCart(product)} // Add product to cart on click
              className="w-8 h-8 bg-gray-200 rounded-md hover:bg-blue-500 flex justify-center items-center"
            >
              <Image
                src="/Cart.png" // Ensure this is the correct path to your cart icon
                alt="Add to Cart"
                width={16}
                height={16}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-200 py-8 h-auto mt-16 w-full">
        <div className="text-center">
          <p className="text-black text-4xl mb-4">Or subscribe to the newsletter.</p>
          <div className="flex justify-center items-center mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l-md px-4 py-2 w-64 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button className="bg-transparent border border-l-0 border-gray-300 rounded-r-md px-6 py-2 text-blue-500 underline hover:no-underline">
              Submit
            </button>
          </div>
          <h3 className="text-3xl font-semibold mt-12 mb-6">Follow Products And Discounts On Instagram</h3>
          <div className="product-images flex justify-center gap-4 mb-20 mt-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Image
                key={num}
                src={`/products/product${num}.png`} // Corrected syntax for dynamic src
                alt={`Product ${num}`} // Corrected alt text syntax
                width={150}
                height={150}
                className="rounded object-cover transform transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
