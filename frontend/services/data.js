import Axios from "axios";
export const getData = async () => {
  let response = await Axios.get("http://localhost:8081/HighRadius/Data");

  return response.data.responses;
};

export const addBtn = async ({
  doc_id,
  business_code,
  clear_date,
  cust_number,
  buisness_year,
  posting_date,
  document_create_date,
  due_in_date,
  invoice_currency,
  document_type,
  total_open_amount,
  baseline_create_date,
  cust_payment_terms,
  invoice_id,
  posting_id,
}) => {
  let data =
    "doc_id=" +
    doc_id +
    "&business_code=" +
    business_code +
    "&clear_date=" +
    clear_date +
    "&cust_number=" +
    cust_number +
    "&buisness_year=" +
    buisness_year +
    "&posting_date=" +
    posting_date +
    "&document_create_date=" +
    document_create_date +
    "&due_in_date=" +
    due_in_date +
    "&invoice_currency=" +
    invoice_currency +
    "&document_type=" +
    document_type +
    "&total_open_amount=" +
    total_open_amount +
    "&baseline_create_date=" +
    baseline_create_date +
    "&cust_payment_terms=" +
    cust_payment_terms +
    "&invoice_id=" +
    invoice_id +
    "&posting_id=" +
    posting_id;
  console.log(doc_id, business_code);

  let response = await Axios.get(
    "http://localhost:8081/highRadius/AddInvoice?" + data
  );
  return response.data;
};
