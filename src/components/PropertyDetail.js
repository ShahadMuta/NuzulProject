// src/components/PropertyDetail.js
import React, { useEffect, useState } from 'react';
import { fetchProperty } from '../api';
import { useParams } from 'react-router-dom';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const getProperty = async () => {
      const response = await fetchProperty(id);
      setProperty(response.data);
    };

    getProperty();
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>{property.title}</h2>
      <img src={property.thumbnail} className="img-fluid" alt={property.title} />
      <p>{property.address}</p>
      <p><strong>${property.price}</strong></p>
      <p>{property.description}</p>
    </div>
  );
};

export default PropertyDetail;
