import { useEffect, useState } from "react";
import Lightbox from "./Lightbox";

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Import all images from the gallery folder
    const importImages = async () => {
      const imageContext = import.meta.glob<{ default: string }>(
        "/src/assets/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG}"
      );
      const imageUrls = await Promise.all(
        Object.keys(imageContext).map(async (path) => {
          const module = await imageContext[path]();
          return module.default;
        })
      );
      setImages(imageUrls);
    };

    importImages();
  }, []);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="gallery-container">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedIndex(index)}
          >
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
      {selectedIndex !== null && (
        <Lightbox
          image={images[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default Gallery;
