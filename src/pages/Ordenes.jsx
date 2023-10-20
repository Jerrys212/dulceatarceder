import { useState } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TablePagination,
  Box,
  Button,
  Typography,
} from "../exports/index";
import { Link } from "react-router-dom";

const Ordenes = () => {
  const data = [
    { id: 1, status: "Activo", date: "2023-10-01", name: "Ejemplo 1" },
    { id: 2, status: "Inactivo", date: "2023-10-02", name: "Ejemplo 2" },
    { id: 3, status: "Activo", date: "2023-10-03", name: "Ejemplo 3" },
    { id: 4, status: "Inactivo", date: "2023-10-04", name: "Ejemplo 4" },
    { id: 5, status: "Activo", date: "2023-10-05", name: "Ejemplo 5" },
    { id: 6, status: "Activo", date: "2023-10-06", name: "Ejemplo 6" },
    { id: 7, status: "Inactivo", date: "2023-10-07", name: "Ejemplo 7" },
    { id: 8, status: "Activo", date: "2023-10-08", name: "Ejemplo 8" },
    { id: 9, status: "Inactivo", date: "2023-10-09", name: "Ejemplo 9" },
    { id: 10, status: "Activo", date: "2023-10-10", name: "Ejemplo 10" },
    { id: 11, status: "Inactivo", date: "2023-10-11", name: "Ejemplo 11" },
    { id: 12, status: "Activo", date: "2023-10-12", name: "Ejemplo 12" },
    { id: 13, status: "Inactivo", date: "2023-10-13", name: "Ejemplo 13" },
    { id: 14, status: "Activo", date: "2023-10-14", name: "Ejemplo 14" },
    { id: 15, status: "Inactivo", date: "2023-10-15", name: "Ejemplo 15" },
  ].filter((element) => element.status !== "Inactivo");

  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = (event) => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };

  //   const [rows, rowchange] = useState([]);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "700",
          marginBottom: "32px",
        }}
      >
        Ordenes
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "center" }}>ID</TableCell>
              <TableCell style={{ textAlign: "center" }}>Nombre</TableCell>
              <TableCell style={{ textAlign: "center" }}>Estatus</TableCell>
              <TableCell style={{ textAlign: "center" }}>Fecha</TableCell>
              <TableCell style={{ textAlign: "center" }}>Ver Orden</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data
                .slice(page * rowperpage, page * rowperpage + rowperpage)
                .map((row, i) => (
                  <TableRow key={i}>
                    <TableCell style={{ textAlign: "center" }}>
                      {row.id}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {row.name}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {row.status}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {row.date}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      <Link to={`/admin/orden/${row.id}`}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#f4b1bb",
                            "&:hover": { backgroundColor: "#f4b1bb" },
                          }}
                        >
                          Ver Orden
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowperpage}
          page={page}
          count={data.length}
          component="div"
          onPageChange={handlechangepage}
          onRowsPerPageChange={handleRowsPerPage}
        ></TablePagination>
      </TableContainer>
    </Box>
  );
};

export default Ordenes;
