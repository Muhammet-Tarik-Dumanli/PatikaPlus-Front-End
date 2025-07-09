import React, { useState } from 'react'
import { searchStarships } from '../services/api'

function SearchBar({ setStarships, resetPage }) {

    const [query, setQuery] = useState("");

    const handleSearch = async () => {
        if (!query) return;

        const data = await searchStarships(query);
        console.log("Arama Sonucu:", data);
        setStarships(data);

        if (resetPage) resetPage();
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        if (e.target.value === "" && resetPage) {
            resetPage();
        }
    };

    return (
        <div>
            <input type="text" placeholder='Search with name' value={query} onChange={handleInputChange} />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar