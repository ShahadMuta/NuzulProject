// src/api.js
import axios from 'axios';

const API_URL = 'https://api.example.com/properties'; 

export const fetchProperties = () => axios.get(API_URL);
export const fetchProperty = (id) => axios.get(`${API_URL}/${id}`);
export const createProperty = (property) => axios.post(API_URL, property);
export const updateProperty = (id, property) => axios.put(`${API_URL}/${id}`, property);
export const deleteProperty = (id) => axios.delete(`${API_URL}/${id}`);
