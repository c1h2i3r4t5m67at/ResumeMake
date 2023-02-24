import { useState } from "react";

export default function useForm(getFreshModelObject) {
  const [values, setValues] = useState(getFreshModelObject());
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { UserName, value } = e.target;
    setValues({
      ...values,
      [UserName]: value,
    });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
}
