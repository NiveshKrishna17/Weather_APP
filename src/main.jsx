import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from "react-hot-toast"
import { QueryClientProvider } from "react-query"
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { queryClient } from "./React-Query"
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" />
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
