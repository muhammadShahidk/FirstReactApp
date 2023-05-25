import * as React from 'react';
import { flushSync } from 'react-dom';
import './style.css';

function MyButton() {
  return <button className="btn btn-primary">I'm a button</button>;
}

export default function App() {
  return (
    <div className="container">
      <div>
        <h1>Welcome to my app</h1>
        <Card header={'headeer'} body={'no'} title={'work hared'} />
      </div>
    </div>
  );
}

function FistComponent() {
  return <h1>my name is muhammad shahid</h1>;
}

function Card({ header, body, title }) {
  function myname() {
    alert('how are you mister');
  }
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <a href="#" onClick={myname} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
