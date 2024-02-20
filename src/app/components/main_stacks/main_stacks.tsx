import { MiniCard } from '../mini-card/mini-card'
import './styles.sass'

import ReactLogo from '../../../assets/React.svg'
import DartLogo from '../../../assets/Dart.svg'
import FlutterLogo from '../../../assets/Flutter.svg'
import JavaScriptLogo from '../../../assets/JavaScript.svg'
import NextLogo from '../../../assets/Next.svg'
import PrismaLogo from '../../../assets/Prisma.svg'
import SassLogo from '../../../assets/Sass.svg'
import StyledComponentsLogo from '../../../assets/Styled-components.svg'
import TailwindLogo from '../../../assets/Tailwind.svg'
import TypescriptLogo from '../../../assets/Typescript.svg'
import Image from 'next/image'

export function MainStacks() {


  return (
    <div className='global'>
      <div className='global-header'>
        <h2>Principais Stacks</h2>
      </div>
      <div className='mini-cards-container'>
        <MiniCard>
          <Image height={30} src={NextLogo} alt='Next Logo' />
        </MiniCard>
        <MiniCard>
          <Image width={30} src={TypescriptLogo} alt='Next Logo' />
        </MiniCard>
        <MiniCard>
          <Image height={30} src={DartLogo} alt='Next Logo' />
        </MiniCard>
        <MiniCard>
          <Image height={30} src={ReactLogo} alt='Next Logo' />
        </MiniCard>
        <MiniCard>
          <Image height={30} src={FlutterLogo} alt='Next Logo' />
        </MiniCard>
        <MiniCard>
          <Image height={30} src={JavaScriptLogo} alt='Next Logo' />
        </MiniCard>
        <MiniCard>
          <Image height={30} src={PrismaLogo} alt='Next Logo' />
        </MiniCard>
        <MiniCard>
          <Image height={30} src={SassLogo} alt='Next Logo' />
        </MiniCard>
        <MiniCard>
          <Image height={30} src={StyledComponentsLogo} alt='Next Logo' />
        </MiniCard>
        <MiniCard>
          <Image width={30} height={30} src={TailwindLogo} alt='Next Logo' />
        </MiniCard>

      </div>
    </div>
  )
}