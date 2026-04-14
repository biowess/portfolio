/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Research } from './pages/Research';
import { Projects } from './pages/Projects';
import { Writing } from './pages/Writing';
import { Photography } from './pages/Photography';
import { Certificates } from './pages/Certificates';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// ✅ ADD THIS
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>

        {/* ✅ ADD THIS LINE */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="research" element={<Research />} />
            <Route path="projects" element={<Projects />} />
            <Route path="writing" element={<Writing />} />
            <Route path="photography" element={<Photography />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}