import React from 'react'
import Header from '../components/Header';
import * as yup from 'yup'
import { ErrorMessage, Formik, Form, Field } from 'formik';
import '../pages/css/Login.css'

const Login = () => {
    const handleSubmit = values => console.log(values);
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    });

    return (
    <> 
    <Header/>
    <div className="LogIn">
    <h1>Login</h1>
    <p>Preencha com seus dados.</p>
    <Formik  initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
        <Form className="Form">
        <label className="label" for="email">Email</label>
            <div className="Form-group">
                
                <Field  name="email" className="Form-Field" />
                <ErrorMessage component="span" name="email" className="Form-Error" />
            </div>
            <label className="label" for="password">Senha</label>
            <div className="Form-group">
                <Field  name="password" className="Form-Field" />
                <ErrorMessage component="span" name="password" className="Form-Error" />
            </div>
            <button className="Form-Btn" type="submit">Login</button>
        </Form>
    </Formik>
    </div>    
    
    </>
    )
}

export default Login;