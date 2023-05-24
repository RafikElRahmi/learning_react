import { useFormik } from "formik";
import React from "react";
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
// const validate = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = "required";
//   }
//   if (!values.email) {
//     errors.email = "required";
//   } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
//     errors.email = "invalid email";
//   }
//   if (!values.channel) {
//     errors.channel = "required";
//   }
//   return errors;
// };
const Simpleform = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    //validate
  });
  //   const formik = useFormik({
  //     initialValues: {
  //       name: "",
  //       email: "",
  //       channel: "",
  //     },
  //     onSubmit: (values) => console.log(values),
  //     validate: (values) => {
  //       const errors = {};
  //       if (!values.name) {
  //         errors.name = "required";
  //       }
  //       if (!values.email) {
  //         errors.email = "required";
  //       } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
  //         errors.email = "invalid email";
  //       }
  //       if (!values.channel) {
  //         errors.channel = "required";
  //       }
  //       return console.log(errors);
  //     },
  //   });
    console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">name</label>
        {"  "}
        <input
          type="text"
          name="name"
          id="name"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.name}
          {...formik.getFieldProps("name")}
        />
        {formik.errors.name && formik.touched.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">email</label>
        {"  "}
        <input
          type="email"
          name="email"
          id="email"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.email}
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="channel">channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.channel}
          {...formik.getFieldProps("channel")}
        />
        {formik.errors.channel && formik.touched.channel ? (
          <div>{formik.errors.channel}</div>
        ) : null}
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default Simpleform;
