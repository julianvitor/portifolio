import { render } from 'preact';
import { LocationProvider, Router } from 'preact-iso';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { Tools } from './pages/Tools';
import { Resume } from './pages/Resume';
import { NotFound } from './pages/NotFound';
import './styles.css';

function App() {
  return (
    <LocationProvider>
      <div class="min-h-screen flex flex-col lg:flex-row bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <Sidebar />
        <main class="flex-1 lg:ml-56 bg-neutral-100 dark:bg-neutral-900">
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Projects path="/projects" />
            <ProjectDetail path="/projects/:slug" />
            <Blog path="/blog" />
            <BlogPost path="/blog/:slug" />
            <Contact path="/contact" />
            <Tools path="/tools" />
            <Resume path="/resume" />
            <NotFound default />
          </Router>
        </main>
      </div>
    </LocationProvider>
  );
}

render(<App />, document.body);
