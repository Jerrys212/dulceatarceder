import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  ventas,
  ExpandMoreIcon,
} from "../exports/index";

const Ventas = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="date"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          sx={{ backgroundColor: "white" }}
        />
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>
          Ventas del dia 19/10/2023
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "900",
            textAlign: "end",
          }}
        >
          Total de Ventas del dia: $570
        </Typography>

        <Box sx={{ marginTop: "20px", paddingBottom: "40px" }}>
          {ventas.map((venta, i) => (
            <Accordion
              key={venta.id}
              defaultExpanded={i === 0}
              sx={{ marginTop: "10px" }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Venta ID: {venta.id}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Cantidad</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {venta.productos.map((producto) => (
                        <TableRow key={producto.id}>
                          <TableCell>{producto.nombre}</TableCell>
                          <TableCell>${producto.precio}</TableCell>
                          <TableCell>{producto.cantidad}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
              <AccordionDetails
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Typography variant="h6">Total: ${venta.total}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Ventas;
