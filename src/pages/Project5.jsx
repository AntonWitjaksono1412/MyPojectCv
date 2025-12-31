import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import './Project.css';

import foto1 from '../assets/Project5/foto1.jpg';
import foto2 from '../assets/Project5/foto2.jpg';
import foto3 from '../assets/Project5/foto3.jpg';
import foto4 from '../assets/Project5/foto4.jpg';
import foto5 from '../assets/Project5/foto5.jpg';
import foto6 from '../assets/Project5/foto6.jpg';
import foto7 from '../assets/Project5/foto7.jpg';
import foto8 from '../assets/Project5/foto8.jpg';
import foto9 from '../assets/Project5/foto9.jpg';
import foto10 from '../assets/Project5/foto10.jpg';


const Project5 = ({ darkMode }) => {
  const navigate = useNavigate();
  const allImages = [foto1,foto2,foto3,foto4,foto5,foto6,foto7,foto8,foto9];

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
title: "Custom 936 Soldering Station",
  category: "Electronics Tools · Workshop Equipment",
  description: "Modifikasi stasiun solder tipe 936 menggunakan kontroler PWM 5A untuk respon pemanasan yang lebih cepat dan stabil. Dilengkapi pemantauan tegangan real-time melalui voltmeter digital dan menggunakan konektor penerbangan CB 2-pin yang kokoh.",
  specs: [
    { label: "Control System", value: "PWM Power Controller (8-35V)" },
    { label: "Power Input", value: "19V 3A DC Adapter" },
    { label: "Driver Capacity", value: "5A / 90W PWM Module" },
    { label: "Monitoring", value: "Mini Digital Voltmeter" },
    { label: "Connector Type", value: "CB Series 2-Pin Aviation Plug" },
    { label: "Heater Support", value: "Standard 936 Soldering Handle" }
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

export default Project5;
