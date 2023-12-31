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
      <Nav />
      <div className='appContainer'>
        <AppContainer />
      </div>
    </div>
    </>
  );
}

export default App;
