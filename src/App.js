import './App.css';
import './assets/output.css'
import { AppThemeContext } from './ThemeContext';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Navbar } from './component/nav/NavbarTop';
import HomePage from './page/home/home.page';
import { Footer } from './../src/component/footer/Footer';
import BlogPage from './page/blog/blog.page';
import ProjectPage from './page/project/project.page';
import ContactPage from './page/contact/contact.page';

function App() {
  const { theme, setAppTheme } = useContext(AppThemeContext)

  const registerTheme = () => {
    setAppTheme(theme)
  }

  useEffect(() => {
    registerTheme()
  }, [])

  return (
    <div className="bg-primary-white dark:bg-primary-dark flex flex-col h-screen">
      <title>Prieyudha Akadita S</title>
      <div className="flex-1 overflow-y-auto">
        <HashRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/blog">
              <BlogPage/>
            </Route>
            <Route path="/projects">
              <ProjectPage/>
            </Route>
            <Route path="/contact">
              <ContactPage/>
            </Route>
          </Switch>
        </HashRouter>
        <Footer/>
      </div>

    </div>

  );
}

export default App;
