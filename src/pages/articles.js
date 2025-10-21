import * as React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { loadMarkdownFiles } from "../utils/content";

export default function Articles() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    loadMarkdownFiles('articles').then(setPosts);
  }, []);

  return (
    <Layout>
      <h2>Articles</h2>
      <ul className="cards">
        {posts.map((post) => (
          <li key={post.slug} className="card">
            {post.frontmatter.image && (
              <div className="card__image">
                <img
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  onError={(e) => {
                    e.target.parentElement.style.display = 'none';
                  }}
                />
              </div>
            )}
            <h3>
              <Link to={post.slug}>{post.frontmatter.title}</Link>
            </h3>
            <p className="muted">
              {post.frontmatter.date} • {post.frontmatter.tagline}
            </p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
