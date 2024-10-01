import { Box, Typography } from "@mui/material";

const Instrucciones = () => {
  return (
    <Box
      position="absolute"
      top={10}    // Posición desde arriba
      left={10}   // Posición desde la izquierda
      p={2}       // Padding para que no esté pegado al borde
      bgcolor="rgba(0, 0, 0, 0.5)"  // Fondo oscuro semitransparente
      color="white" // Texto en blanco para mejor visibilidad
      zIndex={10}  // Asegura que esté sobre otros elementos
    >
      <Typography fontFamily={"monospace"}>
        A: izquierda, W: arriba, D: derecha, S: atrás, ESPACIO: saltar
      </Typography>
      <Typography fontFamily={"monospace"}>
        Click para crear cubo. Números del 1 al 5 para seleccionar textura del cubo.
      </Typography>
    </Box>
  );
};

export default Instrucciones;
