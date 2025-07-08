import React, { useEffect, useState } from 'react'
import { fetchStarships } from '../services/api';
import { Link } from 'react-router-dom';

function Home() {
    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadStarships = async () => {
            const data = await fetchStarships(page);
            setStarships(prev => [...prev, ...data.results]);
        };
        loadStarships();
    }, [page]);

    return (
        <div>
            <h1>Star Wars Ships</h1>
            <div>
                {starships.map((ship) => (
                    <Link key={ship.uid} to={`/starship/${ship.uid}`}>
                        <div>
                            <h3>{ship.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
            <button onClick={() => setPage(prev => prev+1)}>More...</button>
        </div>
    )
}

export default Home