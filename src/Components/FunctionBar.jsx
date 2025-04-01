import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

const FilterBar = ({ setView, view }) => {
    const [filters, setFilters] = useState(["DRESSES", "TOPS", "OUTERWEAR"]);
    const [sort, setSort] = useState("Latest");

    const removeFilter = (filter) => {
        setFilters(filters.filter((item) => item !== filter));
    };

    return (
        <div className="flex items-center justify-between p-4 bg-neutral-50 border-b">
            {/* Selected Filters */}
            <div className="flex items-center gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className="border px-3 py-1 rounded-full flex items-center text-sm"
                        onClick={() => removeFilter(filter)}
                    >
                        {filter} ✕
                    </button>
                ))}
                <span className="text-sm">Showing 1–5 of 50 Results</span>
            </div>

            {/* Controls: Filter, Sort, View */}
            <div className="flex items-center gap-4">
                {/* Filter Button */}
                <button className="flex items-center gap-1 text-sm">
                    <SlidersHorizontal size={16} />
                    Filter
                </button>

                {/* Sorting Dropdown */}
                <select
                    className="text-sm bg-transparent border-none focus:outline-none"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="Latest">Latest</option>
                    <option value="Popular">Popular</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                </select>

                {/* View Toggle */}
                <div className="flex gap-2">
                    {/* List View */}
                    <button onClick={() => setView("list")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={view === "list" ? "black" : "gray"}
                            className="w-6 h-6"
                        >
                            <rect x="3" y="4" width="4" height="4" rx="1" />
                            <rect x="3" y="10" width="4" height="4" rx="1" />
                            <rect x="3" y="16" width="4" height="4" rx="1" />
                            <rect x="9" y="4" width="12" height="2" rx="1" />
                            <rect x="9" y="10" width="12" height="2" rx="1" />
                            <rect x="9" y="16" width="12" height="2" rx="1" />
                        </svg>
                    </button>

                    {/* Medium Grid View (3 cards per row) */}
                    <button onClick={() => setView("medium-grid")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={view === "medium-grid" ? "black" : "gray"}
                            className="w-6 h-6"
                        >
                            <rect x="4" y="4" width="7" height="7" rx="1" />
                            <rect x="13" y="4" width="7" height="7" rx="1" />
                            <rect x="4" y="13" width="7" height="7" rx="1" />
                            <rect x="13" y="13" width="7" height="7" rx="1" />
                        </svg>
                    </button>

                    {/* Small Grid View (More cards per row) */}
                    <button onClick={() => setView("grid")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={view === "grid" ? "black" : "gray"}
                            className="w-6 h-6"
                        >
                            <rect x="3" y="3" width="5" height="5" rx="1" />
                            <rect x="10" y="3" width="5" height="5" rx="1" />
                            <rect x="17" y="3" width="5" height="5" rx="1" />
                            <rect x="3" y="10" width="5" height="5" rx="1" />
                            <rect x="10" y="10" width="5" height="5" rx="1" />
                            <rect x="17" y="10" width="5" height="5" rx="1" />
                            <rect x="3" y="17" width="5" height="5" rx="1" />
                            <rect x="10" y="17" width="5" height="5" rx="1" />
                            <rect x="17" y="17" width="5" height="5" rx="1" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
