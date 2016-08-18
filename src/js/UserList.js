/**
 * Created by Chen on 16/8/16.
 */
import Backbone from 'backbone';
import User from './User';
class UserList extends Backbone.Collection {
    constructor() {
        super({
            model: User
        })

    }

    url() {
        return 'http://localhost:8080/users';
    }
}
export default UserList