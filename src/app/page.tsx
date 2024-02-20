import { FetchRepositories } from './api/github/repositories/query'
import { Card } from './components/card/card'
import { Cards } from './components/cards/cards'
import { Hero } from './components/hero/hero'
import { MainStacks } from './components/main_stacks/main_stacks'
import { ProjectsComponent } from './components/projects-component/projects_component'
import './styles.sass'

export const revalidate = 0

export default async function Home() {
  const responseRepositories = await FetchRepositories()

  return (
    <main>
      <div className="container">
        <div className="display">
          <Hero />
          <Cards>
            <Card
              title={'Sobre mim'}
              description={
                'Apaixonado por tecnologia, objetivo sempre utilizar meu aprendizado para desenvolver soluções práticas, ansiando adquirir mais conhecimento e experiência para desenvolver soluções cada vez mais úteis.'
              }
            />
            <MainStacks />
            <ProjectsComponent repositories={responseRepositories} />
          </Cards>
        </div>
      </div>
    </main>
  )
}
