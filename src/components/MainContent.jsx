
import AboutContainer from './AboutContainer';
import TecContainer from './TecContainer';
import ProjContainer from './ProjContainer';

import '../styles/components/maincontent.sass';

const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer />
            <TecContainer />
            <ProjContainer />
        </main>
    );
};

export default MainContent;
