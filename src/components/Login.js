import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik);
  return (
    <div>
      <div className="login">
        <h1>Login Page</h1>
        <div className="login-form">
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
            />
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
