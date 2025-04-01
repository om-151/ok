import { useState, useEffect } from "react";
import { Heart, Star } from "lucide-react";

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    const rating = 3;

    return (
        <div className="bg-[#faf3eb] py-10 px-4 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="flex rounded-xl overflow-hidden items-center">
                        {/* Product Image Section */}
                        <div className="w-[450px] flex items-center justify-center">
                            <div className="w-full aspect-square rounded-lg overflow-hidden flex items-center justify-center">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div className="w-2/2 p-7 flex flex-col justify-center">
                            <div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                        <p className="text-black text-sm">Accessories, Sunglasses</p>
                                    </div>

                                    {/* Static Rating & Review (Aligned to Right) */}
                                    <div className="flex flex-col items-center text-black">
                                        <div className="flex">
                                            {[...Array(5)].map((_, index) => (
                                                <Star
                                                    key={index}
                                                    className={`w-[12px] h-[12px] mx-[1px] ${index < rating ? "text-black fill-black" : "text-gray-300 fill-gray-300"}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-gray-500 text-xs mt-2">250 Reviews</span>
                                    </div>
                                </div>

                                {/* Static Description */}
                                <p className="text-gray-500 text-sm my-3 leading-relaxed pr-[20px]">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.
                                </p>
                            </div>

                            {/* Bottom Section - Price on Left, Buttons on Right */}
                            <div className="flex justify-between items-end">
                                {/* Left Side: "Price" Label & Actual Price */}
                                <div>
                                    <p className="text-sm text-gray-500">Price:</p>
                                    <p className="text-black text-lg font-semibold">${product.price.toFixed(2)}</p>
                                </div>

                                {/* Right Side: Buttons */}
                                <div className="flex items-center gap-2">
                                    {/* Add To Cart Button with Scan Effect */}
                                    <button className="relative group overflow-hidden border-2 border-transparent px-5 py-2 rounded-lg bg-black text-white cursor-pointer transition-all duration-300 hover:border-gray-600">
                                        <span className="relative z-10">Add To Cart</span>

                                        {/* Scanning Layer */}
                                        <span className="absolute inset-0 bg-white opacity-15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out"></span>
                                    </button>

                                    {/* Wishlist Button */}
                                    <button className="border p-2 rounded-lg cursor-pointer bg-white">
                                        <Heart className="w-5 h-5 text-black fill-black" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
