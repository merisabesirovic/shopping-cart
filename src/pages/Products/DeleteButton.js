// import React, { useContext } from "react";
// import Button from "@mui/material/Button";

// export default function DeleteButton({ onDelete }) {
//   const handleDelete = () => {
//     onDelete();
//   };

//   return (
//     <Button
//       style={{ color: "#d32f2f", fontWeight: "700" }}
//       onClick={handleDelete}
//       size="small"
//       className="btn-delete"
//     >
//       DELETE
//     </Button>
//   );
// }
import * as React from "react";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import DeleteForever from "@mui/icons-material/DeleteForever";

export default function DeleteBtn({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Chip
        variant="outlined"
        color="danger"
        onClick={handleDelete}
        endDecorator={
          <ChipDelete color="danger" variant="plain">
            <DeleteForever />
          </ChipDelete>
        }
      >
        Clear
      </Chip>
    </Box>
  );
}
