'use client'
import './styles.sass'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import Image from 'next/image'
import slide1 from '../../../assets/slide1.png'


export function ProjectsComponent() {

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )


  return (
    <div className='projects-container'>
      <div className='projects-container-header'>
        <h2>Projetos</h2>
      </div>

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <Image src={slide1} width={355} alt='slide 1' />
          <button>Projeto</button>
          <p className='project-description'>Aplicação web para agendamento de horários onde é possível reservar uma url personalizada e compartilhar seu calendário personalizado com sua disponibilidade de horários diários para reservas integrado com o Google Calendar </p>
        </div>

        <div className="keen-slider__slide">
          <Image src={slide1} width={355} alt='slide 1' />
          <button>Projeto</button>
          <p className='project-description'>Aplicação web para agendamento de horários onde é possível reservar uma url personalizada e compartilhar seu calendário personalizado com sua disponibilidade de horários diários para reservas integrado com o Google Calendar </p>
        </div>

        <div className="keen-slider__slide">
          <Image src={slide1} width={355} alt='slide 1' />
          <button>Projeto</button>
          <p className='project-description'>Aplicação web para agendamento de horários onde é possível reservar uma url personalizada e compartilhar seu calendário personalizado com sua disponibilidade de horários diários para reservas integrado com o Google Calendar </p>
        </div>

      </div>

    </div>
  )
}