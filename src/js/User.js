/**
 * Created by Chen on 16/8/16.
 */
import Backbone from 'backbone'
class User extends Backbone.Model {
    defaults() {
        return {
            username: "",
            sex: ""
        };
    }

    url() {
        return 'http://localhost:8080/users/';
    }
}

export default User