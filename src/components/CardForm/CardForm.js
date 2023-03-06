import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsReducer';
import shortid from 'shortid';

const CardForm = (props) => {
const [title, setTitle] = useState('');
const dispatch = useDispatch();
const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ id: shortid(), columnId: props.columnId, title }));
    setTitle('');
  };

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <label>Title:</label> 
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;