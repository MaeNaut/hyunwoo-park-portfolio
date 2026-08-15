import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RouteMetadata from "./components/RouteMetadata";
import profile from "./data/profile";
import projects from "./data/projects";
import { readScrollPosition } from "./utils/scrollMemory";
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

function ScrollManager() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.restoreScroll && state.restoreScrollPath === pathname) {
      const savedScrollY = readScrollPosition(pathname);

      window.requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollY, left: 0, behavior: "auto" });
      });

      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, state]);

  return null;
}

function AppShell() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <a
        href="#main-content"
        className="fixed left-6 top-4 z-50 -translate-y-24 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <RouteMetadata pathname={location.pathname} profile={profile} projects={projects} />
      <div className="fixed inset-x-0 top-3 z-30 sm:top-4">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <Navbar profile={profile} pathname={location.pathname} locationState={location.state} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-30 pb-6 sm:px-8 sm:pt-32 lg:px-10">
        <ScrollManager />
        <main id="main-content" tabIndex="-1">
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
