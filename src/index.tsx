import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

console.log('🚀 Starting DOLLUXE app...');

const rootElement = document.getElementById('root');
if (rootElement) {
  console.log('✅ Root element found, creating React root...');
  try {
    const root = ReactDOM.createRoot(rootElement);
    console.log('✅ React root created, rendering app...');
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('🎉 DOLLUXE app rendered successfully!');
  } catch (error) {
    console.error('❌ Error rendering React app:', error);
    rootElement.innerHTML = '<div style="color: red; padding: 20px; font-family: monospace;">Error loading DOLLUXE app. Check console for details.</div>';
  }
} else {
  console.error('❌ Root element not found!');
  document.body.innerHTML = '<div style="color: red; padding: 20px; font-family: monospace;">Root element not found! Cannot load DOLLUXE app.</div>';
}
