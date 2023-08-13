import {
    Routes,
    Route
  } from 'react-router-dom';
  
import Intro from './intro';
import About from './about';
import Certs from './certs';
import Labs from './labs';
import Astrophotography from './astrophotography';
import Social from './social';

function AppContainer() {
    return(
        <div className='appContainer'>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="about" element={<About />} />
                <Route path="certs" element={<Certs />} />
                <Route path="labs" element={<Labs />} />
                <Route path="astrophotography" element={<Astrophotography />} />
                <Route path="social" element={<Social />} />
            </Routes>
        </div>
        )
}

export default AppContainer;
