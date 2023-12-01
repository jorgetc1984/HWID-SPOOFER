/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Servlet_CallBuc_Dial;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/callbuc_dial?useSSL=false";
    private static final String JDBC_USER = "root";
    private static final String JDBC_PASSWORD = "";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String usuario = request.getParameter("usuario");
        String password = request.getParameter("password");
        String campaña = request.getParameter("campaña");

        if (validarCredenciales(usuario, password, campaña)) {
            response.sendRedirect("pagina_principal.jsp");
        } else {
            response.sendRedirect("error.jsp");
        }
    }

    private boolean validarCredenciales(String usuario, String password, String campaña) {
        try (Connection connection = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD)) {
            String sql = "SELECT * FROM usuarios WHERE usuario = ? AND password = ? AND campaña = ?";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, usuario);
                statement.setString(2, password);
                statement.setString(3, campaña);
                try (ResultSet resultSet = statement.executeQuery()) {
                    return resultSet.next();
                }
            }
        } catch (SQLException e) {
            e.printStackTrace(); // Manejar errores de base de datos adecuadamente
        }
        return false;
    }
}
