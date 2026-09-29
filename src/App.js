import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import { LEGACY_BLOG_SLUGS } from './content/blog/posts';

// Home is bundled eagerly (it's the landing page); everything else is split into its own chunk.
const About = lazy(() => import('./pages/About'));
const Food = lazy(() => import('./pages/Food'));
const Drinks = lazy(() => import('./pages/Drinks'));
const Info = lazy(() => import('./pages/Info'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Imprint = lazy(() => import('./pages/Imprint'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <LanguageProvider>
      <LazyMotion features={domAnimation} strict>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="food" element={<Food />} />
              <Route path="drinks" element={<Drinks />} />
              <Route path="info" element={<Info />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="imprint" element={<Imprint />} />
              {Object.entries(LEGACY_BLOG_SLUGS).map(([from, to]) => (
                <Route key={from} path={from} element={<Navigate to={`/blog/${to}`} replace />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LazyMotion>
    </LanguageProvider>
  );
}
