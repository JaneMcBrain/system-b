import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Construction from './Construction';
import './index.sass';
import App from './pages/App';
import Customer from './pages/Customer';
import Team from './pages/Team';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Construction />}>
        </Route>
        <Route path="/new" element={<App />}>
          <Route path="/new/customer" element={<Customer />} />
          <Route path="/new/team" element={<Team />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
