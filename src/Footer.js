// Header.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
  
      {/* App Name (Left) */}
      <div className="text-xl font-bold text-gray-900">
        LoungeNavigator
      </div>
  
      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
        <a href="#features" className="hover:text-gray-900 transition">Features</a>
        <a href="#how-it-works" className="hover:text-gray-900 transition">How It Works</a>
        <a href="#terms" className="hover:text-gray-900 transition">Terms</a>
        <a href="#privacy" className="hover:text-gray-900 transition">Privacy Policy</a>
        <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
      </div>
  
      {/* Social Icons */}
      <div className="flex gap-4">
        {/* Twitter/X */}
        <a href="https://x.com/LoungeNavigator" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg className="w-5 h-5 text-gray-600 hover:text-gray-900 transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </a>
  
        {/* Instagram */}
        <a href="https://instagram.com/LoungeNavigator" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg className="w-5 h-5 text-gray-600 hover:text-gray-900 transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.32 3.608 1.296.975.976 1.233 2.243 1.296 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.32 2.633-1.296 3.608-.976.975-2.243 1.233-3.608 1.296-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.32-3.608-1.296-.975-.976-1.233-2.243-1.296-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.32-2.633 1.296-3.608C4.504 2.483 5.771 2.225 7.137 2.163 8.403 2.105 8.783 2.093 12 2.093zm0 1.838c-3.143 0-3.51.012-4.753.068-1.006.047-1.66.217-2.234.465a3.774 3.774 0 0 0-1.38.908 3.774 3.774 0 0 0-.908 1.38c-.248.574-.418 1.228-.465 2.234C2.175 8.49 2.163 8.857 2.163 12c0 3.143.012 3.51.068 4.753.047 1.006.217 1.66.465 2.234.214.506.496.967.908 1.38.413.412.874.694 1.38.908.574.248 1.228.418 2.234.465 1.243.056 1.61.068 4.753.068s3.51-.012 4.753-.068c1.006-.047 1.66-.217 2.234-.465a3.774 3.774 0 0 0 1.38-.908 3.774 3.774 0 0 0 .908-1.38c.248-.574.418-1.228.465-2.234.056-1.243.068-1.61.068-4.753s-.012-3.51-.068-4.753c-.047-1.006-.217-1.66-.465-2.234a3.774 3.774 0 0 0-.908-1.38 3.774 3.774 0 0 0-1.38-.908c-.574-.248-1.228-.418-2.234-.465-1.243-.056-1.61-.068-4.753-.068zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
          </svg>
        </a>
      </div>
  
    </div>
  </footer>
  );
}