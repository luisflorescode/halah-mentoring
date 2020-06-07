import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import Message from './Message';

const SignUpPyme = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const signUp = async (values) => {
    setLoading(true);
    setError(null);
    try {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/sign-up`;
      const data = {
        apiKeyToken: process.env.NEXT_PUBLIC_API_KEY,
        user: {
          email: values.email,
          password: values.password,
          name: values.name,
          lastName: values.lastName,
          calendly: values.calendly,
          description: values.description,
          typeOfUser: 'pyme',
        },
      };
      const res = await axios.post(URL, data);
      setResponse(res);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  if (response) {
    return <Message>Usuario registrado correctamente</Message>;
  }

  return (
    <div className="sign-up-pyme">
      <h1>Registro PYME</h1>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          company: '',
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
          if (!values.company) {
            errors.company = 'Por favor ingresa el nombre de tu empresa';
          }
          if (!values.description) {
            errors.description = 'Por favor cuéntanos sobre tu empresa';
          }
          if (!values.email) {
            errors.email = 'Por favor ingresa un correo electrónico';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'El email ingresado es inválido';
          }
          if (!values.password) {
            errors.password = 'Por favor ingresa una contraseña';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await signUp(values);
          setSubmitting(false);
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
              Nombre de tu empresa
              <Field type="text" name="company" />
              <ErrorMessage
                name="company"
                component="div"
                className="input__error"
              />
            </label>
            <label>
              Describe tu empresa en máximo 140 carácteres
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
          text-shadow: 2px 2px #ea44a9;
        }

        .sign-up-pyme {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #ffd422;
          min-height: calc(100vh - 70px);
        }
      `}</style>
    </div>
  );
};

export default SignUpPyme;
