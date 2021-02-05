import './App.css';
import './assets/output.css'
import { AppThemeContext } from './ThemeContext';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Header from './component/layout/header.component';
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
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/projects">
            <ProjectPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
        <Footer/>

      </HashRouter>

    </>
  );
}

export default App;
