import React from 'react';
import Timer from './Timer';
import './App.css';

export default function App() {
  return (
    <div>
      <header className="header">
        <h1 className="title">Split Timer</h1>
      </header>
      <Timer />
    </div>
  );
}
