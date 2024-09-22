import { useLocation } from 'react-router';

import './App.css';

import Navigation from './components/nav';
import AppContainer from './components/appContainer';

function App() {
  const location = useLocation();

  let $classes = "";

  function appContainerClasses(location) {
    $classes = "App"

    switch(location.pathname) {
      case '/astrophotography':
        $classes += " astrophotography"
        break;

      case '/about':
        $classes += " about"
        break;

      default:
        $classes += ""
        break;
    }

    return $classes;

  }

  return (
    <>
    <div className={appContainerClasses(location)}>
      <Navigation />
      <AppContainer />
    </div>
    </>
  );
}

export default App;
