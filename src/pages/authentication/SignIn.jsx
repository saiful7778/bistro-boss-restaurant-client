import bannerImage from "@/assets/img/authentication-banner.png";
import SocialAuth from "@/components/SocialAuth";
import { Input } from "@/components/formik/Input";
import Password from "@/components/formik/Password";
import useAuth from "@/hooks/useAuth";
import { loginSchema } from "@/libs/schemas/auth";
import { Form, Formik } from "formik";
import { Button, Spinner } from "keep-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signIn, handleGoogle } = useAuth();
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (e, { resetForm }) => {
    setSpinner(true);
    try {
      const { user } = await signIn(e.email, e.password);
      Swal.fire({
        icon: "success",
        title: user.displayName,
        text: "Account successfully logged in!",
      });
      navigate(location.state ? location.state.from.pathname : "/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: err,
      });
      console.error(err);
    } finally {
      setSpinner(false);
      resetForm();
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await handleGoogle();
      Swal.fire({
        icon: "success",
        title: user.displayName,
        text: "Account successfully logged in!",
      });
      navigate(location.state ? location.state.from.pathname : "/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        text: err,
      });
      console.error(err);
    }
  };

  return (
    <>
      <div className="w-full md:w-1/2">
        <img src={bannerImage} alt="" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-center text-3xl font-bold">Sign in</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="my-4 flex flex-col items-center justify-center gap-2">
            <Input
              type="email"
              placeholder="Mail address"
              label="Email"
              name="email"
              disabled={spinner}
            />
            <Password
              placeholder="Password"
              label="Password"
              disabled={spinner}
              name="password"
            />
            <Button
              className="w-full max-w-md"
              disabled={spinner}
              type="submit"
              size="sm"
            >
              {spinner ? <Spinner /> : "Sign in"}
            </Button>
          </Form>
        </Formik>
        <p className="text-center text-amber-600">
          New here?{" "}
          <Link
            className="font-bold hover:underline"
            to="/authentication/sign-up"
          >
            Create a New account
          </Link>
        </p>
        <p className="my-4 text-center">Or sign in with</p>
        <SocialAuth handleGoogle={handleGoogleSignIn} />
      </div>
    </>
  );
};

export default SignIn;
