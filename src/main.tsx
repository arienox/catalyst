import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import PortfolioPage from './pages/PortfolioPage.tsx';
import PaintingPage from './pages/PaintingPage.tsx';
import BookingPage from './pages/BookingPage.tsx';
import ShopPage from './pages/ShopPage.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'tattoo', element: <PortfolioPage /> },
      { path: 'painting', element: <PaintingPage /> },
      { path: 'booking', element: <BookingPage /> },
      { path: 'shop', element: <ShopPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
