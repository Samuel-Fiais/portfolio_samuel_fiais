import { Header } from "./components/Header";
import { SkillsPage } from "./components/SkillsPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { ContactsPage } from "./components/ContactsPage";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="App flex flex-col font-monoespace scroll-smooth bg-amber-400 selection:bg-black selection:text-white">
      <Header />
      <div className="h-20 lg:hidden" />
      <SkillsPage />
      <ProjectsPage />
      <ContactsPage />
      <Footer />
    </div>
  );
};
