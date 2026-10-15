import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    setSubmitted(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="section-header">
          <span className="sub-badge">Get In Touch</span>
          <h2>ติดต่อ & ร่วมงานกัน</h2>
          <p>
            มีโปรเจกต์ที่สนใจ อยากปรึกษางาน หรือต้องการแลกเปลี่ยนความคิดเห็น ทักทายมาได้เลยครับ!
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Info Column */}
          <div className="contact-info-card glass-card">
            <h3>ข้อมูลติดต่อ</h3>
            <p className="contact-info-subtitle">
              ยินดีพูดคุยทุกไอเดียและงานท้าทายใหม่ๆ เสมอ พร้อมตอบกลับอย่างรวดเร็ว
            </p>

            <div className="contact-methods">
              
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-meta">
                  <span className="meta-label">Email Address</span>
                  <div className="email-copy-row">
                    <a href={`mailto:${personalInfo.email}`} className="meta-val">
                      {personalInfo.email}
                    </a>
                    <button 
                      onClick={copyEmailToClipboard} 
                      className="copy-btn"
                      title="คัดลอกอีเมล"
                    >
                      {copiedEmail ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-meta">
                  <span className="meta-label">เบอร์โทรศัพท์</span>
                  <span className="meta-val">{personalInfo.phone}</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-meta">
                  <span className="meta-label">ที่อยู่ / พื้นที่ทำงาน</span>
                  <span className="meta-val">{personalInfo.location}</span>
                </div>
              </div>

            </div>

            <div className="working-hours-card">
              <span className="pulsing-green-dot"></span>
              <div>
                <strong>สถานะปัจจุบัน</strong>
                <p>เปิดรับงานฟรีแลนซ์, โปรเจกต์วิจัย หรือโอกาสงานประจำ</p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-card glass-card">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} className="text-emerald" />
                </div>
                <h3>ส่งข้อความเรียบร้อยแล้ว!</h3>
                <p>
                  ขอบคุณสำหรับข้อความครับ ผมจะรีบติดต่อกลับไปยัง <strong>{formData.email}</strong> โดยเร็วที่สุด
                </p>
                <button 
                  className="btn btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  style={{ marginTop: '1.5rem' }}
                >
                  ส่งข้อความใหม่อีกครั้ง
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">ชื่อ - นามสกุล หรือชื่อองค์กร *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="เช่น สมชาย ใจดี / SPU Co., Ltd."
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">อีเมลติดต่อกลับ *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your-email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">หัวข้อเรื่อง</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="เช่น ปรึกษาโปรเจกต์เว็บ, ติดต่องาน Network"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">รายละเอียดข้อความ *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="เขียนรายละเอียดสิ่งที่คุณต้องการพูดคุย..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-glow form-submit-btn">
                  <span>ส่งข้อความเลย</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
