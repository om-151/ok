import { useState, useEffect } from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"; // Heroicons for outline icons

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json") // Load JSON data from public folder
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="relative rounded-xl transition duration-300 group"
                >
                    {/* Discount Badge */}
                    <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow z-1">
                        {product.discount}
                    </span>

                    {/* Product Image & Quick View Button */}
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:-translate-y-5"
                        />

                        {/* Quick View Button (Slides up on hover) */}
                        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white px-4 py-2 rounded-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 border border-4 border-white hover:bg-[#CC0D39] cursor-pointer">
                            QUICK VIEW
                        </button>
                    </div>

                    {/* Product Details */}
                    <div className="mt-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                    </div>

                    {/* Wishlist & Add to Cart Icons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <button className="bg-[#0000004d] p-2 rounded-full shadow transition-transform duration-300 cursor-pointer">
                            <HeartIcon className="w-6 h-6 text-white" />
                        </button>
                        <button className="bg-[#0000004d] p-2 rounded-full shadow transition-transform duration-300 cursor-pointer">
                            <ShoppingCartIcon className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
