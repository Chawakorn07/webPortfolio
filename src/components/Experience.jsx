import React from 'react';
import { Briefcase, GraduationCap, Calendar, Award, Star, Quote } from 'lucide-react';
import { experienceTimeline, testimonialsData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        
        <div className="section-header">
          <span className="sub-badge">Career & Education</span>
          <h2>เส้นทางการเรียนรู้และประสบการณ์</h2>
          <p>
            บันทึกการเติบโต การพัฒนาความรู้ และการสร้างสรรค์โปรเจกต์ที่ผ่านมา
          </p>
        </div>

        {/* Timeline Component */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {experienceTimeline.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-node">
                {index === 0 ? <Award size={18} /> : index === 1 ? <Briefcase size={18} /> : <GraduationCap size={18} />}
              </div>

              <div className="timeline-content glass-card">
                <div className="timeline-date">
                  <Calendar size={14} />
                  <span>{item.year}</span>
                </div>

                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-org text-secondary">{item.organization}</h4>
                <p className="timeline-desc">{item.description}</p>

                <div className="timeline-badges">
                  {item.badges.map((b, i) => (
                    <span key={i} className="timeline-badge-tag">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials / Feedback section */}
        <div className="testimonials-box">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="sub-badge">Endorsements</span>
            <h3 style={{ fontSize: '1.8rem' }}>ความคิดเห็นและเสียงตอบรับ</h3>
          </div>

          <div className="testimonials-grid">
            {testimonialsData.map((t, idx) => (
              <div key={idx} className="testimonial-card glass-card">
                <div className="quote-icon">
                  <Quote size={28} />
                </div>
                <p className="testimonial-text">"{t.comment}"</p>

                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="author-avatar" />
                  <div>
                    <h5>{t.name}</h5>
                    <span>{t.role} • {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
