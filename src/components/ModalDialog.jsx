import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  data_v1_2024,
  data_v1_1_2025,
  data_v2_2026,
  data_v3_2026,
} from "../data/data";

const ModalDialog = ({ open, handleClose, process, year }) => {
  const [selectedTipoDocumento, setSelectedTipoDocumento] = useState("");
  const [optionDescription, setOptionDescription] = useState("");
  const [showTable, setShowTable] = useState(false);

  const rawData =
    {
      "v1.0": data_v1_2024,
      "v1.1": data_v1_1_2025,
      v2: data_v2_2026,
      v3: data_v3_2026,
    }[year] || [];

  // Los Documentos de Origen Externo (DOE) se encuentran registrados en data_v1_1_2025
  const currentData =
    process?.type === "doe" && (!rawData || rawData.filter(item => item.DEPENDENCIA === process?.title).length === 0)
      ? data_v1_1_2025
      : rawData;

  useEffect(() => {
    if (open && process) {
      // 1. Obtener las opciones disponibles para este proceso
      const options = [
        ...new Set(
          currentData
            .filter((item) => item.DEPENDENCIA === process.title)
            .map((item) => item.TIPO_DOCUMENTO),
        ),
      ];

      if (options.length > 0) {
        // 2. Seleccionar la primera opción por defecto
        const firstOption = options[0];
        setSelectedTipoDocumento(firstOption);
        setOptionDescription(firstOption);
        setShowTable(true);
      } else {
        // Si no hay opciones, resetear
        setSelectedTipoDocumento("");
        setOptionDescription("");
        setShowTable(false);
      }
    }
  }, [open, process, currentData]);

  const filteredData = currentData.filter(
    (item) =>
      item.DEPENDENCIA === process?.title &&
      (optionDescription ? item.TIPO_DOCUMENTO === optionDescription : true),
  );

  const tipoDocumentoOptions = [
    ...new Set(
      currentData
        .filter((item) => item.DEPENDENCIA === process?.title)
        .map((item) => item.TIPO_DOCUMENTO),
    ),
  ];

  const handleSelectChange2025 = (e) => {
    const value = e.target.value;
    setSelectedTipoDocumento(value);
    if (value) {
      setOptionDescription(value);
      setShowTable(true);
    } else {
      setOptionDescription("");
      setShowTable(false);
    }
  };

  const handleSelectChange2024 = (e) => {
    setSelectedTipoDocumento(e.target.value);
  };

  const handleSelectClick = () => {
    if (selectedTipoDocumento) {
      setOptionDescription(selectedTipoDocumento);
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  };

  const isAutoSelect = year !== "v1.0";
  const handleSelectChange = isAutoSelect
    ? handleSelectChange2025
    : handleSelectChange2024;

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: 1300,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
          {process ? `${process.title} - ${year}` : "Selecciona un proceso"}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Seleccione una opción:
        </Typography>

        <Select
          displayEmpty
          fullWidth
          sx={{ mb: 2 }}
          value={selectedTipoDocumento}
          onChange={handleSelectChange}
        >
          {/* Solo mostrar "-- Seleccione --" si realmente no hay datos */}
          {tipoDocumentoOptions.length === 0 && (
            <MenuItem value="">-- No hay documentos disponibles --</MenuItem>
          )}
          {tipoDocumentoOptions.map((tipo, index) => (
            <MenuItem key={index} value={tipo}>
              {tipo}
            </MenuItem>
          ))}
        </Select>

        {/* Mostrar botón "Seleccionar" solo para v1.0 */}
        {year === "v1.0" && (
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mb: 2 }}
            onClick={handleSelectClick}
          >
            Seleccionar
          </Button>
        )}

        {showTable && filteredData.length > 0 && (
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 400, overflowY: "auto" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Dependencia</TableCell>
                  <TableCell>Tipo Documento</TableCell>
                  <TableCell>Versión</TableCell>
                  <TableCell>Fecha Elaboración</TableCell>
                  <TableCell>Fecha Actualización</TableCell>
                  <TableCell>Descripción</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Código</TableCell>
                  <TableCell align="center">Enlace</TableCell>
                </TableRow>
              </TableHead>
              <TableBody id="table-body">
                {filteredData.map((item, index) => {
                  const hasValidLink = Boolean(
                    item.ENLACE && item.ENLACE.trim() !== "",
                  );

                  return (
                    <TableRow key={index}>
                      <TableCell>{item.DEPENDENCIA}</TableCell>
                      <TableCell>{item.TIPO_DOCUMENTO}</TableCell>
                      <TableCell>{item.VERSION}</TableCell>
                      <TableCell>{item.FECHA_ELAVORACION}</TableCell>
                      <TableCell>{item.FECHA_ACTUALIZACION}</TableCell>
                      <TableCell>{item.DESCRIPCION}</TableCell>
                      <TableCell>{item.ESTADO}</TableCell>
                      <TableCell>{item.CODIGO_BUSQUEDA}</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          disabled={!hasValidLink}
                          onClick={() => {
                            if (hasValidLink) {
                              window.open(item.ENLACE, "_blank");
                            }
                          }}
                        >
                          {hasValidLink ? "Ver" : "Sin enlace"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {showTable && filteredData.length === 0 && (
          <Typography variant="body2" color="textSecondary">
            No se encontraron documentos para la opción seleccionada.
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default ModalDialog;


