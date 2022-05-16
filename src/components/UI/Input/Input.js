/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { useRef } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => (
  <div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ''
    }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      ref={ref}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
));

export default Input;
