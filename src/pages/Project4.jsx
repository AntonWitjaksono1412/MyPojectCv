import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import './Project.css';

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
const Project4 = ({ darkMode }) => {
  const navigate = useNavigate();
  const allImages = [foto1,foto2,foto3,foto4,foto5,foto6,foto7,foto8,foto9,foto10,foto11,foto12];

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

  return (
    <div className={`project-wrapper ${darkMode ? 'dark' : ''}`}>
      <div className="project-inner">

        <span className="category">{projectData.category}</span>
        <h1 className="title">{projectData.title}</h1>

        <div className="project-grid">
          {/* IMAGE */}
          <div className="card">
            <div className="image-container">
              <img src={allImages[currentIndex]} alt="Product View" />

              <button
                className="arrow left"
                onClick={() =>
                  setCurrentIndex(currentIndex === 0 ? allImages.length - 1 : currentIndex - 1)
                }
              >
                <ChevronLeft size={22} />
              </button>

              <button
                className="arrow right"
                onClick={() =>
                  setCurrentIndex(currentIndex === allImages.length - 1 ? 0 : currentIndex + 1)
                }
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="thumb-wrapper">
              {allImages.slice(thumbOffset, thumbOffset + maxVisible).map((img, i) => {
                const idx = i + thumbOffset;
                return (
                  <div
                    key={idx}
                    className={`thumb ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  >
                    <img src={img} alt={`thumb-${idx}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* INFO */}
          <div className="info-col">
            <div className="card">
              <h3>Deskripsi Projek</h3>
              <p>{projectData.description}</p>
            </div>

            <div className="card">
              <h3>Spesifikasi Teknis</h3>
              {projectData.specs.map((item, i) => (
                <div className="spec-row" key={i}>
                  <span>{item.label}</span>
                  <span className="spec-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project4;
