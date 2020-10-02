package loginauthentication.logineksamenove;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LoginRepository {

    @Autowired
    private JdbcTemplate db;

    public void saveAllLogins(Login login){
        String sql = "INSERT INTO Login(email, username, password) VALUES(?,?,?)";
        db.update(sql,login.getEmail(),login.getUsername(),login.getPassword());
    }

    public List<Login> getAllLogins() {
        String sql = "SELECT * FROM Login";
        return db.query(sql,new BeanPropertyRowMapper(Login.class));
    }

    public void deleteAllLogins(){
        String sql = "DELETE FROM Login";
        db.update(sql);
    }
}
