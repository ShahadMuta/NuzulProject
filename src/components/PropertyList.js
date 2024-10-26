// src/components/PropertyList.js
import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../api';
import { Link } from 'react-router-dom';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const response = await fetchProperties();
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    getProperties();
  }, []);

  return (
    <div className="container">
      {/* قسم "عن نزل" */}
      <div className="about-section mb-5 p-4" style={{ backgroundColor: '#FFC107', color: '#333333' }}>
        <h2 className="text-center">NUZUL | نزل</h2>
        <p className="text-center">
          منصة سعودية تخدم قطاع الأعمال في السوق العقاري بشكل شامل. نقدم حلول رقمية ذكية في إدارة العروض العقارية والمبيعات والإيجارات اليومية، والمدفوعات بنظام سهل.
        </p>
      </div>

      {/* قسم "الخدمات" */}
      <div className="services-section mb-5 p-4" style={{ backgroundColor: '#FFF9E6' }}>
        <h3 className="text-center" style={{ color: '#555555' }}>خدماتنا</h3>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card" style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <div className="card-body text-center">
                <h5 className="card-title">إدارة العروض</h5>
                <p className="card-text">نقدم أدوات متقدمة لإدارة العروض العقارية بكفاءة عالية.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <div className="card-body text-center">
                <h5 className="card-title">الإيجارات اليومية</h5>
                <p className="card-text">حلول مرنة لإدارة الإيجارات اليومية بسهولة ويسر.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <div className="card-body text-center">
                <h5 className="card-title">الدفع الرقمي</h5>
                <p className="card-text">نظام سهل وآمن للمدفوعات الرقمية.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قسم "قائمة العقارات" */}
      <h2 className="mb-4 text-center" style={{ color: '#333333' }}>قائمة العقارات</h2>
      <div className="row">
        {properties.map(property => (
          <div className="col-md-4 mb-4" key={property.id}>
            <div className="card" style={{ backgroundColor: '#F5F5F5', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src={property.thumbnail} className="card-img-top" alt={property.title} />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text">{property.address}</p>
                <p className="card-text"><strong>${property.price}</strong></p>
                <Link to={`/property/${property.id}`} className="btn btn-warning">عرض التفاصيل</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
