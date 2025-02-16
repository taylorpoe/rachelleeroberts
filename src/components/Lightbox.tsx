import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface LightboxProps {
  image: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ image, onClose, onNext, onPrev }: LightboxProps) => {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button
        className="lightbox-nav prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <MdChevronLeft />
      </button>
      <div className="lightbox-content">
        <img
          src={image}
          alt="Enlarged view"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <button
        className="lightbox-nav next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <MdChevronRight />
      </button>
    </div>
  );
};

export default Lightbox;
