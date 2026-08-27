import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Images/Logo.png"; 
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
     ${isActive
       ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
       : "text-neutral-400 hover:text-white"}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

         
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img src={logo} alt="Photography Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                عدسة
              </span>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

      
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
              <NavLink to="/" end className={linkClass}>الرئيسية</NavLink>
              <NavLink to="/blog" className={linkClass}>المدونة</NavLink>
              <NavLink to="/about" className={linkClass}>من نحن</NavLink>
            </div>
          </div>

      
          <div className="hidden md:flex items-center gap-3">
            <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300">
              <FaSearch size={20} />
            </button>
            <Link to="/blog" className="btn-primary text-sm">
              ابدأ القراءة
            </Link>
          </div>

         
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300"
          >
            ☰
          </button>
        </div>

   
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="bg-[#161616] rounded-2xl p-4 border border-[#262626]">
            <div className="flex flex-col space-y-1">
              <NavLink 
                to="/" 
                end 
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium ${
                    isActive ? "bg-orange-500/10 text-orange-500" : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                الرئيسية
              </NavLink>

              <NavLink 
                to="/blog" 
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium ${
                    isActive ? "bg-orange-500/10 text-orange-500" : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                المدونة
              </NavLink>

              <NavLink 
                to="/about" 
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium ${
                    isActive ? "bg-orange-500/10 text-orange-500" : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                من نحن
              </NavLink>

              <Link 
                to="/blog" 
                onClick={() => setOpen(false)}
                className="btn-primary text-sm text-center mt-2"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
