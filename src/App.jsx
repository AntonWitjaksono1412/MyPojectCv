import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, NavLink } from 'react-router-dom';
import { LayoutDashboard, ChevronDown, ChevronRight, FolderDot, Sun, Moon } from 'lucide-react';

import fotoProjek1 from './assets/Project1/foto1.jpg';
import fotoProjek2 from './assets/Project2/foto1.jpg';
import fotoProjek3 from './assets/Project3/foto1.png';

import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';

const Sidebar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('/project')) {
      setIsProjectOpen(true);
    }
  }, [location.pathname]);

  const activeStyle = ({ isActive }) => ({
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '12px',
    backgroundColor: isActive ? '#3b82f6' : 'transparent',
    color: isActive ? 'white' : (darkMode ? '#94a3b8' : '#64748b'),
    transition: '0.3s',
    fontWeight: isActive ? '700' : '500',
    fontSize: '14px'
  });

  return (
    <aside style={{ 
      width: '280px', 
      backgroundColor: darkMode ? '#1e293b' : '#ffffff', 
      borderRight: darkMode ? '1px solid #334155' : '1px solid #e2e8f0', 
      padding: '30px 20px', 
      flexShrink: 0, 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <div style={{ paddingLeft: '16px', marginBottom: '40px' }}>
          <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800', color: darkMode ? '#f8fafc' : '#0f172a', letterSpacing: '-1px' }}>MyPorto.</h2>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <NavLink to="/" style={activeStyle}>
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>

          <div style={{ marginTop: '8px' }}>
            <div 
              onClick={() => setIsProjectOpen(!isProjectOpen)} 
              style={{ 
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                padding: '12px 16px', color: location.pathname.includes('/project') ? '#3b82f6' : (darkMode ? '#94a3b8' : '#64748b')
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FolderDot size={18} /> 
                <span style={{ fontWeight: '600', fontSize: '14px' }}>Projects</span>
              </div>
              {isProjectOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </div>
{/* Sidebar */}
            {isProjectOpen && (
              <div style={{ paddingLeft: '46px', borderLeft: darkMode ? '1px solid #334155' : '1px solid #e2e8f0', marginLeft: '25px', marginTop: '4px' }}>
                <NavLink to="/project/projek1" style={({isActive}) => ({ 
                  color: isActive ? '#3b82f6' : (darkMode ? '#94a3b8' : '#64748b'), 
                  textDecoration: 'none', display: 'block', padding: '10px 0', fontSize: '14px', fontWeight: isActive ? '700' : '500' 
                })}>Audio Amplifier</NavLink>
                <NavLink to="/project/projek2" style={({isActive}) => ({ 
                  color: isActive ? '#3b82f6' : (darkMode ? '#94a3b8' : '#64748b'), 
                  textDecoration: 'none', display: 'block', padding: '10px 0', fontSize: '14px', fontWeight: isActive ? '700' : '500' 
                })}>Bookshelf Speaker</NavLink>
                <NavLink to="/project/projek3" style={({isActive}) => ({ 
                  color: isActive ? '#3b82f6' : (darkMode ? '#94a3b8' : '#64748b'), 
                  textDecoration: 'none', display: 'block', padding: '10px 0', fontSize: '14px', fontWeight: isActive ? '700' : '500' 
                })}>Precision Mechanical Turntable Disc</NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        style={{
          display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px',
          cursor: 'pointer', border: 'none', marginTop: 'auto',
          backgroundColor: darkMode ? '#334155' : '#f1f5f9',
          color: darkMode ? '#f8fafc' : '#475569',
          transition: '0.3s'
        }}
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        <span style={{ fontWeight: '600', fontSize: '14px' }}>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </aside>
  );
};

// Dashboard
const Dashboard = ({ darkMode }) => {
  const navigate = useNavigate();
  const projects = [
    { id: 'projek1', title: 'Audio Amplifier', category: 'Hi-Fi System', img: fotoProjek1 },
    { id: 'projek2', title: 'Bookshelf Speaker', category: 'Loudspeaker', img: fotoProjek2 },
    { id: 'projek3', title: 'Precision Mechanical Turntable Disc', category: 'Loudspeaker', img: fotoProjek3 },
  ];

  return (
    <div style={{ padding: '50px', maxWidth: '1200px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', color: darkMode ? '#f8fafc' : '#0f172a', margin: 0, letterSpacing: '-1px' }}>Dashboard Utama</h1>
        <p style={{ color: darkMode ? '#94a3b8' : '#64748b', marginTop: '8px', fontSize: '16px' }}>Selamat datang kembali, ini adalah daftar projek audio kamu.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {projects.map((proj) => (
          <div 
            key={proj.id}
            onClick={() => navigate(`/project/${proj.id}`)} 
            style={{ 
              cursor: 'pointer', 
              backgroundColor: darkMode ? '#1e293b' : 'white', 
              borderRadius: '24px', overflow: 'hidden', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)', 
              border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div style={{ width: '100%', height: '200px', backgroundColor: darkMode ? '#0f172a' : '#f8fafc', overflow: 'hidden' }}>
                <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '24px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', letterSpacing: '1px', textTransform: 'uppercase' }}>{proj.category}</span>
              <h3 style={{ margin: '8px 0 0 0', fontSize: '20px', fontWeight: '700', color: darkMode ? '#f8fafc' : '#0f172a' }}>{proj.title}</h3>
              <div style={{ marginTop: '15px', fontSize: '14px', color: '#94a3b8', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                Lihat Detail <ChevronRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div style={{ 
        fontFamily: "'Plus Jakarta Sans', sans-serif", 
        display: 'flex', 
        width: '100vw', 
        height: '100vh', 
        backgroundColor: darkMode ? '#0f172a' : '#fcfcfd',
        color: darkMode ? '#f8fafc' : '#1e293b',
        transition: '0.3s'
      }}>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');`}
        </style>
        
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main style={{ flexGrow: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Dashboard darkMode={darkMode} />} />
            <Route path="/project/projek1" element={<Project1 darkMode={darkMode} />} />
            <Route path="/project/projek2" element={<Project2 darkMode={darkMode} />} />
            <Route path="/project/projek3" element={<Project3 darkMode={darkMode} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}