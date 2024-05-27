import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string().required("Address is required"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
    bio: Yup.string().required("Bio is required"),
    profileImage: Yup.mixed().required("Profile Image is required"),
    bannerImage: Yup.mixed().required("Banner Image is required"),
  });

  const Input = styled("input")({
    display: "none",
  });

  const Span = styled("typography")({
    fontWeight: "600",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          dateOfBirth: "",
          bio: "",
          profileImage: null,
          bannerImage: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setSubmittedData(values);
          handleOpen();
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form
            style={{
              padding: "20px",
              width: isMobile ? "100%" : "60%",
              margin: "0 auto",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="name"
                  label="Name"
                  fullWidth
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="address"
                  label="Address"
                  fullWidth
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  type="date"
                  name="dateOfBirth"
                  label="Date of Birth"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
                  helperText={touched.dateOfBirth && errors.dateOfBirth}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="bio"
                  label="Bio"
                  multiline
                  rows={4}
                  fullWidth
                  error={touched.bio && Boolean(errors.bio)}
                  helperText={touched.bio && errors.bio}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="profileImage">
                  <Input
                    id="profileImage"
                    name="profileImage"
                    type="file"
                    onChange={(event) => {
                      setFieldValue(
                        "profileImage",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  <Button variant="contained" component="span">
                    Upload Profile Image
                  </Button>
                  {touched.profileImage && Boolean(errors.profileImage) && (
                    <div style={{ color: "red" }}>{errors.profileImage}</div>
                  )}
                </label>
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="bannerImage">
                  <Input
                    id="bannerImage"
                    name="bannerImage"
                    type="file"
                    onChange={(event) => {
                      setFieldValue(
                        "bannerImage",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  <Button variant="contained" component="span">
                    Upload Banner Image
                  </Button>
                  {touched.bannerImage && Boolean(errors.bannerImage) && (
                    <div style={{ color: "red" }}>{errors.bannerImage}</div>
                  )}
                </label>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            padding: 4,
            backgroundColor: "#EBE8E2",
            margin: "auto",
            maxWidth: 500,
            borderRadius: "16px",
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            style={{ fontWeight: "700", textAlign: "center" }}
          >
            Submitted Data
          </Typography>
          {submittedData && (
            <Box>
              <Typography>
                <Span>Name:</Span> {submittedData.name}
              </Typography>
              <Typography>
                <Span>Email:</Span> {submittedData.email}
              </Typography>
              <Typography>
                <Span>Address:</Span> {submittedData.address}
              </Typography>
              <Typography>
                <Span>Date of Birth:</Span> {submittedData.dateOfBirth}
              </Typography>
              <Typography>
                <Span>Bio:</Span> {submittedData.bio}
              </Typography>
              <Typography>
                <Span>Profile Image:</Span>{" "}
                {submittedData.profileImage && submittedData.profileImage.name}
              </Typography>
              <Typography>
                <Span>Banner Image:</Span>{" "}
                {submittedData.bannerImage && submittedData.bannerImage.name}
              </Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Contact;
