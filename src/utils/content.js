// Utility to load markdown content
// In production, you'd want to use a more robust solution

export async function loadMarkdownFiles(type) {
  const context = import.meta.glob('/content/**/*.md', { query: '?raw', import: 'default', eager: false });
  const files = [];

  console.log('All glob paths:', Object.keys(context));
  console.log('Looking for type:', type);

  for (const path in context) {
    console.log('Checking path:', path);
    if (path.includes(`/content/${type}/`)) {
      try {
        const content = await context[path]();
        const slug = path.split('/').pop().replace('.md', '');
        const { frontmatter, excerpt } = parseMarkdown(content);

        files.push({
          slug: `/${type}/${slug}`,
          frontmatter,
          excerpt,
          content
        });
      } catch (error) {
        console.error(`Error loading ${path}:`, error);
      }
    }
  }

  console.log(`Found ${files.length} files for ${type}:`, files);

  return files.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || 0);
    const dateB = new Date(b.frontmatter.date || 0);
    return dateB - dateA;
  });
}

export async function loadMarkdownFile(type, slug) {
  const context = import.meta.glob('/content/**/*.md', { query: '?raw', import: 'default', eager: false });

  for (const path in context) {
    if (path.includes(`/content/${type}/`) && path.includes(`${slug}.md`)) {
      try {
        const content = await context[path]();
        const { frontmatter, body } = parseMarkdown(content);
        return { frontmatter, body, content };
      } catch (error) {
        console.error(`Error loading ${path}:`, error);
      }
    }
  }

  return null;
}

function parseMarkdown(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, body: content, excerpt: content.substring(0, 160) };
  }

  const frontmatterText = match[1];
  const body = match[2].trim();

  // Parse YAML frontmatter
  const frontmatter = {};
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      // Handle arrays
      if (key === 'stack' || key === 'tags') {
        if (!frontmatter[key]) frontmatter[key] = [];
      } else {
        frontmatter[key] = value;
      }
    } else if (line.trim().startsWith('-')) {
      // Array item
      const lastKey = Object.keys(frontmatter).pop();
      if (Array.isArray(frontmatter[lastKey])) {
        frontmatter[lastKey].push(line.trim().substring(1).trim().replace(/^["']|["']$/g, ''));
      }
    }
  });

  const excerpt = body.replace(/[#*`]/g, '').substring(0, 160).trim();

  return { frontmatter, body, excerpt };
}
