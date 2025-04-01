import { useState } from "react";
import FilterBar from "./FunctionBar";
import ProductCard from "./ProductCard"; // Grid View
import ListView from "./ListView"; // List View

const ProductList = () => {
    const [view, setView] = useState("grid"); // Default is grid view

    return (
        <div>
            <FilterBar setView={setView} view={view} />
            {view === "grid" ? <ProductCard /> : <ListView />}
        </div>
    );
};

export default ProductList;
