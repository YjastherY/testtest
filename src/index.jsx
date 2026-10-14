import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const dom = (
  <App />
);

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(dom);