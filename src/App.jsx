import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import profile from "./data/profile";
import projects from "./data/projects";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);

  const openProject = (slug) => {
    setSelectedProjectSlug(slug);
    setPage("project-detail");
  };

  const selectedProject = projects.find((project) => project.slug === selectedProjectSlug);

  const renderPage = () => {
    if (page === "home") return <Home profile={profile} projects={projects} onOpenProject={openProject} />;
    if (page === "projects") return <Projects projects={projects} onOpenProject={openProject} />;
    if (page === "project-detail") return <ProjectDetail project={selectedProject} />;
    if (page === "resume") return <Resume profile={profile} />;
    if (page === "contact") return <Contact profile={profile} />;
    return null;
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <Navbar profile={profile} page={page} setPage={setPage} />
        <main>{renderPage()}</main>
        <Footer profile={profile} />
      </div>
    </div>
  );
}
