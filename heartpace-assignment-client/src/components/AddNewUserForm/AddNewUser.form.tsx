import { AddNewUserFormI } from '@Types/DataState.types'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import { formatCurrency } from '@Utils/FormatCurrency'
import { useAppDispatch } from '@Redux/store'
import { createUser } from '@Redux/actions'
import { validationSchema } from './AddNewUser.schema'
const AddNewUserForm = ({ closeDrawer }: { closeDrawer: () => void }) => {
    const dispatch = useAppDispatch()
    const [balance, setBalance] = useState<string | undefined>()

    const initialValues: AddNewUserFormI = {
        isActive: true,
        balance: '',
        picture: 'http://placehold.it/32x32',
        age: 0,
        name: '',
        gender: '',
        company: '',
        email: '',
    }
    const handleSubmit = (values: AddNewUserFormI) => {
        const newUser: AddNewUserFormI = {
            ...values,
            balance: balance as string,
        }

        dispatch(createUser(newUser))
        closeDrawer()
    }

    const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value
        e.target.value = value.replace(/[^\d.]/g, '')
    }

    const handleBalanceBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = parseFloat(e.target.value)
        if (!isNaN(value)) {
            e.target.value = formatCurrency(value)
            setBalance(e.target.value)
        }
    }

    return (
        <Stack sx={{ width: '350px' }} p={3}>
            <Typography variant="h4" gutterBottom>
                Add User
            </Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ values, handleChange, handleBlur, errors, touched }) => {
                    return (
                        <Form>
                            <div>
                                <label htmlFor="picture">Picture:</label>
                                <TextField
                                    fullWidth
                                    type="text"
                                    name="picture"
                                    disabled
                                    value={values.picture}
                                    variant="standard"
                                />
                            </div>
                            <TextField
                                variant="standard"
                                fullWidth
                                label="Name"
                                type="text"
                                name="name"
                                margin="normal"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={(errors.name && touched.name) || false}
                                helperText={errors.name && touched.name ? errors.name : ''}
                            />
                            <TextField
                                fullWidth
                                label="Company"
                                type="text"
                                name="company"
                                variant="standard"
                                value={values.company}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={(errors.company && touched.company) || false}
                                helperText={errors.company && touched.company ? errors.company : ''}
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                name="email"
                                margin="normal"
                                variant="standard"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={(errors.email && touched.email) || false}
                                helperText={errors.email && touched.email ? errors.email : ''}
                            />
                            <FormControl fullWidth margin="normal" variant="standard">
                                <InputLabel>Gender</InputLabel>
                                <Field
                                    as={Select}
                                    name="gender"
                                    value={values.gender}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                </Field>
                            </FormControl>
                            <TextField
                                fullWidth
                                label="Age"
                                type="number"
                                name="age"
                                margin="normal"
                                variant="standard"
                                value={values.age}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={(errors.age && touched.age) || false}
                                helperText={errors.age && touched.age ? errors.age : ''}
                            />
                            <TextField
                                fullWidth
                                label="Balance"
                                type="text"
                                name="balance"
                                margin="normal"
                                variant="standard"
                                value={balance || values.balance}
                                onChange={(e) => {
                                    handleBalanceChange(e)
                                    handleChange(e)
                                }}
                                onBlur={(e) => {
                                    handleBalanceBlur(e)
                                    handleBlur(e)
                                }}
                                error={(errors.balance && touched.balance) || false}
                                helperText={errors.balance && touched.balance ? errors.balance : ''}
                            />

                            <Button type="submit" variant="contained" color="success">
                                Submit
                            </Button>
                        </Form>
                    )
                }}
            </Formik>
        </Stack>
    )
}

export default React.memo(AddNewUserForm)
