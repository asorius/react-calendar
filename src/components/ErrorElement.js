import React from 'react';
import './styling/error-element.css';
export default function ErrorElement({ message }) {
  return (
    <div className={`error-container ${message ? 'open' : ''}`}>{message}</div>
  );
}
