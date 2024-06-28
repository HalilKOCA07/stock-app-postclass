import React from 'react'
import useAuthRequest from '../services/useAuthRequest'
import { Avatar, Box, Container, Grid, Link, Typography } from '@mui/material'
import LockIcon from "@mui/icons-material/Lock"
import { Formik } from 'formik'
import RegisterForm, { registerSchema } from '../components/RegisterForm'
import image from "../assets/humanCarParts.png"
import newCar from "../assets/loginNewCar.png";
import oldCar from "../assets/loginOldCar.png";
import title from "../assets/loginTitle.png";

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
          height: "50vh",
          p: 2,
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px:5
          }}
          xs={12}
          mb={3}
        >
          <img src={oldCar} className="headCarImg" width={250} alt="loginOldCar" />
          <img src={title} className="title" width="100%" alt="" />
          <img src={newCar} className="headCarImg"  width={250} alt="loginNewCar" />
        </Grid>
       <Grid item xs={0} sm={7} md={6}>
          <Container sx={{mt:12}}>
            <img width={700} src={image} alt="" />
          </Container>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          
          <Avatar
            sx={{
              backgroundColor: "#2AAAB6",
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

      </Grid>
    </Container>
  )
}

export default Register
