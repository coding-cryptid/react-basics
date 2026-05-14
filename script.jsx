import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.querySelector('#root')).render(<p>Hello world</p>);

ReactDOM.createRoot(document.querySelector('#root')).render(
  <div>
    <h1>My List of Food</h1>
    <ul>
      <li>Cheese Burger</li>
      <li>Spicy Boneless Wings</li>
      <li>Chorizo Tacos</li>
    </ul>
  </div>
);
