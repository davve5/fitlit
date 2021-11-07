import { Formik } from 'formik';
import React from 'react';

import Button from '@/components/Buttons/Button';
import CheckboxField from '@/components/Form/CheckboxField';
import InputField from '@/components/Form/InputField';
import Layout from '@/components/Layouts/Layout';
import Link from '@/components/Links/Link';
import Seo from '@/components/Seo';

const validate = (values: any) => {
  const errors = {
    login: '',
  };

  if (!values.login) {
    errors.login = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
    errors.login = 'Invalid email address';
  }

  return errors;
};

const initialValues = { login: '', password: '', validateOnMount: true };

const onSubmit = (values: any, actions: any) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
};

const LoginPage: React.FC<{}> = () => {
  return (
    <Layout>
      <Seo title='Login' />

      <div className='relative h-48 bg-accent-500 rounded-bl-4xl'>
        <svg
          className='absolute bottom-0'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#ffffff'
            fillOpacity='1'
            d='M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          />
        </svg>
      </div>
      <div className='px-10 bg-white rounded-tr-4x flex flex-col items-center'>
        <h1 className='text-2xl font-semibold text-gray-900'>Welcome back!</h1>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            isValid,
            dirty,
            isSubmitting,
            values,
          }) => (
            <form
              className='mt-12 space-y-10 max-w-screen-md'
              onSubmit={handleSubmit}
            >
              <InputField
                id='login'
                name='login'
                type='text'
                label='Email	address'
                placeholder='john@doe.com'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
              />
              <InputField
                id='password'
                name='password'
                type='password'
                label='Password'
                placeholder='Password'
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <CheckboxField id='terms-and-privacy' name='terms-and-privacy'>
                I agree to the
                <Link href='#Terms'>Terms</Link>
                and
                <Link href='#Terms'>Privacy Policy</Link>
                <span>
                  {isValid} | {dirty} | {isSubmitting}
                </span>
              </CheckboxField>
              <Button
                type='submit'
                disabled={!(isValid && dirty)}
                className='w-full'
              >
                Sign in
              </Button>
            </form>
          )}
        </Formik>
        <Link className='block mt-4' href='/'>
          Forgot your password?
        </Link>
      </div>
    </Layout>
  );
};

export default LoginPage;
