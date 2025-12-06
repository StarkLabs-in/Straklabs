import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Loader from './components/Loader';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a small loading delay for content/animations to initialize.
        const t = setTimeout(() => setLoading(false), 700);
        return () => clearTimeout(t);
    }, []);

    return (
        <Router>
            <Header />
            {loading && <Loader />}
            <div className={`app-root ${loading ? 'is-loading' : 'is-ready'}`}>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;