import { useState } from 'react';
// Otra forma de hacerlo con un objeto de elemento cómo estado:
// export default function useInputValue(initialValues) {
//   const [values, setValues] = useState(initialValues);

//   const onChange = (event) => {
//     const id = event.target.id;
//     const value = event.target.value;

//     setValues({
//       ...values,
//       [id]: value,
//     });
//   };

//   return { ...values, onChange };
// }

export default function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => setValue(event.target.value);

  return { value, onChange };
}
