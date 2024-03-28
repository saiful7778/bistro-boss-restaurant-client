import bannerImage from "@/assets/img/authentication-banner.png";
import { Input } from "@/components/formik/Input";
import Password from "@/components/formik/Password";
import { registerSchema } from "@/libs/schemas/auth";
import { Form, Formik } from "formik";
import { Button, Spinner } from "keep-react";
import { useState } from "react";

const SignUp = () => {
  const [spinner, setSpinner] = useState(false);
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const handleSubmit = async (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="w-full md:w-1/2">
        <h1 className="text-center text-xl font-bold">Sign Up</h1>
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
      </div>
      <div className="w-full md:w-1/2">
        <img src={bannerImage} alt="" />
      </div>
    </>
  );
};

export default SignUp;
