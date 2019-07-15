import React, {Component} from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin' 
import { from } from 'rxjs';
import { message, Form } from 'antd';

/*
应用根组件
 */
export default class App extends Component {
   
        handleClick = ()=>{
            message.success('成功了。。。。');
        }


      render() {
        return (
          <BrowserRouter>
          <Switch>
              <Route path='/' component={Login}/>
              <Route path='/admin' component={Admin}/>
          </Switch>
          </BrowserRouter>
        )
      }
}

