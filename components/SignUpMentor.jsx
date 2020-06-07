import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

const SignUpMentor = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  return (
    <div className="sign-up-mentor">
      <h1>Registro Mentor</h1>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          calendly: '',
          description: '',
          email: '',
          password: '',
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = 'Por favor ingresa tu nombre';
          }
          if (!values.lastName) {
            errors.lastName = 'Por favor ingresa un apellído';
          }
          if (!values.calendly) {
            errors.company = 'Por favor ingresa el enlace a tu Calendly';
          }
          if (!values.description) {
            errors.description = 'Por favor cuéntanos sobre ti';
          }
          if (!values.email) {
            errors.email = 'Por favor ingresa un password';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'El email ingresado es inválido';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              Nombre
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className="input__error"
              />
            </label>
            <label>
              Apellído
              <Field type="text" name="lastName" />
              <ErrorMessage
                name="lastName"
                component="div"
                className="input__error"
              />
            </label>
            <label>
              Ingresa el enlace a tu Calendly
              <Field type="text" name="calendly" />
              <ErrorMessage
                name="calendly"
                component="div"
                className="input__error"
              />
            </label>
            <label>
              Cuéntanos sobre ti en máximo 140 carácteres
              <Field
                type="textarea"
                name="description"
                as="textarea"
                rows="4"
                maxLength="140"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="input__error"
              />
            </label>
            <label>
              Correo electrónico
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="input__error"
              />
            </label>
            <label>
              Contraseña
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="input__error"
              />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Regístrarme
            </button>
          </Form>
        )}
      </Formik>

      <style jsx>{`
        h1 {
          text-shadow: 2px 2px #ffd422;
        }

        .sign-up-mentor {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #ea44a9;
          min-height: calc(100vh - 70px);
        }

        button {
          color: #000;
          background-color: #ffd422;
          text-shadow: 2px 2px #fff;
        }
      `}</style>
    </div>
  );
};

export default SignUpMentor;
