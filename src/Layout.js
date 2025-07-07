// Layout.jsx
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-grow pt-20 bg-gray-50">
        <Outlet /> {/* Renders the current page here */}
      </main>
      <Footer />
    </div>
  );
}