import React, {Component} from 'react';
import login from './logo.png';
import { Form, Icon, Input, Button } from 'antd';

import './index.less';
/*
应用根组件
 */

const Item = Form.Item;
class Login extends Component {

    login =(e) =>{
        e.preventDefault();
        this.props.form.validateFields((error,values) =>{
            if(!error){
                const {username,password} = values;
                
                console.log(username,password)
            }else{
                console.log('登录验证失败',error)
            }
        })
    }

    validator = (rule,value,callback) =>{
        const name = rule.fullField ==='username'?'用户名':'密码';

        if(!value){
            callback(`必须输入${name}！`);
        }else if(value.lengh < 4){
            callback(`${name}必须大于4位`);
        }else if(value.lengh > 15){
            callback(`${name}必须小于15位`);
        }else if(!/^[a-zA-Z0-9]+$/.test(value)){
            callback(`${name}只能包含英文字母、数字和下划线`);
        }else {
            callback();
        }
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return<div>
            <header className="login-header">
                <img src={login} alt=""/>
                <h1>React后台项目管理系统</h1>
            </header>
            <section className='login-content'>
                <h2>用户登录</h2>
                <Form onSubmit={this.login} className='login-form'>
                    <Item>
                        {
                            getFieldDecorator(
                                'username',
                                {
                                    rules:[
                                        {validator:this.validator}
                                    ]
                                }
                            )(<Input className='login-input' prefix={<Icon type="user"/>} placeholder="用户名"/>)
                        }
                    </Item>
                    <Item>
                        {
                            getFieldDecorator(
                                'password',
                                {
                                    rules:[
                                        {validator:this.validator}
                                    ]
                                }
                            )(<Input className="login-input" prefix={<Icon type="lock" />} placeholder="密码" type="password"/>)
                        }
                    </Item>
                    <Item>
                        <Button type='primary' htmlType='submit' className='login-btn'>登录</Button>
                    </Item>
                    
                </Form>
            </section>
        </div>
    }
}


export default Login