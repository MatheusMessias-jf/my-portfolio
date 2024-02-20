type CardProps = {
  title: String,
  description: String,
  children?: React.ReactNode
};

export function Card(props: CardProps) {
  return (
    <div className="global">
      <div className="global-header">
        <h2>{props.title}</h2>
      </div>
      <p>{props.description}</p>
    </div>
  )
}