import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Search(){
    const { coffee } = useOutletContext();
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);
    };

    const filteredCoffeeItems = coffee.filter((item) =>
    item.name.toLowerCase().includes(search)
    );

    return(
        <>
            <input
                value={search}
                onChange={handleSearchChange}
                type="text"
                placeholder="Search"
            />
            {filteredCoffeeItems.map((item) => (
                <div key={item.id}>
                    <p >{item.name} </p>
                </div>
            ))}
        </>
    );
}

export default Search;
