import './styles.sass'

type CardsProps = {
  children: React.ReactNode;
};

export function Cards(props: CardsProps) {
  return (
    <div className="cards">
      <div className="cards-container">{props.children}</div>
    </div>
  )
}