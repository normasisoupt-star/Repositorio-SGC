import React, { useState } from "react";
import { Typography, Box, Select, MenuItem } from "@mui/material";

const Header = ({ year = "v1.1", onYearChange }) => {
  const getTitleByYear = (y) => {
    const titles = {
      "v1.0": "REPOSITORIO DIGITAL - INFORMACIÓN DOCUMENTADA DEL SGC (v1.0)",
      "v1.1": "REPOSITORIO DIGITAL - Información Documentada del SGC (v1.1)",
      v2: "REPOSITORIO DIGITAL - Información Documentada del SGC (v2.0)",
      v3: "REPOSITORIO DIGITAL - Información Documentada del SGC (v3.0)",
    };
    return titles[y] || titles["v1.1"];
  };

  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#000000", mb: 2 }}
      >
        {getTitleByYear(year)}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: "#000000" }}>
          Seleccione el año:
        </Typography>
        <Select
          value={year}
          onChange={(e) => onYearChange && onYearChange(e.target.value)}
          sx={{
            backgroundColor: "#002e66",
            color: "#f9c51b",
            fontWeight: "bold",
            minWidth: 120,
            "& .MuiSelect-icon": {
              color: "#f9c51b",
            },
          }}
        >
          {/* <MenuItem value="v1.0">v1.0</MenuItem> */}
          <MenuItem value="v1.1">v1.1</MenuItem>
          <MenuItem value="v2">v2</MenuItem>
          {/* <MenuItem value="v3">v3</MenuItem> */}
        </Select>
      </Box>
    </Box>
  );
};

export default Header;
