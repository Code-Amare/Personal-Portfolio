import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import About from "./Pages/About/About";
import { DeveloperContext, developerData } from "./Context/DeveloperContext";
import { ProjectsProvider } from "./Context/ProjectContext";
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail";

function App() {
  return (
    <ProjectsProvider>
      <DeveloperContext.Provider value={developerData}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </DeveloperContext.Provider>
    </ProjectsProvider>
  );
}

export default App;
