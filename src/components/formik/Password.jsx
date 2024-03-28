import { useId, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import PropTypes from "prop-types";
import { useField } from "formik";
import { Input, Label } from "keep-react";

const Password = ({ placeholder, label, disabled, name }) => {
  const [showPass, setShowPass] = useState(false);
  const [field, { error, touched }] = useField({ name });
  const inputId = useId();

  return (
    <fieldset className="w-full max-w-md">
      <Label htmlFor={inputId}>{label}</Label>
      <div className="relative">
        <Input
          id={inputId}
          type={showPass ? "text" : "password"}
          className="mt-1"
          placeholder={placeholder}
          disabled={disabled}
          {...field}
        />
        <button
          onClick={() => setShowPass((l) => !l)}
          className="absolute right-2 top-1/2 z-30 -translate-y-1/2 p-2 text-gray-500"
          type="button"
        >
          {showPass ? <IoIosEye size={25} /> : <IoIosEyeOff size={25} />}
        </button>
      </div>
      {error && touched && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </fieldset>
  );
};

Password.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};

export default Password;
