import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const ProcessButton = ({ title, idProcess, onClick, type = "default" }) => {
  const getButtonStyles = () => {
    const baseStyles = {
      minHeight: 80,
      whiteSpace: "normal",
      lineHeight: 1.2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 2,
      fontWeight: "bold",
      borderRadius: 2,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      textTransform: "none",
      "&:hover": {
        color: "#002e66",
      },
    };

    if (type === "doe") {
      return {
        ...baseStyles,
        backgroundColor: "#f9c51b",
        color: "#002e66",
        "&:hover": {
          backgroundColor: "#e6b800",
          color: "#002e66",
        },
      };
    }

    return {
      ...baseStyles,
      backgroundColor: "#002e66",
      color: "#f9c51b",
      "&:hover": {
        backgroundColor: "#f9c51b",
        color: "#002e66",
      },
    };
  };

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Button
        fullWidth
        variant="contained"
        onClick={onClick}
        sx={getButtonStyles()}
      >
        {idProcess} {title}
      </Button>
    </motion.div>
  );
};

export default ProcessButton;
