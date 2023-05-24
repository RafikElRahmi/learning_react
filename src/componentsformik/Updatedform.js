import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => console.log(values);
const validationSchema = yup.object({
  name: yup.string().required("required"),
  email: yup.string().required("required").email("invalid email"),
  channel: yup.string().required("required"),
});
const Updatedform = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="name">name</label>
          <Field type="text" name="name" id="name" />
          <span>
            <ErrorMessage name="name" />
          </span>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <Field type="email" name="email" id="email" />
          <span>
            <ErrorMessage name="email" />
          </span>
        </div>
        <div>
          <label htmlFor="channel">channel</label>
          <Field type="text" name="channel" id="channel" />
          <span>
            <ErrorMessage name="channel" />
          </span>
        </div>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};

export default Updatedform;
