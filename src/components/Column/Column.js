import styles from './Column.module.scss'
import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm'
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = ({id, icon, title}) => {
  const cards = useSelector((state) => getFilteredCards(state, id)
);

  return (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon} />
        {title}
      </h1>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} columnId={card.columnId} />)}
      </ul>
      <CardForm columnId={id} />
    </article>
  )
}

export default Column
