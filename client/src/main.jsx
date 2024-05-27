import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App.jsx';
import './index.css';
import { TransactionsProvider } from "./context/TransactionContext";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
    <TransactionsProvider>
        <App />
    </TransactionsProvider>
);
