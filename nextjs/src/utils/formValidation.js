const validate = (value, type = null, required = false) => {
  if (required) {
    if (value === null || value === '') {
      return 'Required';
    }
  }

  switch (type) {
    case 'email':
      if (
        // prettier-ignore
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ) {
        return 'Invalid email adress';
      }
      return null;
    default:
      return null;
  }
};

export default validate;
