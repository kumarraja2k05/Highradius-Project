import React from "react";

export default function Addbtn({
  doc_id,
  business_code,
  clear_date,
  changeHandler,
  submitHandler,
}) {
  return (
    <>
      <form>
        <label>Doc id</label>
        <input name="doc_id" value={doc_id} onChange={changeHandler}></input>
        <label>business code</label>
        <input
          name="business_code"
          value={business_code}
          onChange={changeHandler}
        ></input>
        <input
          type="date"
          name="clear_date"
          value={clear_date}
          onChange={changeHandler}
        ></input>
        <input type={"submit"} onClick={submitHandler}></input>
      </form>
    </>
  );
}
