import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ProcessButton from "./ProcessButton";

const processes2024 = [
  { id: "P_01", title: "Gestión de la Calidad" },
  { id: "P_02", title: "Planeamiento y Desarrollo" },
  { id: "P_03", title: "Infraestructura" },
  { id: "P_04", title: "Logística" },
  { id: "P_05", title: "Gestión de Procesos Académicos y Docencia" },
  { id: "P_06", title: "Gestión de Potencial Humano" },
  { id: "P_07", title: "Biblioteca y Servicios Académicos" },
  { id: "P_08", title: "Tesorería" },
  { id: "P_09", title: "Secretaría General" },
  { id: "P_10", title: "Admisión y marketing" },
  { id: "P_11", title: "Tecnologías de la Información" },
  { id: "P_12", title: "Matricula de estudiante" },
  { id: "P_13", title: "Orientación del Estudiante y Tutoría" },
  { id: "P_14", title: "Responsabilidad Social Universitaria" },
  { id: "P_15", title: "Contratación Personal Académico" },
  { id: "P_16", title: "Inducción Nuevo Personal Académico" },
  { id: "P_17", title: "Capacitación Docente" },
  { id: "P_18", title: "Enseñanza y Evaluación" },
  { id: "P_19", title: "Movilidad Estudiantil" },
  { id: "P_20", title: "Seguimiento a Egresados" },
  { id: "P_21", title: "Gestión de Trabajos de Investigación" },
  { id: "P_22", title: "Gestión de la Carrera o Programa" },
  { id: "P_24", title: "Movilidad Docente" },
];

const processes2025 = [
  { id: "P_01:", title: "Gestión de la Calidad" },
  { id: "P_02:", title: "Planeamiento y Desarrollo" },
  { id: "P_03:", title: "Infraestructura" },
  { id: "P_04:", title: "Logística" },
  { id: "P_05:", title: "Gestión de Procesos Académicos y Docencia" },
  { id: "P_06:", title: "Gestión de Potencial Humano" },
  { id: "P_07:", title: "Biblioteca y Servicios Académicos" },
  { id: "P_08:", title: "Tesorería" },
  { id: "P_09:", title: "Secretaría General" },
  { id: "P_10:", title: "Admisión" },
  { id: "P_11:", title: "Tecnologías de la Información" },
  { id: "P_12:", title: "Matrícula de estudiantes" },
  { id: "P_13:", title: "Orientación del Estudiante y Tutoría" },
  { id: "P_14:", title: "Responsabilidad Social Universitaria" },
  { id: "P_15:", title: "Contratación Personal Académico" },
  { id: "P_16:", title: "Inducción Nuevo Personal Académico" },
  { id: "P_17:", title: "Capacitación Docente" },
  { id: "P_18:", title: "Enseñanza y Evaluación" },
  { id: "P_19:", title: "Movilidad Estudiantil" },
  { id: "P_20:", title: "Seguimiento a Egresados" },
  { id: "P_21:", title: "Gestión de Trabajos de Investigación" },
  { id: "P_22:", title: "Gestión de la Carrera o Programa" },
  { id: "P_24:", title: "Movilidad Docente" },
];

const doeProcesses2025 = [
  { id: "DOE 1. ", title: "ISO 9001_2015", type: "doe" },
  { id: "DOE 2. ", title: "LEY UNIVERSITARIA Y MODIFICATORIAS", type: "doe" },
  {
    id: "DOE 3. ",
    title:
      "REGLAMENTO PARA CESE DE ACTIVIDADES DE UNIVERSIDADES Y ESCUELAS DE POSTGRADO",
    type: "doe",
  },
  {
    id: "DOE 4. ",
    title: "REGLAMENTO PARA LA PRESTACIÓN DEL SERVICIO EDUCATIVO",
    type: "doe",
  },
  {
    id: "DOE 5. ",
    title: "REGLAMENTO DEL REGISTRO NACIONAL DE GRADOS Y TÍTULOS",
    type: "doe",
  },
  {
    id: "DOE 6. ",
    title: "REGLAMENTO DE INFRACCIONES Y SANCIONES DE LA SUNEDU",
    type: "doe",
  },
  {
    id: "DOE 7. ",
    title: "REGLAMENTO PARA LA EMISIÓN Y EXPEDICIÓN DE CARNÉS UNIVERSITARIOS",
    type: "doe",
  },
  { id: "DOE 8. ", title: "REGLAMENTO NACIONAL DE EDIFICACIONES", type: "doe" },
  { id: "DOE 9. ", title: "PROCEDIMIENTOS ADMINISTRATIVOS", type: "doe" },
  {
    id: "DOE 10. ",
    title: "DECRETO LEGISLATIVO 688 BENEFICIOS SOCIALES Y MODIFICATORIAS",
    type: "doe",
  },
  {
    id: "DOE 11. ",
    title: "DECRETO LEGISLATIVO 713 DESCANSO REMUNERADOS Y MODIFICATORIAS",
    type: "doe",
  },
  {
    id: "DOE 12, 14. ",
    title: "LEY 25593 RELACIONES COLECTIVAS DE TRABAJO Y MODIFICATORIAS",
    type: "doe",
  },
  {
    id: "DOE 13. ",
    title: "LEY DE JORNADA DE TRABAJO, HORARIO Y TRABAJO EN SOBRETIEMPO",
    type: "doe",
  },
  { id: "DOE 15. ", title: "DECRETO LEGISLATIVO N°728", type: "doe" },
  { id: "DOE 16. ", title: "MODELO SINEACE", type: "doe" },
  { id: "DOE 17. ", title: "MODELO ICACIT", type: "doe" },
  {
    id: "DOE 18. ",
    title: "REGLAMENTO NACIONAL DE TRABAJOS CONDUCENTES A GRADOS Y TÍTULOS",
    type: "doe",
  },
  { id: "DOE 19. ", title: "DOCUMENTOS SUNEDU", type: "doe" },
];

