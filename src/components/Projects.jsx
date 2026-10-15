import React, { useState } from 'react';
import { ExternalLink, Filter, Sparkles, Layers, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import { getAssetUrl } from '../utils/imageHelper';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Extract distinct categories
  const categories = ['All', 'Game Dev (Unity)', 'Web Development', 'Network / DevOps'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        <div className="section-header">
          <span className="sub-badge">Portfolio Showcase</span>
          <h2>ผลงานและโปรเจกต์ที่โดดเด่น</h2>
          <p>
            รวบรวมโปรเจกต์จริงและงานทดลองที่ผสมผสานระหว่าง Web Application และ Network Engineering
          </p>
        </div>

        {/* Filter Pills */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' && <Layers size={15} />}
              <span>{cat}</span>
              {cat === 'All' && <span className="cat-pill">{projectsData.length}</span>}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              
              {/* Image Preview Container */}
              <div className="project-image-wrap">
                <img src={getAssetUrl(project.image)} alt={project.title} className="project-img" loading="lazy" />
                <div className="project-overlay">
                  <div className="overlay-btns">
                    <button
                      className="btn-overlay"
                      onClick={() => setActiveModalProject(project)}
                      title="ดูรายละเอียดเชิงลึก"
                    >
                      <Eye size={18} />
                      <span>ดูรายละเอียด</span>
                    </button>
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-overlay"
                        title="เปิด Live Demo"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {project.featured && (
                  <div className="featured-ribbon">
                    <Sparkles size={13} />
                    <span>Featured</span>
                  </div>
                )}
                
                <span className="category-tag">{project.category}</span>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>

                {/* Card Footer Links */}
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-item">
                      <GithubIcon size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-link-item highlight">
                      <ExternalLink size={16} />
                      <span>View Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for detailed view */}
        {activeModalProject && (
          <div className="project-modal-backdrop" onClick={() => setActiveModalProject(null)}>
            <div className="project-modal glass-card" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
              >
                &times;
              </button>

              <div className="modal-img-wrap">
                <img src={getAssetUrl(activeModalProject.image)} alt={activeModalProject.title} />
              </div>

              <div className="modal-content">
                <div className="badge">{activeModalProject.category}</div>
                <h2>{activeModalProject.title}</h2>
                <p className="modal-desc">{activeModalProject.description}</p>

                <h4>เทคโนโลยีและเครื่องมือที่ใช้:</h4>
                <div className="project-tags modal-tags">
                  {activeModalProject.tags.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a href={activeModalProject.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <ExternalLink size={17} />
                    <span>เปิด Live Demo</span>
                  </a>
                  <a href={activeModalProject.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                    <GithubIcon size={17} />
                    <span>ดู GitHub Repo</span>
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

export default Projects;
