import * as React from 'react'
import {Admin, Resource} from 'react-admin'
import jsonServiceProvider from 'ra-data-json-server'
import './App.css';
import PostIcon from "@material-ui/icons/Book"
import UserIcon from "@material-ui/icons/Group"
import {UserList} from './users'
import {PostCreate, PostEdit, PostList} from './posts'
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServiceProvider('https://jsonplaceholder.typicode.com');

const App = () => (

    
      <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      {/* <Resource name="posts" list={ListGuesser}/>  */}
      {/* <Resource name="posts" list={PostList} edit={EditGuesser}/> */}
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      <Resource name="users" list={UserList} icon={UserIcon}/>
</Admin>

)

export default App;
