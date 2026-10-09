import React, { useState } from "react";
import { Box, Container, Button } from "@mui/material";
import Header from "../components/Header";
import ProcessGrid from "../components/ProcessGrid";
import ModalDialog from "../components/ModalDialog";
import fondo from "../assets/images/diresa_tacna.jpeg";

const Accreditation = () => {
  const [open, setOpen] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [selectedYear, setSelectedYear] = useState("v1.1");

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setOpen(false);
    setSelectedProcess(null);
  };

  const handleProcessClick = (process) => {
    setSelectedProcess({ ...process, year: selectedYear });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProcess(null);
  };

  const handleManualClick = () => {
    window.open(
      "https://drive.google.com/file/d/1Yy_xM4WNfykfOMHBi1xa0c6uLDbfgbRr/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
          backgroundColor: "#ffffff",
          borderRadius: 3,
          boxShadow: 2,
          padding: "30px",
          marginTop: "40px",
        }}
      >
        <Header year={selectedYear} onYearChange={handleYearChange} />
        <ProcessGrid onProcessClick={handleProcessClick} year={selectedYear} />
      </Container>

      <ModalDialog
        open={open}
        handleClose={handleClose}
        process={selectedProcess}
        year={selectedYear}
      />

      <Button
        variant="contained"
        color="secondary"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          boxShadow: 3,
        }}
        onClick={handleManualClick}
      >
        Manual de Uso
      </Button>
    </Box>
  );
};

export default Accreditation;
