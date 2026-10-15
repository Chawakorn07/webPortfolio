import React, { useState } from 'react';
import { 
  Gamepad2, Code2, Cpu, Sparkles, Layout, 
  FileCode, Palette, Server, Wifi, Network, 
  Terminal, Boxes, ShieldCheck, Check, Star
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Dynamic icon mapper helper
const renderIcon = (name) => {
  const iconProps = { size: 20, className: "skill-icon" };
  switch (name) {
    case 'Gamepad2': return <Gamepad2 {...iconProps} />;
    case 'Code2': return <Code2 {...iconProps} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'Layout': return <Layout {...iconProps} />;
    case 'FileCode': return <FileCode {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'Server': return <Server {...iconProps} />;
    case 'Wifi': return <Wifi {...iconProps} />;
    case 'Network': return <Network {...iconProps} />;
    case 'Terminal': return <Terminal {...iconProps} />;
    case 'Boxes': return <Boxes {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('gameDev');

  const tabs = [
    { id: 'gameDev', label: '🎮 Unity & C# (ได้ดี 7/10)', count: skillsData.gameDev.length },
    { id: 'webDev', label: '🌐 Web Development (พอใช้ 5/10)', count: skillsData.webDev.length },
    { id: 'network', label: '🔌 Network (4/10)', count: skillsData.network.length },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        <div className="section-header">
          <span className="sub-badge">Skills & Proficiency</span>
          <h2>ความเชี่ยวชาญ & ทักษะทางเทคนิค</h2>
          <p>
            ประเมินระดับความสามารถตามจริง: พัฒนาเกมด้วย Unity C# ในระดับดี พร้อมทักษะการสร้างเว็บ และความรู้พื้นฐานเน็ตเวิร์ก
          </p>
        </div>

        {/* Quick Skill Level Summary Cards */}
        <div className="skills-summary-grid">
          <div className="summary-pill-card glass-card">
            <div className="pill-header">
              <Gamepad2 size={24} className="text-secondary" />
              <span className="pill-score">7 / 10</span>
            </div>
            <h4>Unity Game Dev (C#)</h4>
            <p>ระดับดี • เขียนสคริปต์, ระบบฟิสิกส์, คอนโทรลเลอร์ และเกม 2D/3D</p>
          </div>

          <div className="summary-pill-card glass-card">
            <div className="pill-header">
              <Layout size={24} className="text-emerald" />
              <span className="pill-score">5 / 10</span>
            </div>
            <h4>Web Development</h4>
            <p>ระดับพอใช้ • สร้างหน้าเว็บ Responsive, React, JavaScript, HTML/CSS</p>
          </div>

          <div className="summary-pill-card glass-card">
            <div className="pill-header">
              <Wifi size={24} className="text-pink" />
              <span className="pill-score">4 / 10</span>
            </div>
            <h4>Network & Systems</h4>
            <p>ระดับพื้นฐาน • Packet Tracer, Subnetting, OSI Layer, Wireshark</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs-container">
          <div className="skills-tabs glass-card">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`skill-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="tab-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {skillsData[activeTab].map((skill, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrap">
                  {renderIcon(skill.icon)}
                </div>
                <div className="skill-level-text">{skill.scoreText}</div>
              </div>

              <div className="skill-info">
                <h4>{skill.name}</h4>
                <div className="progress-track">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Highlight Box */}
        <div className="glass-card network-highlight-banner">
          <div className="banner-left">
            <div className="highlight-icon-box">
              <Gamepad2 size={32} className="text-secondary" />
            </div>
            <div>
              <h3>Unity C# & Interactive Multimedia Focus</h3>
              <p>สามารถออกแบบ Logic การเล่นเกม จัดการ Game Loop, Event System, Coroutine, และการประกอบ Scene ใน Unity ได้อย่างเป็นระบบ</p>
            </div>
          </div>
          <div className="banner-right">
            <div className="check-item"><Check size={16} /> Unity C# (ได้ดี 7/10)</div>
            <div className="check-item"><Check size={16} /> Web Dev (พอใช้ 5/10)</div>
            <div className="check-item"><Check size={16} /> Network (4/10)</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
