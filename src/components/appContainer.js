import {
    Routes,
    Route
  } from 'react-router-dom';
  
import Intro from './intro';
import About from './about';
import Certs from './certs';
import Labs from './labs';
import Portfolio from './portfolio';
import Astrophotography from './astrophotography';

function AppContainer() {
    return(
        <div className='appContainer'>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="about" element={<About />} />
                <Route path="certs" element={<Certs />} />
                <Route path="labs" element={<Labs />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="astrophotography" element={<Astrophotography />} />
            </Routes>
        </div>
        )
}

export default AppContainer;
