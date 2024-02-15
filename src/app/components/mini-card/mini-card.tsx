import './styles.sass'

type MiniCardProps = {
  children: React.ReactNode
}

export function MiniCard(props: MiniCardProps) {
  return (
    <div className="mini-card-container">

      {props.children}

    </div>
  )
}