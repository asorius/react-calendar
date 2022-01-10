import React from 'react';
import './styles/error-element.css';
export default function ErrorElement({ message }) {
  return (
    <div className={`error-container ${message ? 'open' : ''}`}>{message}</div>
  );
}
