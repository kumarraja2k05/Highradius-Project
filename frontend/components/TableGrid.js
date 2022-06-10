import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getData } from "../services/data";
import { Checkbox } from "@mui/material";
import Buttons from "./Buttons";
import { addBtn } from "../services/data";

const TableGrid = () => {
  const [data, setData] = useState([]);
  const [row, setRow] = useState({
    sl_no: "",
    doc_id: "",
    business_code: "",
    clear_date: "",
    cust_number: "",
    buisness_year: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    invoice_currency: "",
    document_type: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
    posting_id: "",
  });

  useEffect(() => {
    async function fetch() {
      setData(await getData());
    }
    fetch();
  }, []);
  const onChange = (e) => {
    const { name, value } = e.target;
    setRow({ ...row, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let response = await addBtn(row);
    if (response) {
      setRow({
        sl_no: "",
        doc_id: "",
        business_code: "",
        clear_date: "",
        cust_number: "",
        buisness_year: "",
        posting_date: "",
        document_create_date: "",
        due_in_date: "",
        invoice_currency: "",
        document_type: "",
        total_open_amount: "",
        baseline_create_date: "",
        cust_payment_terms: "",
        invoice_id: "",
        posting_id: "",
      });
    }
  };

  return (
    <>
      <Buttons onChange={onChange} onSubmit={onSubmit} data={row} />
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 450, backgroundColor: "#39495e", fontSize: 10 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }} align="right">
                Select
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Sl no
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Business Code
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Customer Number
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Clear Date
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Buisness Year
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Document Id
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Posting Date
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Document Create Date
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Due Date
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Invoice Currency
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Document Type
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Posting Id
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Total Open amount
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Baseline Create Date
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Customer Payment Term
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Invoice Id
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow
                key={data.sl_no}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  <Checkbox />
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.sl_no}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.business_code}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.cust_number}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.clear_date}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.buisness_year}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.doc_id}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.posting_date}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.document_create_date}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.due_in_date}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.invoice_currency}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.document_type}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.posting_id}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.total_open_amount}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.baseline_create_date}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.cust_payment_terms}
                </TableCell>
                <TableCell sx={{ color: "white" }} component="th" scope="row">
                  {data.invoice_id}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableGrid;
