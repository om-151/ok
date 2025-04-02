import { useState, useEffect } from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const IconButton = ({ children }) => {
    const [hover, setHover] = useState(false);

    return (
        <button
            className="relative bg-[#0000004d] p-2 rounded-full shadow transition-transform duration-300 cursor-pointer overflow-hidden"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span
                className={`absolute top-0 left-0 w-full h-full bg-white opacity-20 transition-transform duration-500 ${hover ? 'translate-x-full' : '-translate-x-full'}`}
            ></span>
            <span className="relative z-10 flex items-center justify-center">
                {children}
            </span>
        </button>
    );
};

const AnimatedButton = ({ children }) => {
    const [hover, setHover] = useState(false);

    return (
        <button
            className="relative bg-black text-white px-4 py-2 rounded-full border-4 border-white cursor-pointer overflow-hidden transition-all duration-300 hover:bg-[#CC0D39]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span
                className={`absolute top-0 left-0 w-full h-full bg-white opacity-20 transition-transform duration-500 ${hover ? 'translate-x-full' : '-translate-x-full'}`}
            ></span>
            <span className="relative z-10">{children}</span>
        </button>
    );
};

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
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
                    <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow z-1">
                        {product.discount}
                    </span>

                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:-translate-y-5"
                        />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <AnimatedButton>QUICK VIEW</AnimatedButton>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                    </div>

                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <IconButton>
                            <HeartIcon className="w-6 h-6 text-white" />
                        </IconButton>
                        <IconButton>
                            <ShoppingCartIcon className="w-6 h-6 text-white" />
                        </IconButton>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
