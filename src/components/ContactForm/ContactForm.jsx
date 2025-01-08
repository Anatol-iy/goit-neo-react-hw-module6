import { useDispatch } from "react-redux"; 
import { addContact } from "../../redux/contactsSlice"; 
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid"; 
import { useId } from "react";

const ContactForm = () => {
  const dispatch = useDispatch();

  // Валидация формы
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .min(10, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({ id: nanoid(), name: values.name, number: values.number })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameId}
          placeholder="Enter contact name"
        />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />

        <label htmlFor={phoneId}>Number</label>
        <Field
          type="text"
          name="number"
          id={phoneId}
          placeholder="Enter phone number"
        />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
