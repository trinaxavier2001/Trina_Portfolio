import * as React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { loadMarkdownFile } from "../utils/content";

export default function Project() {
  const { slug } = useParams();
  const [project, setProject] = React.useState(null);

  React.useEffect(() => {
    loadMarkdownFile('projects', slug).then(setProject);
  }, [slug]);

  if (!project) return <Layout><p>Loading...</p></Layout>;

  return (
    <Layout>
      <article className="prose">
        <h1>{project.frontmatter.title}</h1>
        <p className="muted">{project.frontmatter.stack?.join(" • ")}</p>
        <ReactMarkdown>{project.body}</ReactMarkdown>
        {project.frontmatter.repo && (
          <p>
            <a href={project.frontmatter.repo}>GitHub →</a>
          </p>
        )}
        {project.frontmatter.demo && (
          <p>
            <a href={project.frontmatter.demo}>Live Demo →</a>
          </p>
        )}
      </article>
    </Layout>
  );
}
