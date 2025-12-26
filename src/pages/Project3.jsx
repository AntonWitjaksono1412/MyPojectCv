import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, Code } from 'lucide-react';

import foto1 from '../assets/Project3/foto1.png';
import foto2 from '../assets/Project3/foto2.png';
import foto3 from '../assets/Project3/foto3.png';
import foto4 from '../assets/Project3/foto4.png';

const Project3 = ({ darkMode }) => {
  const navigate = useNavigate();
  const allImages = [foto1, foto2, foto3, foto4]; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbOffset, setThumbOffset] = useState(0);
  const maxVisible = 6;

  useEffect(() => {
    if (currentIndex >= thumbOffset + maxVisible) {
      setThumbOffset(currentIndex - maxVisible + 1);
    } else if (currentIndex < thumbOffset) {
      setThumbOffset(currentIndex);
    }
  }, [currentIndex, thumbOffset]);

  const projectData = {
    title: "Precision Mechanical Turntable Disc",
    category: "3D GENERATIVE DESIGN (PYTHON)",
    description: "Model piringan mekanis presisi tinggi yang dibangun secara prosedural menggunakan Blender Python API. Proyek ini mendemonstrasikan otomatisasi geometri kompleks melalui script, termasuk manajemen boolean untuk lubang baut, ring penguat, dan chamfer miring yang dalam.",
    specs: [
      { label: "Main Disc Diameter", value: "115 mm" },
      { label: "Disc Thickness", value: "3.0 mm" },
      { label: "Center Hole Diameter", value: "27 mm" },
      { label: "Inner Bolt Pattern", value: "4x @ Radius 28mm" },
      { label: "Outer Bolt Pattern", value: "4x @ Radius 53.5mm" },
      { label: "Reinforcement Ring", value: "⌀33mm - 37mm" },
      { label: "Automation Script", value: "Blender bpy API" }
    ]
  };

  const colors = {
    bg: darkMode ? '#0f172a' : '#f4f7fa',
    card: darkMode ? '#1e293b' : 'white',
    textMain: darkMode ? '#f8fafc' : '#0f172a',
    textSub: darkMode ? '#94a3b8' : '#64748b',
    border: darkMode ? '#334155' : '#eef2f6',
    line: darkMode ? '#334155' : '#f1f5f9'
  };

  return (
    <div style={{ 
      fontFamily: "'Plus Jakarta Sans', sans-serif", 
      padding: '40px 60px', 
      color: colors.textMain, 
      backgroundColor: colors.bg, 
      minHeight: '100vh',
      transition: '0.3s'
    }}>
      
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');`}
      </style>

      <div style={{ marginBottom: '40px' }}>
        <button 
          onClick={() => navigate('/')}
          style={{ ...backButtonStyle, color: colors.textSub }}
          onMouseOver={(e) => e.currentTarget.style.color = '#3b82f6'}
          onMouseOut={(e) => e.currentTarget.style.color = colors.textSub}
        >
          <ArrowLeft size={18} /> KEMBALI KE DASHBOARD
        </button>

        <div>
          <span style={{ color: '#3b82f6', fontSize: '12px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            {projectData.category}
          </span>
          <h1 style={{ margin: '8px 0 0 0', fontSize: '36px', fontWeight: '800', color: colors.textMain, letterSpacing: '-1px' }}>
            {projectData.title}
          </h1>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '35px', alignItems: 'start' }}>
        
        <div style={{ ...cardStyle, backgroundColor: colors.card, borderColor: colors.border }}>
          <div style={{ ...mainImageContainer, backgroundColor: darkMode ? '#0f172a' : '#fff' }}>
            <img 
              src={allImages[currentIndex]} 
              alt="Blender Render View" 
              style={{ width: '100%', height: '480px', objectFit: 'contain' }} 
            />
            
            <button 
              onClick={() => setCurrentIndex(currentIndex === 0 ? allImages.length - 1 : currentIndex - 1)} 
              style={{ ...arrowStyle, left: '20px', backgroundColor: colors.card, color: colors.textMain }}
            >
              <ChevronLeft size={22} />
            </button>
            <button 
              onClick={() => setCurrentIndex(currentIndex === allImages.length - 1 ? 0 : currentIndex + 1)} 
              style={{ ...arrowStyle, right: '20px', backgroundColor: colors.card, color: colors.textMain }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '25px', justifyContent: 'center', overflow: 'hidden' }}>
            {allImages.slice(thumbOffset, thumbOffset + maxVisible).map((img, index) => {
              const actualIndex = index + thumbOffset;
              return (
                <div 
                  key={actualIndex}
                  onClick={() => setCurrentIndex(actualIndex)}
                  style={{ 
                    flexShrink: 0, width: '90px', height: '65px', borderRadius: '12px', overflow: 'hidden', 
                    cursor: 'pointer', border: actualIndex === currentIndex ? '3px solid #3b82f6' : '3px solid transparent',
                    transition: '0.3s', 
                    opacity: actualIndex === currentIndex ? 1 : 0.4,
                    transform: actualIndex === currentIndex ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="thumbnail" />
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          <div style={{ ...cardStyle, backgroundColor: colors.card, borderColor: colors.border }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '700', color: colors.textMain }}>
              Deskripsi Teknik
            </h3>
            <p style={{ color: colors.textSub, lineHeight: '1.8', fontSize: '15px', margin: 0 }}>
              {projectData.description}
            </p>
          </div>

          <div style={{ ...cardStyle, backgroundColor: colors.card, borderColor: colors.border }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '700', color: colors.textMain }}>
              Spesifikasi Geometri
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {projectData.specs.map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 0', borderBottom: i !== projectData.specs.length - 1 ? `1px solid ${colors.line}` : 'none'
                }}>
                  <span style={{ fontSize: '14px', color: colors.textSub, fontWeight: '500' }}>{item.label}</span>
                  <span style={{ fontSize: '14px', color: colors.textMain, fontWeight: '700' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  padding: '30px', borderRadius: '24px', 
  boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid',
  transition: '0.3s'
};

const backButtonStyle = {
  display: 'flex', alignItems: 'center', gap: '8px', border: 'none', 
  backgroundColor: 'transparent', cursor: 'pointer',
  padding: '0', marginBottom: '20px', fontSize: '14px', fontWeight: '700', transition: '0.3s'
};

const mainImageContainer = {
  position: 'relative', borderRadius: '16px', overflow: 'hidden'
};

const arrowStyle = {
  position: 'absolute', top: '50%', transform: 'translateY(-50%)',
  border: 'none', borderRadius: '50%', 
  width: '45px', height: '45px', display: 'flex', alignItems: 'center', 
  justifyContent: 'center', cursor: 'pointer', 
  boxShadow: '0 8px 20px rgba(0,0,0,0.1)', transition: '0.2s'
};

const specRowStyle = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0'
};

export default Project3;