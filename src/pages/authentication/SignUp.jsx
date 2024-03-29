import bannerImage from "@/assets/img/authentication-banner.png";
import SocialAuth from "@/components/SocialAuth";
import { Input } from "@/components/formik/Input";
import Password from "@/components/formik/Password";
import useAuth from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import { registerSchema } from "@/libs/schemas/auth";
import { updateProfile } from "firebase/auth";
import { Form, Formik } from "formik";
import { Button, Spinner } from "keep-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp, handleGoogle } = useAuth();
  const [spinner, setSpinner] = useState(false);
  const axios = useAxios();
  const navigate = useNavigate();
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (e, { resetForm }) => {
    setSpinner(true);
    try {
      const { user } = await signUp(e.email, e.password);
      await updateProfile(user, {
        displayName: e.fullName,
      });
      const { data } = await axios.post("/authentication/register", {
        email: e.email,
        name: e.fullName,
        userID: user.uid,
      });
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Account is created",
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          text: data.message,
        });
      }
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

  const handleGoogleSignUp = async () => {
    try {
      const { user } = await handleGoogle();
      await axios.post("/authentication/register", {
        email: user.email,
        name: user.displayName,
        userID: user.uid,
      });
      Swal.fire({
        icon: "success",
        title: "Account is created",
      });
      navigate("/");
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
        <h1 className="text-center text-3xl font-bold">Sign Up</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          <Form className="my-4 flex flex-col items-center justify-center gap-2">
            <Input
              type="text"
              placeholder="Name"
              label="Name"
              name="fullName"
              disabled={spinner}
            />
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
              {spinner ? <Spinner /> : "Sign up"}
            </Button>
          </Form>
        </Formik>
        <p className="text-center text-amber-600">
          Already registered?{" "}
          <Link
            className="font-bold hover:underline"
            to="/authentication/sign-in"
          >
            Go to log in
          </Link>
        </p>
        <p className="my-4 text-center">Or sign up with</p>
        <SocialAuth handleGoogle={handleGoogleSignUp} />
      </div>
      <div className="w-full md:w-1/2">
        <img src={bannerImage} alt="" />
      </div>
    </>
  );
};

export default SignUp;
