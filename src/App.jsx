import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Projects from './pages/projects';
import Articles from './pages/articles';
import Works from './pages/works';
import ProjectTemplate from './templates/project-template';
import ArticleTemplate from './templates/article-template';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/works" element={<Works />} />
        <Route path="/projects/:slug" element={<ProjectTemplate />} />
        <Route path="/articles/:slug" element={<ArticleTemplate />} />
      </Routes>
    </Router>
  );
}
