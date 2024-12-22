import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem.jsx';
import styles from './component.module.css';

const ContactList = ({ data, onDelete }) => {
    return (
        <ul className={styles.list}>
            {data.map(({ id, name, number }) => (
                <ContactListItem key={id} id={id} name={name} number={number} onDelete={onDelete} /> 
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;