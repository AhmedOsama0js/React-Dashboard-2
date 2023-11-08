import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import data from "../../dist/data/Table"
import { createTheme,ThemeProvider } from "@mui/material";
import "./Table.css"

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", 
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", 
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    // initialState: { pagination: { pageSize: 5} },
  });

  const theme = useMemo(() => createTheme({
    palette: {
      mode:"dark"
    }
  }));

  return (
    <div className="table-container">
      <ThemeProvider theme={theme}>
        <MaterialReactTable table={table} />
      </ThemeProvider>
    </div>
  );
};

export default Example;
