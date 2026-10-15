import React from 'react';
import { ArrowRight, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Bio & Intros */}
        <div className="hero-left">
          <div className="badge hero-badge">
            <span className="pulsing-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-heading">
            สวัสดีครับ ผม <span className="gradient-text">{personalInfo.name}</span>
            <br />
            <span className="hero-subtext gradient-text-alt">{personalInfo.title}</span>
          </h1>

          <p className="hero-description">
            {personalInfo.bio}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-glow">
              <span>สำรวจผลงาน</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-outline">
              <span>พูดคุยปรึกษา</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              className="btn btn-outline"
              title="ดาวน์โหลด Resume"
              onClick={(e) => {
                e.preventDefault();
                alert('คุณสามารถเปลี่ยนไฟล์ Resume เป็นลิงก์ PDF จริงได้ใน portfolioData.js');
              }}
            >
              <Download size={17} />
              <span>Resume</span>
            </a>
          </div>

          {/* Key Quick Stats */}
          <div className="hero-stats-grid">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass-card">
                <div className="stat-number gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Interactive Card / Avatar Showcase */}
        <div className="hero-right">
          <div className="profile-showcase-wrapper">
            <div className="showcase-glow"></div>
            <div className="glass-card profile-card">
              
              <div className="profile-header-banner">
                <div className="code-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="tech-badge-pill">network_class_2026.tsx</div>
              </div>

              <div className="profile-image-container">
                <img
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} (${personalInfo.nickname})`}
                  className="profile-img"
                />
                <div className="profile-floating-badge badge-top">
                  <Sparkles size={16} className="text-secondary" />
                  <span>Full-Stack & Network</span>
                </div>
                <div className="profile-floating-badge badge-bottom">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>Verified Clean Code</span>
                </div>
              </div>

              <div className="profile-info-footer">
                <div className="profile-titles">
                  <h4>{personalInfo.name}</h4>
                  <p>{personalInfo.thaiName}</p>
                </div>

                <div className="profile-socials">
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub">
                    <GithubIcon size={18} />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn">
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
