import React from 'react'
import useAuthRequest from '../services/useAuthRequest'
import { Avatar, Box, Container, Grid, Link, Typography } from '@mui/material'
import LockIcon from "@mui/icons-material/Lock"
import { Formik } from 'formik'
import RegisterForm, { registerSchema } from '../components/RegisterForm'
import image from "../assets/result.svg"

const Register = () => {

  const {register} = useAuthRequest()

  return (
<Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: ""
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register(values)
              actions.resetForm()
              actions.setSubmitting(false)
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link href="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register
