import 'primereact/resources/themes/saga-blue/theme.css'; // Tema
import 'primereact/resources/primereact.min.css'; // Componentes de PrimeReact
import 'primeicons/primeicons.css'; // Íconos de PrimeIcons

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './components/CartContext';  // Mantiene la ruta correcta de CartContext

ReactDOM.render(
  <CartProvider> {/* CartProvider abre aquí */}
    <App />
  </CartProvider>,
  document.getElementById('root')
);
