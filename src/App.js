import { useLocation } from 'react-router';

import './App.css';

import Nav from './components/nav';
import AppContainer from './components/appContainer';

function App() {
  const location = useLocation();

  let $classes = "";

  function appContainerClasses(location) {
    $classes = "App"

    switch(location.pathname) {
      case '/astrophotography':
        $classes += " astrophotography"

      default:
        $classes += ""
    }

    return $classes;

  }

  return (
    <>
    <div className={appContainerClasses(location)}>
      <Nav />
      <AppContainer />
    </div>
    </>
  );
}

export default App;
