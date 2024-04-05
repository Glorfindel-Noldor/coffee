import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Search(){
    const { coffee } = useOutletContext();


    const [search, setSearch] = useState('');
    const [filteredCoffee, setFilteredCoffee] = useState(coffee);

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);
        const filtered = coffee.filter((item) =>
            item.name.toLowerCase().includes(searchTerm)
        );
        setFilteredCoffee(filtered);
    };

    return(
        <>
            <input
                value={search}
                onChange={handleSearchChange}
                type="text"
                placeholder="Search"
            />
            {filteredCoffee.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </>
    );
}

export default Search;
