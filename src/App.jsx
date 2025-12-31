import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, NavLink } from 'react-router-dom';
import { LayoutDashboard, ChevronDown, ChevronRight, FolderDot, Sun, Moon, FileText, ExternalLink, Menu, X } from 'lucide-react';

// IMPORT PAGES
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';
import Project6 from './pages/Project6';

// IMPORT ASSETS
import fotoProjek1 from './assets/Project1/foto1.jpg';
import fotoProjek2 from './assets/Project2/foto1.jpg';
import fotoProjek3 from './assets/Project3/foto1.png';
import fotoProjek4 from './assets/Project4/foto1.jpg';
import fotoProjek5 from './assets/Project5/foto1.jpg';
import fotoProjek6 from './assets/Project6/foto1.jpg';

const Sidebar = ({ darkMode, setDarkMode, isMobile, isOpen, setIsSidebarOpen }) => {
  const location = useLocation();
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('/project')) setIsProjectOpen(true);
    if (isMobile) setIsSidebarOpen(false); 
  }, [location.pathname, isMobile, setIsSidebarOpen]);

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
    <>
      {/* Overlay Background */}
      {isMobile && isOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', 
            zIndex: 998, backdropFilter: 'blur(4px)'
          }}
        />
      )}

      <aside style={{ 
        width: '280px', 
        backgroundColor: darkMode ? '#1e293b' : '#ffffff', 
        borderRight: darkMode ? '1px solid #334155' : '1px solid #e2e8f0', 
        padding: '30px 20px', 
        flexShrink: 0, 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: isMobile ? 'fixed' : 'relative',
        // Perbaikan: Gunakan transform agar benar-benar keluar dari frame
        transform: isMobile ? (isOpen ? 'translateX(0)' : 'translateX(-100%)') : 'none',
        // Perbaikan: Tambahkan visibility agar elemen tidak terdeteksi saat sembunyi
        visibility: isMobile && !isOpen ? 'hidden' : 'visible',
        left: 0,
        top: 0,
        height: '100vh',
        zIndex: 999,
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s'
      }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '16px', marginBottom: '40px' }}>
            <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800', color: darkMode ? '#f8fafc' : '#0f172a', letterSpacing: '-1px' }}>PortoAnton.</h2>
            {isMobile && <X onClick={() => setIsSidebarOpen(false)} style={{ cursor: 'pointer', color: darkMode ? '#94a3b8' : '#64748b' }} size={24} />}
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

              {isProjectOpen && (
                <div style={{ paddingLeft: '20px', borderLeft: darkMode ? '1px solid #334155' : '1px solid #e2e8f0', marginLeft: '25px', marginTop: '4px' }}>
                  <NavLink to="/project/projek1" style={({isActive}) => ({ color: isActive ? '#3b82f6' : (darkMode ? '#94a3b8' : '#64748b'), textDecoration: 'none', display: 'block', padding: '10px 0', fontSize: '13px', fontWeight: isActive ? '700' : '500' })}>Compact 2-Way Bookshelf</NavLink>
                  <NavLink to="/project/projek2" style={({isActive}) => ({ color: isActive ? '#3b82f6' : (darkMode ? '#94a3b8' : '#64748b'), textDecoration: 'none', display: 'block', padding: '10px 0', fontSize: '13px', fontWeight: isActive ? '700' : '500' })}>Reference 3-Way Quad-Driver Tower</NavLink>
                  <NavLink to="/project/projek3" style={({isActive}) => ({ color: isActive ? '#3b82f6' : (darkMode ? '#94a3b8' : '#64748b'), textDecoration: 'none', display: 'block', padding: '10px 0', fontSize: '13px', fontWeight: isActive ? '700' : '500' })}>Procedural Tweeter Mounting Plate</NavLink>
                  <NavLink to="/project/projek4" style={({isActive}) => ({ color: isActive ? '#3b82f6' : (darkMode ? '#94a3b8' : '#64748b'), textDecoration: 'none', display: 'block', padding: '10px 0', fontSize: '13px', fontWeight: isActive ? '700' : '500' })}>Integrated 2.1 Desktop Amplifier</NavLink>
                  <NavLink to="/project/projek5" style={({isActive}) => ({ color: isActive ? '#3b82f6' : (darkMode ? '#94a3b8' : '#64748b'), textDecoration: 'none', display: 'block', padding: '10px 0', fontSize: '13px', fontWeight: isActive ? '700' : '500' })}>Custom 936 Soldering Station</NavLink>
                  <NavLink to="/project/projek6" style={({isActive}) => ({ color: isActive ? '#3b82f6' : (darkMode ? '#94a3b8' : '#64748b'), textDecoration: 'none', display: 'block', padding: '10px 0', fontSize: '13px', fontWeight: isActive ? '700' : '500' })}>Vacuum Tube & Gainclone Power Amp</NavLink>
                </div>
              )}
            </div>

            <a href="https://antonwitjaksono.netlify.app/" target="_blank" rel="noopener noreferrer"
              style={{
                textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 16px', borderRadius: '12px', color: darkMode ? '#94a3b8' : '#64748b', transition: '0.3s', marginTop: '4px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FileText size={18} />
                <span style={{ fontWeight: '600', fontSize: '14px' }}>CV</span>
              </div>
              <ExternalLink size={12} />
            </a>
          </nav>
        </div>

        <button onClick={() => setDarkMode(!darkMode)}
          style={{
            display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px',
            cursor: 'pointer', border: 'none', backgroundColor: darkMode ? '#334155' : '#f1f5f9',
            color: darkMode ? '#f8fafc' : '#475569', transition: '0.3s'
          }}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          <span style={{ fontWeight: '600', fontSize: '14px' }}>{darkMode ? 'Light' : 'Dark'}</span>
        </button>
      </aside>
    </>
  );
};

