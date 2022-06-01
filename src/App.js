import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Routes
import AdminRegister from './pages/admin/register';
import AdminDashboard from './pages/admin/dashboard';
import AdminLogin from './pages/admin/login';

// Stuednt Route
import Register from './pages/student/register';
import StudentDashboard from './pages/student/dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Register />} />
          <Route path="/stuednt" element={<StudentDashboard />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
