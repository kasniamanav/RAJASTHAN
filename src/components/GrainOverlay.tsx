export const GrainOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 opacity-30 mix-blend-overlay">
      <svg width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
};
