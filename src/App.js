import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SelectUserType from './pages/SelectUserType';
import Dashboard from './pages/Dashboard';
import ResetConfirm from './pages/ResetConfirm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup-type" element={<SelectUserType />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reset" element={<ResetConfirm />} />
    </Routes>
  );
}
export default App;