// Nuevos procesos para V2 y V3
const processesV2 = [
  // ESTRATÉGICOS (PE)
  { id: "PE_01", title: "Planeamiento institucional" },
  { id: "PE_02", title: "Gestión de la calidad" },
  { id: "PE_03", title: "Gestión de riesgos institucionales" },
  { id: "PE_04", title: "Gestión interinstitucional" },
  // MISIONALES (PM)
  { id: "PM_01", title: "Formación integral de pregrado y postgrado" },
  {
    id: "PM_02",
    title: "Investigación, desarrollo, innovación y emprendimiento",
  },
  { id: "PM_03", title: "Responsabilidad Social Universitaria" },
  // SOPORTE (PS)
  { id: "PS_01", title: "Gestión de Recursos Humanos" },
  { id: "PS_02", title: "Gestión de centros de información" },
  { id: "PS_03", title: "Gestión de Infraestructura y Patrimonio" },
  { id: "PS_04", title: "Gestión de las Tecnologías de Información" },
  { id: "PS_05", title: "Gestión administrativa y financiera" },
  { id: "PS_06", title: "Gestión legal" },
];

const ProcessGrid = ({ onProcessClick, year = "v1.1" }) => {
  // 1. Seleccionamos la lista de procesos según la versión
  const getBaseProcesses = () => {
    if (year === "v1.0") return processes2024;
    if (year === "v1.1") return processes2025;
    return processesV2; // Para v2 y v3
  };

  const processes = getBaseProcesses();

  // 2. Definimos las categorías dinámicamente solo para v2 y v3
  const getCategories = () => {
    if (year === "v2" || year === "v3") {
      return [
        {
          label: "Procesos Estratégicos",
          // Asegúrate de que los IDs aquí coincidan exactamente con los de processesV2 (sin dos puntos)
          ids: ["PE_01", "PE_02", "PE_03", "PE_04"],
        },
        {
          label: "Procesos Misionales",
          ids: ["PM_01", "PM_02", "PM_03"],
        },
        {
          label: "Procesos de Soporte",
          ids: ["PS_01", "PS_02", "PS_03", "PS_04", "PS_05", "PS_06"],
        },
      ];
    }
    return []; // No se usan categorías para v1.0 y v1.1
  };

  const categorias = getCategories();

  // 3. CAMBIO PRINCIPAL: Solo agrupamos si es v2 o v3
  const isGroupedVersion = year === "v2" || year === "v3";

  // DOE se muestra en todas las versiones excepto la v1.0
  const showDOE = year !== "v1.0";

  const RenderSection = ({ title, items }) => (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 3,
          backgroundColor: "#e0e0e0",
          padding: 1.5,
          borderRadius: 2,
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {items.map((process) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={process.id}>
            <ProcessButton
              title={process.title}
              idProcess={process.id}
              onClick={() => onProcessClick(process)}
              type={process.type || "default"}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box>
      {!isGroupedVersion ? (
        // Layout original (sin agrupaciones) para v1.0 y v1.1
        <Grid container spacing={3} justifyContent="center">
          {processes.map((process) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={process.id}>
              <ProcessButton
                title={process.title}
                idProcess={process.id}
                onClick={() => onProcessClick(process)}
                type="default"
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        // Layout agrupado en 3 secciones solo para v2 y v3
        categorias.map((cat) => {
          const filteredItems = processes.filter((p) => cat.ids.includes(p.id));
          // Solo renderiza la sección si hay items que coincidan
          if (filteredItems.length === 0) return null;
          return (
            <RenderSection
              key={cat.label}
              title={cat.label}
              items={filteredItems}
            />
          );
        })
      )}
      {showDOE && (
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#000000",
              mb: 3,
              backgroundColor: "#f5f5f5",
              padding: 2,
              borderRadius: 2,
            }}
          >
            P_01 Gestión de la Calidad: DOE (Documentos de Origen Externo)
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {doeProcesses2025.map((process) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={process.id}>
                <ProcessButton
                  title={process.title}
                  idProcess={process.id}
                  onClick={() => onProcessClick(process)}
                  type="doe"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ProcessGrid;
