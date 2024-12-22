import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid"; 
import * as Yup from "yup";
import PropTypes from 'prop-types';
import styles from './component.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Must be a text")
    .min(3, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number")
    .required("Required"),
});

const handleNumberChange = (event, setFieldValue) => {
  const { value } = event.target;

  const formattedValue = value.replace(/(\d{3})(\d{2})(\d{2})?/, '$1-$2-$3').trim();

  setFieldValue('number', formattedValue); 
};

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(), 
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact); 
    actions.resetForm(); 
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ setFieldValue }) => (
        <Form className={styles.form}>
          <div className={styles.inputText}>
            <label htmlFor="name">Name</label>
            <Field className={styles.name} type="text" name="name" id="name" />
            <ErrorMessage className={styles.inputError} name="name" component="span" />
          </div>

          <div className={styles.inputNumber} >
            <label htmlFor="number">Number</label>
            <Field className={styles.name}
              type="text" 
              name="number" 
              id="number" 
              onChange={(event) => handleNumberChange(event, setFieldValue)} 
            />
            <ErrorMessage className={styles.inputError} name="number" component="span" />
          </div>

          <button className={styles.submit} type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;