import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Clients from './pages/Clients';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;