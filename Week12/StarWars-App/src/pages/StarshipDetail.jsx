import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchStarshipById } from '../services/api';

function StarshipDetail() {

  const { id } = useParams();
  const [starship, setStarship] = useState();

  useEffect(() => {
    const load = async () => {
      const data = await fetchStarshipById(id);
      setStarship(data.result.properties);
    };

    load();
  }, [id]);

  if (!starship) return <p>Loading...</p>

  return (
    <div className="detail-container">
      <h2>{starship.name}</h2>
      <p><strong>Model:</strong> {starship.model}</p>
      <p><strong>Starship Class:</strong> {starship.starship_class}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
      <p><strong>Cost:</strong> {starship.cost_in_credits}</p>
      <p><strong>Length:</strong> {starship.length}</p>
      <p><strong>Passengers:</strong> {starship.passengers}</p>
      <p><strong>Crew:</strong> {starship.crew}</p>
      <p><strong>Max Speed:</strong> {starship.max_atmosphering_speed}</p>
      <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
      <p><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</p>

      <Link className="back-link" to="/">🔙 Go Home</Link>
    </div>
  )
}

export default StarshipDetail