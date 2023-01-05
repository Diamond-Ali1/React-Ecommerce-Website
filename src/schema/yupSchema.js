import * as yup from 'yup';

export const yupSchema = {
  firstName: yup
    .string()
    .required('first name is required')
    .min(3, 'first name should be atleast three character long'),
  lastName: yup
    .string()
    .required('last name is required')
    .min(3, 'last name should be atleast three character long'),
  phoneNumber: yup
    .string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      'Phone number is not valid'
    )
    .required(),
  email: yup
    .string()
    .required('email is required')
    .email('please use a valid email address'),
  password: yup
    .string()
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, 'Must contain at least one symbol')
    .matches(/[0-9]/, 'Must contain at least one number')
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'password does not match original password')
    .required('confirm password is  a required field'),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms and conditions')
    .required(),
};
