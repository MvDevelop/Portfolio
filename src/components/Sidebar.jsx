
import Avatar from '../img/img1.jpeg';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="MV Dev" />
            <p className="title">Software Developer</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">
                Download Resume
            </a>
        </aside>
    )
};

export default Sidebar;
