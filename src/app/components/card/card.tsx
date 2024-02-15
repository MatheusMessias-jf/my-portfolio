import './styles.sass'

type CardProps = {
  title: String,
  description: String,
  children?: React.ReactNode
};

export function Card(props: CardProps) {
  return (
    <div className="card-container">
      <div className="card-container-header">
        <h2>{props.title}</h2>
      </div>
      <p>{props.description}</p>
    </div>
  )
}