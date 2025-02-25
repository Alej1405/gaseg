
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router.tsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(

    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
);
