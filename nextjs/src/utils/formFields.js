import React from 'react';
// Checkbox input
export const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <label className='switch'>
      <input
        name={name}
        id={id}
        type='checkbox'
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        className='radio-button'
      />
      <span className='slider' />
    </label>
  );
};

export const DateTime = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <input
      name={name}
      id={id}
      type='datetime-local'
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className='datetime-field'
    />
  );
};

export const Time = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <input
      name={name}
      id={id}
      type='time'
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className='time-field'
    />
  );
};
