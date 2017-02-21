package edu.simpson.dezic;

/**
 * Created by Rasim Dezic on 2/21/2017.
 */
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;

public class NameListEdit extends HttpServlet {
    private final static Logger log = Logger.getLogger(NameListEdit.class.getName());
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        log.log(Level.SEVERE, "Hello");

        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Post");

        // Grab the data we got via a parameter
        String first = request.getParameter("first");

        // Just print the data out to confirm we got it.
        out.println("firstName='"+first+"'");


        String last = request.getParameter("last");

        // Just print the data out to confirm we got it.
        out.println("lastName='"+last+"'");


        String email = request.getParameter("email");

        // Just print the data out to confirm we got it.
        out.println("email='"+email+"'");


        String phone = request.getParameter("phone");

        // Just print the data out to confirm we got it.
        out.println("phone='"+phone+"'");



        String birthday = request.getParameter("birthday");

        // Just print the data out to confirm we got it.
        out.println("birthday='"+birthday+"'");
    }

}
