import * as React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { loadMarkdownFiles } from "../utils/content";

export default function Projects() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    loadMarkdownFiles('projects').then(setProjects);
  }, []);

  return (
    <Layout>
      <h2>Projects</h2>
      <ul className="cards cards--grid">
        {projects.map((project) => (
          <li key={project.slug} className="card">
            {project.frontmatter.image && (
              <div className="card__image">
                <img
                  src={project.frontmatter.image}
                  alt={project.frontmatter.title}
                  onError={(e) => {
                    e.target.parentElement.style.display = 'none';
                  }}
                />
              </div>
            )}
            <h3>
              <Link to={project.slug}>{project.frontmatter.title}</Link>
            </h3>
            <p className="muted">{project.frontmatter.stack?.join(" • ")}</p>
            <p>{project.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
