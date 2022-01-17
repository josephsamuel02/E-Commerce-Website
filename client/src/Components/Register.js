// import { useEffect } from "react";
// import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            age: "",
            gender: "",
            state: "",
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "name cannot exceed 15 characters")
                .required("required"),
            age: Yup.string()
                .max(3, "age cannot exceed 2 characters")
                .required("required"),
            gender: Yup.string()
                .max(6, "gender cannot exceed 6 characters")
                .required("required"),
            state: Yup.string()
                .max(10, "state cannot exceed 10 characters")
                .required("required"),
        }),

        onSubmit: () => {},
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    id="name"
                    placeholder="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <p>{formik.errors.name}</p>
                ) : null}
                <br /> <br />
                <input
                    type="text"
                    id="age"
                    placeholder="age"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.age}
                />{" "}
                {formik.touched.age && formik.errors.age ? (
                    <p>{formik.errors.age}</p>
                ) : null}
                <br /> <br />
                <input
                    type="text"
                    id="gender"
                    placeholder="gender"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.gender}
                />
                {formik.touched.gender && formik.errors.gender ? (
                    <p>{formik.errors.gender}</p>
                ) : null}
                <br /> <br />
                <input
                    type="text"
                    id="state"
                    placeholder="state"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.state}
                />
                {formik.touched.state && formik.errors.state ? (
                    <p>{formik.errors.state}</p>
                ) : null}
                <br /> <br />
                <input type="submit" value="Save" id="btn" />
                <br /> <br />
            </form>
        </div>
    );
};

export default Register;
