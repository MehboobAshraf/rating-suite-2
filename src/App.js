import { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LoaderComponent from './components/dashboard-components/loader.component';
import './App.css';

const Routes = lazy(() => import('./components/routes.components'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<LoaderComponent />}>
          <Routes />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
