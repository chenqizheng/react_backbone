/**
 * Created by Chen on 16/8/16.
 */
import React from 'react';
class UserListView extends React.Component {
    componentDidMount() {
        this.props.users.on("add remove change", this.forceUpdate.bind(this, null))
        this.props.users.fetch();
        this.state = {
            editUser: undefined
        }

    }


    render() {
        var departmentsNode = this.props.users.map(function (val, number) {
            var userNode;
            if (val.isEdit) {
                userNode =
                    <input ref="editname" key={number} defaultValue={val.get('username')}
                           onKeyUp={this.onKeyUp.bind(this)}>
                    </input>
            } else {
                userNode = <li onDoubleClick={this.changeEditUser.bind(this, val)}
                               key={number}>{val.get('username')}:{val.get('sex')}
                    <button onClick={this.deleteUser.bind(this, val)}>X</button>
                </li>
            }

            return userNode;
        }.bind(this))
        return <div>
            姓名<input ref="name"/><br/>
            性别<input ref="sex"/><br/>
            <button onClick={this.handle.bind(this)}>添加</button>
            <ul>{departmentsNode}</ul>
        </div>
    }

    handle() {
        this.props.users.create({
            username: this.refs.name.value,
            sex: this.refs.sex.value
        })
    }

    deleteUser(val) {
        val.sync("delete", val, {
            complete: function () {
                this.props.users.fetch();
            }.bind(this)
        });
    }

    changeEditUser(val) {
        if (this.state.editUser) {
            this.state.editUser.isEdit = false;
        }
        val.isEdit = true;
        this.setState({
            editUser: val
        })
    }

    onKeyUp(e) {
        e.keyCode === 13 && this.handleEdit()
    }

    handleEdit() {
        this.state.editUser.set({
            username: this.refs.editname.value
        });
        this.state.editUser.save();
        this.state.editUser.isEdit = false;
        this.setState({
            editUser: undefined
        })
    }


}
export default UserListView