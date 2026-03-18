import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import profile from "./data/profile";
import projects from "./data/projects";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function RoutedProjectDetail() {
  const { slug } = useParams();
  // Keep URL lookup here so ProjectDetail can stay focused on rendering.
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return <ProjectDetail project={project} />;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function AppShell() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <ScrollToTop />
        <Navbar profile={profile} pathname={location.pathname} />
        <main>
          <Routes>
            <Route path="/" element={<Home profile={profile} projects={projects} />} />
            <Route path="/projects" element={<Projects projects={projects} />} />
            <Route path="/projects/:slug" element={<RoutedProjectDetail />} />
            <Route path="/resume" element={<Resume profile={profile} />} />
            <Route path="/contact" element={<Contact profile={profile} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer profile={profile} />
      </div>
    </div>
  );
}

export default function App() {
  return <AppShell />;
}
