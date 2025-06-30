// Layout.jsx
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-20 bg-gray-50">
        <Outlet /> {/* Renders the current page here */}
      </main>
      <Footer />
    </div>
  );
}