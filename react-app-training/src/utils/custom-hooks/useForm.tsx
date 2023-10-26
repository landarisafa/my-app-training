import { useState, FormEvent } from 'react';
import { FormValues } from '../../types/Form';

interface UseFormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
}

export function useForm({ initialValues, onSubmit }: UseFormProps) {
  const [formValues, setFormValues] = useState(initialValues);

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log(event)
  //   const { name, value } = event.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  const handleChange = (fieldName:string, value:string) => {
    setFormValues({ ...formValues, [fieldName]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return {
    formValues,
    handleChange,
    handleSubmit
  };
}
