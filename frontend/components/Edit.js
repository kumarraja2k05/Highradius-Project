import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import { Input } from "rsuite";
import Alert from "@mui/material/Alert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#384552",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export default function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onSubmit = () => {
    handleClose();
    Alert.info("Data Edited Successfully", 4000);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 style={{ color: "white", marginLeft: 2, marginTop: 2 }}>Edit</h3>
          <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: 50,
                width: 425,
              }}
            >
              <Input type="text" placeholder="Invoice Currency"></Input>
              <Input
                type="text"
                placeholder="Customer Payment terms"
                // value="124"
                sx={{ marginLeft: 2 }}
              ></Input>
            </Box>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{
                marginTop: 2,
                color: "white",
                borderColor: "white",
                width: 200,
              }}
              onClick={onSubmit}
            >
              Edit
            </Button>
            <Button
              sx={{
                marginTop: 2,
                color: "white",
                borderColor: "white",
                width: 200,
              }}
              onClick={onSubmit}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
