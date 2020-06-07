import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import Message from './Message';
import Router from 'next/router';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const login = async (values) => {
    setLoading(true);
    setError(null);
    try {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/sign-in`;
      const response = await axios.post(
        URL,
        {
          apiKeyToken: process.env.NEXT_PUBLIC_API_KEY,
        },
        {
          auth: {
            username: values.email,
            password: values.password,
          },
        },
      );
      localStorage.setItem('session', JSON.stringify(response.data));
      if (response.data.user.typeOfUser === 'mentor') {
        Router.push('/mentor');
      } else {
        Router.push('/pymes');
      }
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  if (response) {
    return <Message>Usuario registrado correctamente</Message>;
  }

  return (
    <div className="sign-up-mentor">
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Por favor ingresa tu email';
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
          await login(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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
              Iniciar Sesión
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

export default Login;
