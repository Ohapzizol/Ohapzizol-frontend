import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import './style/globalStyle.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme.ts';

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </CookiesProvider>
);
