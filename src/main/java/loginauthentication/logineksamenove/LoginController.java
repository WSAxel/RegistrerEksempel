package loginauthentication.logineksamenove;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LoginController {

    @Autowired
    private LoginRepository rep;

    @PostMapping("/saveLogins")
    public void saveLogins(Login login) { rep.saveAllLogins(login);}

    @GetMapping("/getLogins")
    public List<Login> getLogins() {return rep.getAllLogins();}

    @GetMapping("/deleteLogins")
    public void deleteLogins() {rep.deleteAllLogins();}

}

