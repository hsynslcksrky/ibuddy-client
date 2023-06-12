// import { useAuth0 } from "@auth0/auth0-react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import * as Yup from "yup";
// import userService from "../services/userService";


// export default function WelcomePage() {
//     let navigate = useNavigate();
    
//     const { user } = useAuth0();
//     const initialValues = {
//         firstName: user?.given_name,
//         lastName: user?.family_name,
//         birthday: "",
//         email: user?.email,
//         privacyPolicyAccepted: false,
//         profilePicture: null
//     };
    
//     const onSubmit = async (values) => {
//         try {
//             const { privacyPolicyAccepted, ...welcomeForm } = values;
//             await userService.saveUser(welcomeForm);
//             navigate("/dashboard");
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const validationSchema = Yup.object({
//         firstName: Yup.string().required("First name is required"),
//         lastName: Yup.string().required("Last name is required"),
//         birthday: Yup.date().required("Birthday is required"),
//         email: Yup.string().required("Email is required"),
//         privacyPolicyAccepted: Yup.boolean().oneOf([true], "Required"),
//         profilePicture: Yup.mixed().test("fileSize", "File size is too large", (value) => {
//             if (value) {
//                 return value.size <= 1024 * 1024; // 1MB
//             }
//             return true;
//         })
//     });

//     return (
//         <Container>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={onSubmit}
//             >
//                 {({ isSubmitting, setFieldValue }) => (
//                     <Form className="bg-glass">
//                         <div className="form-group">
//                             <label htmlFor="email" className="text-white">Email</label>
//                             <Field type="text" name="email" className="form-control" disabled />
//                             <ErrorMessage name="email" component="div" className="text-danger fw-bold display-6" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="firstName" className="text-white">First Name</label>
//                             <Field type="text" name="firstName" className="form-control" />
//                             <ErrorMessage name="firstName" component="div" className="text-danger fw-bold display-6" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="lastName" className="text-white">Last Name</label>
//                             <Field type="text" name="lastName" className="form-control" />
//                             <ErrorMessage name="lastName" component="div" className="text-danger fw-bold display-6" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="birthday" className="text-white">Birthday</label>
//                             <Field type="date" name="birthday" className="form-control" />
//                             <ErrorMessage name="birthday" component="div" className="text-danger fw-bold display-6" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="profilePicture" className="text-white">Profile Picture</label>
//                             <Field
//                                 type="file"
//                                 name="profilePicture"
//                                 className="form-control"
//                                 onChange={(event) => setFieldValue("profilePicture", event.target.files[0])}
//                             />
//                             <ErrorMessage name="profilePicture" component="div" className="text-danger fw-bold display-6" />
//                         </div>
                       
//                         <div className="form-group form-check">
//                             <Field
//                                 type="checkbox"
//                                 name="privacyPolicyAccepted"
//                                 className="form-check-input"
//                                 id="privacyPolicyAccepted"
//                             />
//                             <label htmlFor="privacyPolicyAccepted" className="form-check-label ">
//                                 I accept the Privacy Policy
//                             </label>
//                             <ErrorMessage
//                                 component="div"
//                                 name="privacyPolicyAccepted"
//                                 className="text-danger"
//                             />
//                         </div>

//                         <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
//                             Submit
//                         </button>
//                     </Form>
//                 )}
//             </Formik>
//         </Container>
//     );
// }
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container } from 'react-bootstrap';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import userService from '../services/userService';
import { useAuth0 } from "@auth0/auth0-react";
export default function WelcomePage() {
  const navigate = useNavigate();

  const { user } = useAuth0();

  const initialValues = {
    firstName: user?.given_name || '',
    lastName: user?.family_name || '',
    birthday: '',
    email: user?.email || '',
    privacyPolicyAccepted: false,
    profilePicture: null,
  };

  const onSubmit = async (values) => {
    try {
      const { privacyPolicyAccepted, ...welcomeForm } = values;
      await userService.saveUser(welcomeForm);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    birthday: Yup.date().required('Birthday is required'),
    email: Yup.string().required('Email is required'),
    privacyPolicyAccepted: Yup.boolean().oneOf([true], 'Required'),
    profilePicture: Yup.mixed().test('fileSize', 'File size too large', (value) => {
      if (value) {
        return value.size <= 5000000; // Maximum file size: 5MB
      }
      return true; // Allow empty profile picture
    }),
  });

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="bg-glass">
            <div className="form-group">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <Field type="text" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger fw-bold display-6" />
            </div>
            <div className="form-group">
              <label htmlFor="firstName" className="text-white">
                First Name
              </label>
              <Field type="text" name="firstName" className="form-control" />
              <ErrorMessage name="firstName" component="div" className="text-danger fw-bold display-6" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="text-white">
                Last Name
              </label>
              <Field type="text" name="lastName" className="form-control" />
              <ErrorMessage name="lastName" component="div" className="text-danger fw-bold display-6" />
            </div>
            <div className="form-group">
              <label htmlFor="birthday" className="text-white">
                Birthday
              </label>
              <Field type="date" name="birthday" className="form-control" />
              <ErrorMessage name="birthday" component="div" className="text-danger fw-bold display-6" />
            </div>
            <div className="form-group">
              <label htmlFor="profilePicture" className="text-white">
                Profile Picture
              </label>
              <input
                type="file"
                name="profilePicture"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  setFieldValue('profilePicture', file);
                }}
                className="form-control"
              />
              <ErrorMessage name="profilePicture" component="div" className="text-danger fw-bold display-6" />
            </div>
            <div className="form-group form-check">
              <Field
                type="checkbox"
                name="privacyPolicyAccepted"
                className="form-check-input"
                id="privacyPolicyAccepted"
              />
              <label htmlFor="privacyPolicyAccepted" className="form-check-label ">
                I accept the Privacy Policy
              </label>
              <ErrorMessage component="div" name="privacyPolicyAccepted" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
