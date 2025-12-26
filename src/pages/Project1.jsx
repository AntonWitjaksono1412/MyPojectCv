import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

import foto1 from '../assets/Project1/foto1.jpg';
import foto2 from '../assets/Project1/foto2.jpg';
import foto3 from '../assets/Project1/foto3.jpg';
import foto4 from '../assets/Project1/foto4.jpg';
import foto5 from '../assets/Project1/foto5.jpg';
import foto6 from '../assets/Project1/foto6.jpg';
import foto7 from '../assets/Project1/foto7.jpg';
import foto8 from '../assets/Project1/foto8.jpg';
import foto9 from '../assets/Project1/foto9.jpg';
import foto10 from '../assets/Project1/foto10.jpg';
import foto11 from '../assets/Project1/foto11.jpg';
import foto12 from '../assets/Project1/foto12.jpg';
import foto13 from '../assets/Project1/foto13.jpg';
import foto14 from '../assets/Project1/foto14.jpg';
import foto15 from '../assets/Project1/foto15.jpg';
import foto16 from '../assets/Project1/foto16.jpg';
import foto17 from '../assets/Project1/foto17.jpg';
import foto18 from '../assets/Project1/foto18.jpg';
import foto19 from '../assets/Project1/foto19.jpg';
import foto20 from '../assets/Project1/foto20.jpg';
import foto21 from '../assets/Project1/foto21.jpg';
import foto22 from '../assets/Project1/foto22.jpg';
import foto23 from '../assets/Project1/foto23.jpg';
import foto24 from '../assets/Project1/foto24.jpg';
import foto25 from '../assets/Project1/foto25.jpg';
import foto26 from '../assets/Project1/foto26.jpg';
import foto27 from '../assets/Project1/foto27.jpg';
import foto28 from '../assets/Project1/foto28.jpg';
import foto29 from '../assets/Project1/foto29.jpg';
import foto30 from '../assets/Project1/foto30.jpg';
import foto31 from '../assets/Project1/foto31.jpg';
import foto32 from '../assets/Project1/foto32.jpg';
import foto33 from '../assets/Project1/foto33.jpg';
import foto34 from '../assets/Project1/foto34.jpg';
import foto35 from '../assets/Project1/foto35.jpg';
import foto36 from '../assets/Project1/foto36.jpg';
import foto37 from '../assets/Project1/foto37.jpg';
import foto38 from '../assets/Project1/foto38.jpg';
import foto39 from '../assets/Project1/foto39.jpg';
import foto40 from '../assets/Project1/foto40.jpg';
import foto41 from '../assets/Project1/foto41.jpg';
import foto42 from '../assets/Project1/foto42.jpg';

const Project1 = ({ darkMode }) => {
  const navigate = useNavigate();
const allImages = [
  foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10,
  foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19, foto20,
  foto21, foto22, foto23, foto24, foto25, foto26, foto27, foto28, foto29, foto30,
  foto31, foto32, foto33, foto34, foto35, foto36, foto37, foto38, foto39, foto40,
  foto41, foto42
];  const [currentIndex, setCurrentIndex] = useState(0);

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
  title: "Gainclone Integrated Amplifier",
category: "Audio Engineering · DIY Amplifier",
  description:
    "Proyek Gainclone Integrated Amplifier ini terinspirasi dari desain legendaris Kimura-San/47Labs Gaincard yang mengusung konsep less-is-more, dengan jumlah komponen yang minimal dan jalur sinyal yang sangat pendek. Amplifier ini menggunakan sepasang IC Texas Instruments LM3875 dan dirancang sebagai amplifier terintegrasi dengan beberapa input analog serta kontrol volume untuk menghasilkan karakter suara yang bersih, detail, dan musikal.",
  specs: [
    { label: "Konsep Amplifier", value: "Gainclone (Inspirasi 47Labs Gaincard)" },
    { label: "IC Amplifier Utama", value: "Texas Instruments LM3875 (Dual Mono)" },
    { label: "Konfigurasi Input", value: "3 Input Analog (Dapat Dipilih)" },
    { label: "Kontrol Volume", value: "TKD CP601 Stereo Attenuator" },
    { label: "Pemilih Input", value: "Lorlin CK Rotary Switch" },
    { label: "Material Chassis", value: "Kayu Black Walnut (Sudut Mitre)" },
    { label: "Heatsink", value: "Heatsink Aluminium Custom Machining" }
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
          style={{...backButtonStyle, color: colors.textSub}}
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
        
        <div style={{...cardStyle, backgroundColor: colors.card, borderColor: colors.border}}>
          <div style={{...mainImageContainer, backgroundColor: darkMode ? '#0f172a' : '#fff'}}>
            <img 
              src={allImages[currentIndex]} 
              alt="Product View" 
              style={{ width: '100%', height: '480px', objectFit: 'contain' }} 
            />
            
            <button onClick={() => setCurrentIndex(currentIndex === 0 ? allImages.length - 1 : currentIndex - 1)} 
              style={{ ...arrowStyle, left: '20px', backgroundColor: colors.card, color: colors.textMain }}>
              <ChevronLeft size={22} />
            </button>
            <button onClick={() => setCurrentIndex(currentIndex === allImages.length - 1 ? 0 : currentIndex + 1)} 
              style={{ ...arrowStyle, right: '20px', backgroundColor: colors.card, color: colors.textMain }}>
              <ChevronRight size={22} />
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '25px', overflow: 'hidden' }}>
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
          
          <div style={{...cardStyle, backgroundColor: colors.card, borderColor: colors.border}}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '700', color: colors.textMain }}>
              Deskripsi Projek
            </h3>
            <p style={{ color: colors.textSub, lineHeight: '1.8', fontSize: '15px', margin: 0 }}>
              {projectData.description}
            </p>
          </div>

          <div style={{...cardStyle, backgroundColor: colors.card, borderColor: colors.border}}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '700', color: colors.textMain }}>
              Spesifikasi Teknis
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {projectData.specs.map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 0', borderBottom: i !== projectData.specs.length - 1 ? `1px solid ${colors.line}` : 'none'
                }}>
                  <span style={{ fontSize: '14px', color: colors.textSub, fontWeight: '500' }}>{item.label}</span>
                  <span style={{ fontSize: '14px', color: colors.textMain, fontWeight: '700', textAlign: 'right' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const backButtonStyle = {
  display: 'flex', alignItems: 'center', gap: '8px', border: 'none', 
  backgroundColor: 'transparent', cursor: 'pointer',
  padding: '0', marginBottom: '20px', fontSize: '14px', fontWeight: '700',
  transition: '0.3s'
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

const cardStyle = {
  padding: '30px', borderRadius: '24px', 
  boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid',
  transition: '0.3s'
};

export default Project1;