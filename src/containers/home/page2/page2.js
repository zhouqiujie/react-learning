import React, { Component } from 'react';
import { Formik, Field, ErrorMessage, useFormik } from 'formik';
// import { string, object } from 'yup';
import * as Yup from 'yup';

export class Page2 extends Component {
    render() {
        return (
            <div>
                <h5>page2</h5>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    /* validate={values => {
                        console.log(values)
                        const { email, password } = values;
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }} */
                    validationSchema={() => {
                        return Yup.object({
                            email: Yup.string().max('20', 'Must be 15 characters or less').required('Required'),
                            password: Yup.string().min('5','Must be 5 chatacters at least').required('Required')
                        })
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {
                        ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label></label>
                                    <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                    <br/>
                                    <small className="text-danger">{errors.email && touched.email && errors.email}</small>
                                </div>
                                <div className="mt-2">
                                    <label></label>
                                    <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                    <br/>
                                    <small className="text-danger">{errors.password && touched.password && errors.password}</small>
                                </div>
                                <div className="mt-2">
                                    <button type="submit" disabled={isSubmitting}>Submit</button>
                                </div>
                            </form>
                        )
                    }

                </Formik>

            </div>
        );
    }
}

export default Page2;
