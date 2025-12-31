import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import './Project.css';

import foto1 from '../assets/Project3/foto1.png';
import foto2 from '../assets/Project3/foto2.png';
import foto3 from '../assets/Project3/foto3.png';
import foto4 from '../assets/Project3/foto4.png';


const Project3 = ({ darkMode }) => {
  const navigate = useNavigate();
  const allImages = [foto1,foto2,foto3,foto4];

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
title: "Procedural Tweeter Mounting Plate",
  category: "Acoustic Design & Loudspeaker Engineering  ",
  description: "Perancangan dudukan (faceplate) tweeter menggunakan pemrograman Python di Blender (bpy). Geometri plat dibuat secara otomatis (generative design) mencakup lubang baut, ring penguat, dan chamfer miring untuk optimalisasi dispersi suara tweeter.",
  specs: [
    { label: "Design Method", value: "Procedural Python Scripting (Blender)" },
    { label: "Primary Material", value: "3D Printed PLA+ / Aluminum" },
    { label: "Main Function", value: "Acoustic Tweeter Faceplate" },
    { label: "Compatibility", value: "1\" Silk Dome Tweeter Unit" },
    { label: "Acoustic Feature", value: "Deep Angled Chamfer for Dispersion" },
    { label: "Dimensions", value: "115mm Outer Diameter" }
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

export default Project3;
