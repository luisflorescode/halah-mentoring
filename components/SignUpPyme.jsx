import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignUpPyme = () => (
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

export default SignUpPyme;
