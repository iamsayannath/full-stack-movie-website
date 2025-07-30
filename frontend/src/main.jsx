
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Context from "../src/context/Context.jsx";

createRoot(document.getElementById('root')).render(
  <Context>
    <App />
  </Context>
);
