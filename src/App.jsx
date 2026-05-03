import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import StelaImg from './assets/Stela png.png'
import './App.css'

// Import SVG icons
import DocumentationIcon from './assets/iconsax-ai-users-ac23a23b5f91-.svg'
import SocialIcon from './assets/iconsax-instagram-ec7376f22dab-.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>STELA</h1>
        </div>
        <div>
          <h1>Team e-sport compétitive</h1>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <img src={DocumentationIcon} alt="Documentation" className="icon" />
          <h2>Rejoindre notre aventure</h2>
          <p>16 ans minimum et un esprit de respect, persévérance et d'élégance sont nécessaires à la réussite au sein de notre équipe</p>
          <p>
            Crée un ticket de recrutement sur notre Discord en le remplissant, puis vous serez pris en charge par notre personnel.
          </p>
          <ul>
            <li>
              <a href="https://discord.gg/GzbdJRjZ3k" target="_blank">
                Discord
              </a>
            </li>
            <li>
              <a href="mailto:stela.esport@gmail.com" target="_blank">
                e-mail
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <img src={SocialIcon} alt="Social" className="icon" />
          <h2>Bienvenue dans notre univers</h2>
          <p>Rejoindre la Stela community</p>
          <ul>
            <li>
              <a href="https://www.youtube.com/@stela.esport" target="_blank">
                Youtube
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@stela.esport?is_from_webapp=1&sender_device=pc" target="_blank">
                Tiktok
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/stelaesport" target="_blank">                  
                Twitch
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/stela.esport/?hl=fr" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
