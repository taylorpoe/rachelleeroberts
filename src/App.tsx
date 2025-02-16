import { MdEmail } from "react-icons/md";
import { Icon } from "@iconify/react";
import "./App.css";
import heroImage from "./assets/heroimage.JPG";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <img
            src={heroImage}
            alt="Rachel Lee Roberts"
            className="hero-image"
          />
        </div>
        <div className="hero-right">
          <h1>Rachel Lee Roberts</h1>
          <p className="hero-description">
            A country pop artist from Northern California based in Nashville
            Tennessee.
          </p>
          <a
            href="https://forms.gle/TFfhAT6WZfNY2mdXA"
            target="_blank"
            rel="noopener noreferrer"
            className="email-button"
          >
            <MdEmail className="email-icon" />
            Join Email List
          </a>
        </div>
      </div>
      <div className="social-container">
        <a
          href="https://open.spotify.com/artist/4IkIQH1H6uomyGgjpABSaz?si=q-DV5JYtRuShLUzvF6kSpQ"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:spotify" className="social-icon" />
        </a>
        <a
          href="https://music.apple.com/us/artist/rachel-lee-roberts/1521097085"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:apple" className="social-icon" />
        </a>
        <a
          href="https://www.tiktok.com/@rachelleerobertsmusic"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="simple-icons:tiktok" className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/rachelleerobertsmusic/"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:instagram" className="social-icon" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCLZCJfEGxNvzSkdfL97nEgw"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:youtube" className="social-icon" />
        </a>
      </div>
      <Gallery />
    </>
  );
}

export default App;
