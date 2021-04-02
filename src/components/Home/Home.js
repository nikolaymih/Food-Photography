import PersonalSettings from '../PersonalSettings/PersonalSettings';
import CardPhotos from '../CardPhotos/CardPhotos';

import './Home.css';

const Home = () => {
    return (
        <main className="wrapper">
            <PersonalSettings />  

            <CardPhotos />

            <section className="emptySection">
                <h1>Test</h1>
            </section>
        </main>
    );
};

export default Home;