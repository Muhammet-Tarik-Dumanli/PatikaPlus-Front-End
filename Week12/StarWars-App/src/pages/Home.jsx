import React, { useEffect, useState } from 'react'
import { fetchStarships } from '../services/api';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Home() {
    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadStarships = async () => {
            const data = await fetchStarships(page);
            setStarships(prev => {
                const newItems = data.results.filter(newShip => !prev.some(existing => existing.uid === newShip.uid));
                return [...prev, ...newItems];
            });
        };
        loadStarships();
    }, [page]);

    const resetPage = () => {
        setPage(1);
        setStarships([]);
    };

    return (
        <div className="container">
            <h1>Star Wars Ships</h1>
            <SearchBar setStarships={setStarships} resetPage={resetPage} />
            <div className="starship-grid">
                {Array.isArray(starships) && starships.map((ship) => (
                    <Link key={ship.uid} to={`/starship/${ship.uid}`}>
                        <div className="starship-card">
                            <h3>{ship.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
            <button onClick={() => setPage(prev => prev + 1)} style={{ marginTop: "2rem" }}>Load More...</button>
        </div>
    )
}

export default Home