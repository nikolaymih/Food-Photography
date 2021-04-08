import PersonalSettings from '../PersonalSettings/PersonalSettings';
import CardPhotos from '../CardPhotos/CardPhotos';

import './Home.css';

const Home = () => {
    return (
        <main className="wrapper">
            <PersonalSettings />  

            <CardPhotos />
                
            <section className="emptySection">
                
            </section>
        </main>
    );
};

export default Home;