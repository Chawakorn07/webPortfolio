import React, { useState } from 'react';
import { Award, Medal, Calendar, ExternalLink, Eye, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
import { getAssetUrl } from '../utils/imageHelper';

const Certificates = () => {
  const [activeModalCert, setActiveModalCert] = useState(null);

  const getBadgeClass = (color) => {
    switch (color) {
      case 'gold': return 'badge-gold';
      case 'silver': return 'badge-silver';
      case 'cyan': return 'badge-cyan';
      case 'blue': return 'badge-blue';
      case 'purple': return 'badge-pink';
      default: return 'badge-gold';
    }
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">

        <div className="section-header">
          <span className="sub-badge">Certificates & Awards</span>
          <h2>เกียรติบัตรและรางวัลแห่งความภาคภูมิใจ</h2>
          <p>
            การันตีทักษะด้านการเขียนโปรแกรมและการพัฒนาซอฟต์แวร์ ด้วยรางวัลระดับชาติและโครงการระดับนานาชาติ
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="cert-card glass-card">
              
              <div className="cert-image-wrap">
                <img src={getAssetUrl(cert.image)} alt={cert.title} className="cert-img" loading="lazy" />
                <div className="cert-overlay">
                  <button 
                    className="btn-overlay"
                    onClick={() => setActiveModalCert(cert)}
                  >
                    <Eye size={18} />
                    <span>ดูใบประกาศฉบับเต็ม</span>
                  </button>
                </div>

                <div className={`cert-badge-pill ${getBadgeClass(cert.badgeColor)}`}>
                  {cert.badgeColor === 'gold' && <Medal size={14} className="text-amber-400" />}
                  {cert.badgeColor === 'silver' && <Award size={14} className="text-slate-300" />}
                  {cert.badgeColor === 'cyan' && <Globe size={14} />}
                  <span>{cert.level}</span>
                </div>
              </div>

              <div className="cert-body">
                <div className="cert-date">
                  <Calendar size={13} />
                  <span>{cert.date}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <h4 className="cert-issuer">{cert.issuer}</h4>

                <p className="cert-desc">{cert.description}</p>

                <div className="cert-footer">
                  <button 
                    className="view-cert-link"
                    onClick={() => setActiveModalCert(cert)}
                  >
                    <span>คลิกเพื่อดูภาพขนาดใหญ่</span>
                    <Eye size={15} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {activeModalCert && (
          <div className="cert-modal-backdrop" onClick={() => setActiveModalCert(null)}>
            <div className="cert-modal glass-card" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn"
                onClick={() => setActiveModalCert(null)}
              >
                &times;
              </button>

              <div className="cert-modal-img-container">
                <img src={getAssetUrl(activeModalCert.image)} alt={activeModalCert.title} />
              </div>

              <div className="cert-modal-details">
                <div className="badge">{activeModalCert.level}</div>
                <h3>{activeModalCert.title}</h3>
                <p className="text-secondary">{activeModalCert.issuer}</p>
                <p className="cert-modal-summary">{activeModalCert.description}</p>
                
                <div className="cert-modal-meta">
                  <span><strong>วันที่ได้รับ:</strong> {activeModalCert.date}</span>
                  <a 
                    href={getAssetUrl(activeModalCert.image)} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}
                  >
                    <ExternalLink size={14} />
                    <span>เปิดภาพต้นฉบับในแท็บใหม่</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certificates;
