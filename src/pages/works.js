import * as React from "react";
import Layout from "../components/Layout";
import { loadMarkdownFiles } from "../utils/content";

export default function Works() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    loadMarkdownFiles('works').then(works => {
      const sorted = works.sort((a, b) =>
        (a.frontmatter.order || 0) - (b.frontmatter.order || 0)
      );
      setItems(sorted);
    });
  }, []);

  return (
    <Layout>
      <h2>Works</h2>
      <ol className="timeline">
        {items.map((item, index) => (
          <li key={index} className="timeline__item">
            <div className="timeline__dot" aria-hidden="true"></div>
            <div className="timeline__content">
              <h3>{item.frontmatter.title}</h3>
              <p className="muted">{item.frontmatter.period}</p>
              <p>{item.frontmatter.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Layout>
  );
}
