import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import './Project.css';

import foto1 from '../assets/Project1/foto1.jpg';
import foto2 from '../assets/Project1/foto2.jpg';
import foto3 from '../assets/Project1/foto3.jpg';
import foto4 from '../assets/Project1/foto4.jpg';
import foto5 from '../assets/Project1/foto5.jpg';
import foto6 from '../assets/Project1/foto6.jpg';

const Project1 = ({ darkMode }) => {
  const navigate = useNavigate();
  const allImages = [foto1,foto2,foto3,foto4,foto5,foto6];

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
    title: "Compact 2-Way Bookshelf Monitor",
    category: "Acoustic Design & Loudspeaker Engineering",
    description:
      "Sistem pengeras suara bookshelf 2-way yang dirancang untuk performa maksimal dalam dimensi ringkas. Memadukan woofer LG 3 inci high-excursion dengan Silk Dome tweeter untuk separasi suara yang jernih. Dilengkapi crossover pasif presisi untuk memastikan transmisi sinyal tanpa hambatan.",
    specs: [
      { label: "Configuration", value: "2-Way Passive System" },
      { label: "Main Driver", value: "3\" LG High Excursion Woofer" },
      { label: "High Driver", value: "1\" Silk Dome Tweeter" },
      { label: "Crossover Network", value: "2-Way Passive Filter" },
      { label: "Enclosure Material", value: "Custom Wood Enclosure" },
      { label: "Input Terminal", value: "Gold-Plated Binding Post" }
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

export default Project1;
