// src/components/PropertyForm.js
import React, { useState } from 'react';
import { createProperty, updateProperty } from '../api';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkerAlt, faDollarSign, faImage, faAlignLeft } from '@fortawesome/free-solid-svg-icons';

const PropertyForm = ({ property }) => {
  const [formData, setFormData] = useState(property || {
    title: '',
    address: '',
    price: '',
    thumbnail: '',
    description: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (property) {
      await updateProperty(property.id, formData);
    } else {
      await createProperty(formData);
    }
    navigate('/');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="col-md-6 p-4 shadow rounded" style={{ backgroundColor: '#F9F9F9' }}>
        <h2 className="mb-4 text-center" style={{ color: '#333333' }}>
          {property ? 'تعديل العقار' : 'إضافة عقار'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              <FontAwesomeIcon icon={faHome} className="me-2" /> العنوان
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
              required
              style={{ borderColor: '#CCCCCC' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> العنوان
            </label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-control"
              required
              style={{ borderColor: '#CCCCCC' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              <FontAwesomeIcon icon={faDollarSign} className="me-2" /> السعر
            </label>
            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className="form-control"
              required
              style={{ borderColor: '#CCCCCC' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="thumbnail" className="form-label">
              <FontAwesomeIcon icon={faImage} className="me-2" /> رابط الصورة
            </label>
            <input
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              className="form-control"
              style={{ borderColor: '#CCCCCC' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              <FontAwesomeIcon icon={faAlignLeft} className="me-2" /> الوصف
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              required
              style={{ borderColor: '#CCCCCC' }}
            />
          </div>
          <button type="submit" className="btn btn-success w-100">حفظ العقار</button>
        </form>
      </div>
    </div>
  );
};

export default PropertyForm;
