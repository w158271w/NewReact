import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';

import logo from './imgs/logo.png'
import bg from './imgs/bg.jpg'
import './login.less'


export default class Login extends Component {



  handleSubmit = e => {
    e.preventDefault();
   alert('chenggong ')
  }
  render() {
    return (
      <div className="login">
        <div className="login-header">
          <img src={logo} alt="logo" />
          <h1>React项目：后台管理系统</h1>
        </div>
        <div className="login-content">
          <h1>用户登录</h1>

           <Form onSubmit={this.handleSubmit} className="login-form"> 
            <Form.Item> 
            <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />
            </Form.Item>
            <Form.Item >
            <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登 陆
            </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}