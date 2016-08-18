/**
 * Created by Chen on 16/8/16.
 */
import ReactDom from 'react-dom';
import React from 'react';
import UserListView from './UserListView';
import UserList from './UserList';
var departments = new UserList();
ReactDom.render(<UserListView users={departments}/>,document.getElementById('react'))