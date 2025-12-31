import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

// IMPORT ASSETS
import foto1 from '../assets/Project4/foto1.jpg';
import foto2 from '../assets/Project4/foto2.jpg';
import foto3 from '../assets/Project4/foto3.jpg';
import foto4 from '../assets/Project4/foto4.jpg';
import foto5 from '../assets/Project4/foto5.jpg';
import foto6 from '../assets/Project4/foto6.jpg';
import foto7 from '../assets/Project4/foto7.jpg';
import foto8 from '../assets/Project4/foto8.jpg';
import foto9 from '../assets/Project4/foto9.jpg';
import foto10 from '../assets/Project4/foto10.jpg';
import foto11 from '../assets/Project4/foto11.jpg';
import foto12 from '../assets/Project4/foto12.jpg';

// Terima props darkMode dari App.js
const Project4 = ({ darkMode }) => {
  const navigate = useNavigate();
  const allImages = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12]; 
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
title: "Integrated 2.1 Desktop Amplifier",
  category: "Audio Electronics · DIY Amplifier",
  description: "Unit penguat daya terintegrasi berbasis modul Class-D ZK-TB21 yang efisien. Mendukung sistem output 2.1 (stereo satelit dan satu subwoofer) dengan kontrol tuning frekuensi bass yang fleksibel. Sasis kustom menggunakan kombinasi kayu dan PVC untuk tampilan desktop yang elegan.",
  specs: [
    { label: "Power Topology", value: "Class-D Efficiency (ZK-TB21)" },
    { label: "Output System", value: "2.1 Channel (Stereo + Subwoofer)" },
    { label: "Power Source", value: "19V 3A DC Switching Power" },
    { label: "Output Power", value: "50W x 2 + 100W Subwoofer" },
    { label: "Chassis Material", value: "Custom Wood & PVC Hybrid" },
    { label: "Control Features", value: "Volume, Treble, Bass & Sub Frequency" }
  ]
};

  // Konfigurasi Tema Warna
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

      {/* TOP NAVIGATION */}
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
        
        {/* KOLOM KIRI: CARD FOTO */}
        <div style={{ ...cardStyle, backgroundColor: colors.card, borderColor: colors.border }}>
          <div style={{ ...mainImageContainer, backgroundColor: darkMode ? '#0f172a' : '#fff' }}>
            <img 
              src={allImages[currentIndex]} 
              alt="Product View" 
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

          {/* LIST THUMBNAIL */}
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
                  <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`thumb-${actualIndex}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* KOLOM KANAN: INFO */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <div style={{ ...cardStyle, backgroundColor: colors.card, borderColor: colors.border }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '700', color: colors.textMain }}>Deskripsi Projek</h3>
            <p style={{ color: colors.textSub, lineHeight: '1.8', fontSize: '15px', margin: 0 }}>{projectData.description}</p>
          </div>

          <div style={{ ...cardStyle, backgroundColor: colors.card, borderColor: colors.border }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '700', color: colors.textMain }}>Spesifikasi Teknis</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {projectData.specs.map((item, i) => (
                <div key={i} style={{ ...specRowStyle, borderBottom: i !== projectData.specs.length - 1 ? `1px solid ${colors.line}` : 'none' }}>
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

// --- STYLES ---
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

export default Project4;