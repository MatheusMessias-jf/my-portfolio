import { MiniCard } from '../mini-card/mini-card'
import './styles.sass'
import { Instagram, Github, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div>
          <div className="hero-header">
            <p className="hero-header-name">Matheus Messias</p>
            <p className="hero-header-stack">Front-End Developer</p>
          </div>
          <div className="hero-description">Sou um desenvolvedor web cursando Análise e Desenvolvimento de Sistemas e espero poder te ajudar fazendo parte do seu projeto!</div>
        </div>
        <div className="hero-footer">
          <MiniCard>
            <Instagram />
          </MiniCard>

          <MiniCard>
            <Github />
          </MiniCard>

          <MiniCard>
            <Linkedin />
          </MiniCard>
        </div>
      </div>
    </div>
  )
}