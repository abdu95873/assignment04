export default function Footer() {
  return (
    <footer className="bg-white shadow-sm rounded-lg mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
         
        </div>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-600 font-medium text-sm">
          <a href="/">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-700 text-xl">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>Copyright © 2025 shadcndesign.com. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}
