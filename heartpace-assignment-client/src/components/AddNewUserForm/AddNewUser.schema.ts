import * as Yup from 'yup'
export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    gender: Yup.string().required('Gender is required'),
    age: Yup.number().min(18, 'Minimum age is 18').required('Age is required'),
    company: Yup.string().required('Company is required'),
    balance: Yup.string()
        .required('Balance is required')
        .matches(/^\d+(\.\d{1,2})?$/, 'Invalid balance format'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
})
