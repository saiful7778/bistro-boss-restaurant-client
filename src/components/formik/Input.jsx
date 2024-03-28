import { useField } from "formik";
import { Input, Label } from "keep-react";
import PropTypes from "prop-types";
import { useId } from "react";

const InputComp = ({ placeholder, type, name, label, disabled }) => {
  const inputID = useId();
  const [field, { error, touched }] = useField({ name });
  return (
    <fieldset className="w-full max-w-md">
      <Label htmlFor={inputID}>{label}</Label>
      <Input
        className="mt-1"
        id={inputID}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...field}
      />
      {error && touched && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </fieldset>
  );
};

InputComp.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
};

export { InputComp as Input };
