import * as React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero__profile">
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt="Trina Xavier"
            className="hero__profile-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hero__profile-placeholder" style={{ display: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
        <div className="hero__badge">Data Scientist & ML Engineer</div>
        <h1>
          Exploring AI's Frontiers: From Ocean Science to Enterprise Solutions
        </h1>
        <p className="lead">
          I build ML systems for ocean science, medical imaging, and enterprise data—domains where models
          directly inform conservation, diagnosis, and business decisions. From India to Massachusetts marine
          labs, I've learned the best models aren't the most complex—they're the ones people can understand,
          reproduce, and trust when stakes are high.
        </p>
        <div className="hero__story">
          <div className="hero__story-image">
            <img
              src={`${import.meta.env.BASE_URL}images/feature-story.jpg`}
              alt="Featured Story - Marine Science"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hero__story-icon-fallback" style={{ display: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
          </div>
          <div className="hero__story-content">
            <p className="hero__story-label">Featured by UMass Dartmouth</p>
            <a href="https://www.umassd.edu/feature-stories/2025/trina-xavier.html"
               target="_blank"
               rel="noreferrer"
               className="hero__story-link">
              "Data and the Blue Economy: How I Found My Passion in Marine Science"
              <span className="hero__story-arrow">→</span>
            </a>
          </div>
        </div>
        <div className="hero__highlights">
          <div className="hero__stat">
            <span className="hero__stat-number">49×</span>
            <span className="hero__stat-label">HPC Performance Gains</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">45%</span>
            <span className="hero__stat-label">Workflow Automation</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">20%</span>
            <span className="hero__stat-label">Detection Accuracy Boost</span>
          </div>
        </div>
        <div className="cta">
          <a className="btn btn--primary" href={`${import.meta.env.BASE_URL}Trina_Xavier_Resume.pdf`} target="_blank" rel="noreferrer">
            Download Résumé
          </a>
          <Link className="btn" to="/projects">
            View Projects
          </Link>
          <Link className="btn" to="/articles">
            Read Articles
          </Link>
        </div>
      </section>

      <section className="work-experience-section">
        <h2>Professional Experience</h2>
        <div className="timeline">
          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__content">
              <div className="timeline__header">
                <h3>Robotic Sail Simulation Engineer</h3>
                <span className="timeline__period">Jun 2025 – Present</span>
              </div>
              <p className="timeline__company">Aloft Systems • Boston, MA</p>
              <p className="timeline__description">
                Engineered real-time sensor fusion system combining 30 FPS computer vision with wind sensors at 33ms latency.
                Developed CNN-LSTM architecture with Kalman filtering for wind modeling, improving forecast accuracy by ~15%
                and establishing reproducible calibration protocols.
              </p>
              <div className="timeline__tags">
                <span className="tag">Python</span>
                <span className="tag">Raspberry Pi</span>
                <span className="tag">CNN-LSTM</span>
                <span className="tag">Kalman Filtering</span>
              </div>
            </div>
          </div>

          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__content">
              <div className="timeline__header">
                <h3>Research Fellow</h3>
                <span className="timeline__period">Aug 2025</span>
              </div>
              <p className="timeline__company">OceanHackWeek 2025, Univ. of Washington • Seattle, WA</p>
              <p className="timeline__description">
                Architected end-to-end ocean observation pipeline with U-Net/DINCAE for gap-filling satellite chlorophyll-a data.
                Reduced manual preprocessing by 45% through automation while establishing rigorous QA/QC protocols and
                spatiotemporal validation frameworks.
              </p>
              <div className="timeline__tags">
                <span className="tag">Python</span>
                <span className="tag">xarray/Zarr</span>
                <span className="tag">PyTorch</span>
                <span className="tag">UNet</span>
                <span className="tag">DINCAE</span>
              </div>
            </div>
          </div>

          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__content">
              <div className="timeline__header">
                <h3>Machine Learning Intern</h3>
                <span className="timeline__period">May 2025 – Aug 2025</span>
              </div>
              <p className="timeline__company">School for Marine Science and Technology • New Bedford, MA</p>
              <p className="timeline__description">
                Collaborated with marine scientists to advance sustainable fisheries through computer vision.
                Fine-tuned pretrained models (Tator→VIAME) with integrated QA/QC workflows, improving scallop detection
                recall by 20% and precision by 15% while addressing domain shift challenges in underwater imagery.
              </p>
              <div className="timeline__tags">
                <span className="tag">PyTorch</span>
                <span className="tag">VIAME</span>
                <span className="tag">Transfer Learning</span>
                <span className="tag">Object Detection</span>
              </div>
            </div>
          </div>

          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__content">
              <div className="timeline__header">
                <h3>Graduate Teaching Assistant</h3>
                <span className="timeline__period">Jan 2025 – May 2025</span>
              </div>
              <p className="timeline__company">University of Massachusetts Dartmouth • Dartmouth, MA</p>
              <p className="timeline__description">
                Mentored 30+ graduate students in business analytics coursework, teaching KPI dashboard development,
                interactive visualization design, and data storytelling techniques. Optimized Tableau data extracts
                for performance and evaluated student projects emphasizing practical application of analytics principles.
              </p>
              <div className="timeline__tags">
                <span className="tag">Tableau</span>
                <span className="tag">SQL</span>
                <span className="tag">Data Storytelling</span>
                <span className="tag">KPI Design</span>
              </div>
            </div>
          </div>

          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__content">
              <div className="timeline__header">
                <h3>Academic Tutor & Mentor</h3>
                <span className="timeline__period">Dec 2023 – May 2025</span>
              </div>
              <p className="timeline__company">UMassD STEM Learning Lab • Dartmouth, MA</p>
              <p className="timeline__description">
                Provided one-on-one tutoring and mentorship to 15+ STEM undergraduates in mathematics, statistics,
                and study planning. Developed individualized learning strategies that improved academic performance
                and increased lab engagement by 30% through personalized support and skill development.
              </p>
              <div className="timeline__tags">
                <span className="tag">Mentoring</span>
                <span className="tag">Math/Statistics</span>
                <span className="tag">Academic Coaching</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="education-header">
              <h3>Master of Science in Data Science</h3>
              <span className="education-period">Aug 2023 - May 2025</span>
            </div>
            <p className="education-institution">University of Massachusetts Dartmouth</p>
            <p className="education-location">Dartmouth, MA</p>
            <p className="education-highlight">
              Comprehensive training in statistical learning, machine learning, and data engineering. Specialized in end-to-end ML pipelines, from data mining and feature engineering to model deployment and evaluation, with applications in ocean science and medical imaging.
            </p>
            <div className="education-tags">
              <span className="tag">Statistical Learning</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">Data Mining</span>
              <span className="tag">Database Design</span>
              <span className="tag">Data Visualization</span>
              <span className="tag">Big Data Analytics</span>
            </div>
          </div>

          <div className="education-card">
            <div className="education-header">
              <h3>Bachelor of Technology in Electronics & Communication Engineering</h3>
              <span className="education-period">Jun 2019 - Jul 2023</span>
            </div>
            <p className="education-institution">TKR College of Engineering and Technology</p>
            <p className="education-location">Hyderabad, India</p>
            <p className="education-highlight">
              Strong foundation in circuit theory, signal processing, and embedded systems design. Core coursework in digital electronics, microprocessors, and communication systems developed computational and analytical skills that underpin my approach to machine learning and data-driven engineering.
            </p>
            <div className="education-tags">
              <span className="tag">Signal Processing</span>
              <span className="tag">Embedded Systems</span>
              <span className="tag">Digital Electronics</span>
              <span className="tag">Communication Systems</span>
              <span className="tag">Circuit Theory</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section-home">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>ML & Data Science</h4>
            <p>PyTorch, TensorFlow, NLP/LLMs & RAG, Model Evaluation (ROC/PR, calibration), Computer Vision</p>
          </div>
          <div className="skill-category">
            <h4>Python/SQL & Automation</h4>
            <p>Python, SQL (CTEs, window functions), Airflow/Databricks, Batch Scripts</p>
          </div>
          <div className="skill-category">
            <h4>Cloud & BI Tooling</h4>
            <p>AWS (S3, Redshift, EC2, SageMaker), GCP BigQuery, Tableau, Docker, Git/Bitbucket</p>
          </div>
          <div className="skill-category">
            <h4>LLM Data Ops & Evaluation</h4>
            <p>Prompt & rubric design, instruction/response writing, preference/safety labeling, multimodal annotation</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
