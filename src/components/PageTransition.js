import React, { useState, useEffect } from 'react';

const PageTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (children !== displayChildren) {
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [children, displayChildren]);

  return (
    <div className="relative min-h-screen">
      {/* 3D Transition Container */}
      <div
        className={`transition-all duration-700 ease-in-out transform-gpu preserve-3d ${
          isTransitioning 
            ? 'opacity-0 rotate-y-90 scale-95' 
            : 'opacity-100 rotate-y-0 scale-100'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {displayChildren}
      </div>

      {/* 3D Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="relative">
            {/* 3D Rotating Cube */}
            <div 
              className="w-20 h-20 relative transform-gpu animate-spin-3d"
              style={{
                transformStyle: 'preserve-3d',
                animation: 'spin3d 1s ease-in-out infinite',
              }}
            >
              {/* Cube Faces */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg shadow-2xl" 
                   style={{ transform: 'translateZ(40px)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-2xl" 
                   style={{ transform: 'rotateY(90deg) translateZ(40px)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-800 rounded-lg shadow-2xl" 
                   style={{ transform: 'rotateY(180deg) translateZ(40px)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg shadow-2xl" 
                   style={{ transform: 'rotateY(-90deg) translateZ(40px)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg shadow-2xl" 
                   style={{ transform: 'rotateX(90deg) translateZ(40px)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-2xl" 
                   style={{ transform: 'rotateX(-90deg) translateZ(40px)' }}></div>
            </div>

            {/* Loading Ring */}
            <div className="absolute inset-0 -m-8">
              <div className="w-36 h-36 rounded-full border-4 border-primary-200 border-t-primary-600 animate-spin"></div>
            </div>

            {/* Particles */}
            <div className="absolute inset-0 -m-16">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-500 rounded-full animate-pulse"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateY(-40px)`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1.5s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3D Transition Styles */}
      <style jsx>{`
        @keyframes spin3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .transform-gpu {
          transform: translateZ(0);
          will-change: transform;
        }

        .rotate-y-0 {
          transform: rotateY(0deg);
        }

        .rotate-y-90 {
          transform: rotateY(90deg);
        }

        .scale-95 {
          transform: scale(0.95);
        }

        .scale-100 {
          transform: scale(1);
        }
      `}</style>
    </div>
  );
};

export default PageTransition;
