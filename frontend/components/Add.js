import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
const sx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 350,
  backgroundColor: "#39495e",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
  flexGrow: 2,
};

const Add = ({ onSubmit, onChange, data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={sx}>
          <span style={{ color: "", marginLeft: 4, marginBottom: 15 }}>
            Add
          </span>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: 30,
              marginBottom: 5,
            }}
          >
            <TextField
              sx={{ width: 200 }}
              type="text"
              label="Business Code"
              defaultValue={""}
              onChange={onChange}
              name="business_code"
            />

            <TextField
              sx={{ width: 200 }}
              type="text"
              label="Customer Number"
              defaultValue={""}
              onChange={onChange}
              name="cust_number"
              className="textfield"
            />
            <TextField
              sx={{ width: 200, height: 30 }}
              type="date"
              defaultValue={""}
              onChange={onChange}
              name="clear_date"
            />
            <TextField
              sx={{ width: 200 }}
              type="text"
              label="Business Year"
              defaultValue={""}
              onChange={onChange}
              name="buisness_year"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: 30,
              marginBottom: 5,
            }}
          >
            <TextField
              sx={{ width: 200 }}
              type="text"
              label="Document Id"
              defaultValue={""}
              onChange={onChange}
              name="doc_id"
            />
            <TextField
              sx={{ width: 200 }}
              type="date"
              // label="Posting Date"
              defaultValue={""}
              onChange={onChange}
              name="posting_date"
            />
            <TextField
              sx={{ width: 200 }}
              type="date"
              // label="Document Create Date"
              defaultValue={""}
              onChange={onChange}
              name="document_create_date"
            />
            <TextField
              sx={{ width: 200 }}
              // label="Due_in_Date"
              hiddenLabel
              type="date"
              defaultValue={""}
              onChange={onChange}
              name="due_in_date"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: 30,
              marginBottom: 5,
            }}
          >
            <TextField
              sx={{ width: 200 }}
              type="text"
              label="Invoice Currency"
              defaultValue={""}
              onChange={onChange}
              name="invoice_currency"
            />
            <TextField
              sx={{ width: 200 }}
              type="text"
              label="Document Type"
              defaultValue={""}
              onChange={onChange}
              name="document_type"
            />
            <TextField
              sx={{ width: 200 }}
              type="text"
              label="Posting Id"
              defaultValue={""}
              onChange={onChange}
              name="posting_id"
            />
            <TextField
              sx={{ width: 200 }}
              type="text"
              label="Total Open Amount"
              defaultValue={""}
              onChange={onChange}
              name="total_open_amount"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-betweeen",
              height: 30,
              marginBottom: 6,
            }}
          >
            <TextField
              sx={{ width: 200, marginRight: 8.5 }}
              type="date"
              defaultValue={""}
              onChange={onChange}
              name="baseline_create_date"
            />
            <TextField
              sx={{ width: 200, marginRight: 8.5 }}
              type="name"
              label="Customer Payment Terms"
              defaultValue={""}
              onChange={onChange}
              name="customer_payment_terms"
              floatingLabelFocusStyle={{
                color: "white",
              }}
            />
            <TextField
              sx={{ width: 200 }}
              type="name"
              label="Invoice Id"
              defaultValue={""}
              onChange={onChange}
              name="invoice_id"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Button
              sx={{ color: "white", borderColor: "white", width: 400 }}
              onClick={() => {
                handleClose();
                onSubmit();
              }}
            >
              Add
            </Button>
            <Button
              sx={{ color: "white", borderColor: "white", width: 400 }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default Add;
