import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal, Send, ArrowUpRight } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'หน้าแรก', href: '#home' },
    { name: 'ทักษะความสามารถ', href: '#skills' },
    { name: 'ผลงานเกม & เว็บ', href: '#projects' },
    { name: 'เกียรติบัตร & รางวัล', href: '#certificates' },
    { name: 'ประวัติการแข่งขัน', href: '#experience' },
    { name: 'ติดต่อเรา', href: '#contact' },
  ];

  return (
    <nav className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="nav-logo">
          <span className="logo-icon-box">
            <Terminal size={18} className="logo-svg" />
          </span>
          <span className="logo-text">
            PON<span className="text-accent">.DEV</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="nav-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-btn" 
            title={theme === 'dark' ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a href="#contact" className="btn btn-primary nav-cta">
            <span>ร่วมงานกัน</span>
            <Send size={15} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowUpRight size={16} />
                </a>
              ))}
              <a
                href="#contact"
                className="btn btn-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
                style={{ marginTop: '1rem', width: '100%' }}
              >
                <span>ติดต่อ / จ้างงาน</span>
                <Send size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
