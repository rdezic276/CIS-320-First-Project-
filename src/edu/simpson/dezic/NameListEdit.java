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
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class NameListEdit extends HttpServlet {
    private Pattern firstNameValidationPattern;
    private Pattern lastNameValidationPattern;
    private Pattern emailValidationPattern;
    private Pattern phoneValidationPattern;
    private Pattern birthdayValidationPattern;

    public NameListEdit() {
        // --- Compile and set up all the regular expression patterns here ---
        firstNameValidationPattern = Pattern.compile("^[A-Za-z]{1,10}$");
        lastNameValidationPattern = Pattern.compile("^[A-Za-z]{1,10}$");
        emailValidationPattern = Pattern.compile("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
        phoneValidationPattern = Pattern.compile("^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$");
        birthdayValidationPattern = Pattern.compile("^\\d{4}-\\d{2}-\\d{2}$");
    }

    private final static Logger log = Logger.getLogger(NameListEdit.class.getName());
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        log.log(Level.SEVERE, "Hello");

        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Post");

        String id = request.getParameter("id");
        out.println("id='" + id + "'");

        // Grab the data we got via a parameter
        String first = request.getParameter("firstName");
        out.println("firstName='" + first + "'");
        Matcher m = firstNameValidationPattern.matcher(first);


        String last = request.getParameter("lastName");
        out.println("lastName='" + last + "'");
        Matcher n = lastNameValidationPattern.matcher(last);


        String email = request.getParameter("email");
        out.println("email='" + email + "'");
        Matcher o = emailValidationPattern.matcher(email);


        String phone = request.getParameter("phone");
        out.println("phone='" + phone + "'");
        Matcher p = phoneValidationPattern.matcher(phone);


        String birthday = request.getParameter("birthday");
        out.println("birthday='" + birthday + "'");
        Matcher q = birthdayValidationPattern.matcher(birthday);

        //out.println(String.format("Round 1 %s %s %s %s %s", m.find( ) , n.find() , o.find() , p.find() , q.find()));
        //out.println(String.format("Round 2 %s %s %s %s %s", m.find( ) , n.find() , o.find() , p.find() , q.find()));
        //out.println(String.format("Round 3 %s, %s", m.find( ) && n.find() , o.find() && p.find() && q.find()));

        //out.println(String.format("Round 4 %s", m.find( ) && n.find() && o.find() && p.find() && q.find()));

        if (id == null|| id.length() == 0) {


            if (m.find() && n.find() && o.find() && p.find() && q.find()) {
                out.println("Passed validation1");
                phone = phone.replace("-", "");

                Person person = new Person();
                person.setFirst(first);
                person.setLast(last);
                person.setEmail(email);
                person.setPhone(phone);
                person.setBirthday(birthday);
                //This is where code from online example should go.


                PersonDAO.addPerson(person);
            } else {
                out.println("Did not pass validation");
            }

        }
        else {
            if (m.find() && n.find() && o.find() && p.find() && q.find()) {
                out.println("Passed validation2");
                phone = phone.replace("-", "");

                Person person = new Person();
                person.setId(id);
                person.setFirst(first);
                person.setLast(last);
                person.setEmail(email);
                person.setPhone(phone);
                person.setBirthday(birthday);
                //This is where code from online example should go.


                PersonDAO.editPersons(person);
            } else {
                out.println("Did not pass validation");
            }

        }
    }

}
