package com.servelet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class EditInvoice
 */
@WebServlet("/EditInvoice")
public class EditInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
				String fieldValue = request.getParameter("uniqId");
				int field = Integer.parseInt(fieldValue);
				String newInAmt = request.getParameter("invoice_currency");
				float newInvoiceAmt = Float.parseFloat(newInAmt);
				String newNotes = request.getParameter("nn");
			
				 Class.forName("com.mysql.jdbc.Driver");
			      Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","Sst<3mnk");
			
			String query = "UPDATE winter_internship SET invoice_currency = ?, cust_payment_terms = ? WHERE cust_id = ?";
			
			PreparedStatement st = con.prepareStatement(query);
			st.setFloat(1, newInvoiceAmt);
			st.setString(2, newNotes);
			st.setInt(3, field);
			
			
			st.executeUpdate();
			con.close();
		}
		
		catch(Exception e) {
			
		}
	}
}