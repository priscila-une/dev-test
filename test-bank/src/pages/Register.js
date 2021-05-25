import React from 'react'
import Header from '../components/Header'
import * as yup from 'yup'
import { ErrorMessage, Formik, Form, Field } from 'formik';
import '../pages/css/Register.css'

const Register = () => {
    const handleSubmit2 = values => console.log(values);
    const validations2 = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    });

    return(
    <>    
        <Header />
        <div className="Form-Container">
        <h1>Crie Uma Conta</h1>
        <Formik  initialValues={{}} onSubmit={handleSubmit2} validationSchema={validations2}>
        <Form className="Form">
            
            <div className="Form-group LabelNames" >
                <label className="Labels">First Name</label>
                <Field  name="first-name" className="Form-Field" />
                <ErrorMessage component="span" name="first-name" className="Form-Error" />
                <label className="Labels">Last Name</label>
                <Field  name="last-name" className="Form-Field" />
                <ErrorMessage component="span" name="last-name" className="Form-Error" />
            </div>
            <div className="Form-group">
                <label className="Labels">Email</label>
                <Field  name="email" className="Form-Field" />
                <ErrorMessage component="span" name="email" className="Form-Error" />
            </div>
            <div className="Form-group">
                <label className="Labels">Password</label>
                <Field  name="password" className="Form-Field" />
                <ErrorMessage component="span" name="password" className="Form-Error" />
            </div>
            <button className="Form-Btn" type="submit">Criar</button>
        </Form>
    </Formik>
        </div>
    </>
    )
}


export default Register;