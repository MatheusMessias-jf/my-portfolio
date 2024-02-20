'use client'
import './styles.sass'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { RepositoryType } from '@/app/api/github/repositories/mapper'

interface ProjectsComponentProps {
  repositories: RepositoryType[]
}

export function ProjectsComponent({ repositories }: ProjectsComponentProps) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        spacing: 15,
      },
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ],
  )

  return (
    <div className="global">
      <div className="global-header">
        <h2>Projetos</h2>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {repositories.map((repo) => {
          console.log(repo)

          return (
            <div key={repo.description} className="keen-slider__slide">
              <div className="image">
                <Image
                  quality={100}
                  width={1900}
                  height={955}
                  src={`${repo.imageUrl}`}
                  alt="project image"
                />
              </div>

              <a href={repo.url} rel="external" target="_blank">
                {repo.name}
              </a>

              <p className="project-description">{repo.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