const Dashboard = ({ darkMode, isMobile }) => {
  const navigate = useNavigate();
  const projects = [
    { id: 'projek1', title: 'Compact 2-Way Bookshelf Monitor', category: 'Acoustic Design & Loudspeaker Engineering', img: fotoProjek1 },
    { id: 'projek2', title: 'Reference 3-Way Quad-Driver Tower', category: 'Acoustic Design & Loudspeaker Engineering', img: fotoProjek2 },
    { id: 'projek3', title: 'Procedural Tweeter Plate', category: 'Acoustic Design & Loudspeaker Engineering', img: fotoProjek3 },
    { id: 'projek4', title: 'Integrated 2.1 Desktop Amp', category: 'Audio Electronics · DIY Amplifier', img: fotoProjek4 },
    { id: 'projek5', title: 'Custom 936 Soldering Station', category: 'Electronics Tools · Workshop Equipment', img: fotoProjek5 },
    { id: 'projek6', title: 'Vacuum Tube Power Amp', category: 'Audio Electronics · DIY Amplifier', img: fotoProjek6 },
  ];

  return (
    <div style={{ padding: isMobile ? '20px' : '50px', maxWidth: '1200px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: '800', color: darkMode ? '#f8fafc' : '#0f172a', margin: 0 }}>Dashboard Utama</h1>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: isMobile ? '20px' : '30px' 
      }}>
        {projects.map((proj) => (
          <div key={proj.id} onClick={() => navigate(`/project/${proj.id}`)} 
            style={{ 
              cursor: 'pointer', backgroundColor: darkMode ? '#1e293b' : 'white', borderRadius: '20px', 
              overflow: 'hidden', border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0', transition: '0.3s'
            }}
          >
            <div style={{ width: '100%', height: '180px' }}>
              <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '20px' }}>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase' }}>{proj.category}</span>
              <h3 style={{ margin: '8px 0 0 0', fontSize: '16px', color: darkMode ? '#f8fafc' : '#0f172a' }}>{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div style={{ 
        fontFamily: "'Plus Jakarta Sans', sans-serif", 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        width: '100vw', height: '100vh', 
        backgroundColor: darkMode ? '#0f172a' : '#fcfcfd',
        color: darkMode ? '#f8fafc' : '#1e293b',
        overflow: 'hidden'
      }}>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');`}
        </style>

        {isMobile && (
          <div style={{
            padding: '15px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            backgroundColor: darkMode ? '#1e293b' : '#ffffff',
            borderBottom: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
            zIndex: 10
          }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>PortoAnton.</h2>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              style={{ background: 'none', border: 'none', color: darkMode ? 'white' : 'black', cursor: 'pointer' }}
            >
              <Menu size={24} />
            </button>
          </div>
        )}
        
        <Sidebar 
          darkMode={darkMode} setDarkMode={setDarkMode} 
          isMobile={isMobile} isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
        />
        
        <main style={{ flexGrow: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Dashboard darkMode={darkMode} isMobile={isMobile} />} />
            <Route path="/project/projek1" element={<Project1 darkMode={darkMode} />} />
            <Route path="/project/projek2" element={<Project2 darkMode={darkMode} />} />
            <Route path="/project/projek3" element={<Project3 darkMode={darkMode} />} />
            <Route path="/project/projek4" element={<Project4 darkMode={darkMode} />} />
            <Route path="/project/projek5" element={<Project5 darkMode={darkMode} />} />
            <Route path="/project/projek6" element={<Project6 darkMode={darkMode} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}