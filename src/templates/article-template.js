import * as React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { loadMarkdownFile } from "../utils/content";

export default function Article() {
  const { slug } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    loadMarkdownFile('articles', slug).then(setPost);
  }, [slug]);

  if (!post) return <Layout><p>Loading...</p></Layout>;

  return (
    <Layout>
      <article className="prose">
        <h1>{post.frontmatter.title}</h1>
        <p className="muted">
          {post.frontmatter.date} • {post.frontmatter.tagline}
        </p>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </article>
    </Layout>
  );
}
