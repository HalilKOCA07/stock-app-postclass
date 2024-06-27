import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/loginImage.png";
import newCar from "../assets/loginNewCar.png";
import oldCar from "../assets/loginOldCar.png";
import title from "../assets/loginTitle.png";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { object, string } from "yup";
// import { login } from "../services/useApiRequest"
import useAuthRequest from "../services/useAuthRequest";
import "../styles/login.css";
import { Bold } from "@tremor/react";

const Login = () => {
  const { login } = useAuthRequest();

  const loginSchema = object({
    email: string()
      .email("Geçerli bir email giriniz")
      .required("Email zorunludur"),
    password: string()
      .required("Şifre zorunludur")
      .min(8, "Şifre en az 8 karakter olmalıdır")
      .max(16, "Şifre en fazla 16 karakter olmalıdır")
      .matches(/\d+/, "Şifre en az bir rakam içermelidir.")
      .matches(/[a-z]+/, "Şifre en az bir küçük harf içermelidir.")
      .matches(/[A-Z]+/, "Şifre en az bir büyük harf içermelidir.")
      .matches(
        /[@$!%*?&]+/,
        "Şifre en az bir özel karakter(@$!%*?&) içermelidir."
      ),
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
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
            mb={4}
            color="#3c3b52"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              //TODO
              //? POST (Login)
              //? Toastify
              //? Global state güncellenmesi
              //? form resetleme
              //? navigate
              login(values);
              actions.resetForm();
              actions.setSubmitting(false); //? isSubmitting
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    sx={{  backgroundColor:"white"}}
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    sx={{backgroundColor:"white"}}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
