import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container footer-content">
        
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon-box">
                <Terminal size={18} />
              </span>
              <span>CHAWAKORN.DEV</span>
            </div>
            <p>
              สร้างสรรค์ผลงานด้วยความใส่ใจในสถาปัตยกรรมซอฟต์แวร์ และโครงข่ายเน็ตเวิร์กที่มั่นคงปลอดภัย
            </p>
          </div>

          <div className="footer-social-links">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-pill" title="GitHub">
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-pill" title="LinkedIn">
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Designed with <Heart size={14} className="text-pink inline" /> for SPU Network Class.
          </p>

          <button onClick={scrollToTop} className="scroll-top-btn" title="กลับขึ้นด้านบน">
            <span>ขึ้นบนสุด</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
