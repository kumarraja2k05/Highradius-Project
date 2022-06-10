package com.Crud;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Crud {
	public Connection getConnection()
	{
		 Connection conn =null;
		 String url ="jdbc:mysql://localhost:3306/grey_goose";
		 String user = "root";
		 String pass ="Sst<3mnk";
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn =DriverManager.getConnection(url,user,pass);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}
}