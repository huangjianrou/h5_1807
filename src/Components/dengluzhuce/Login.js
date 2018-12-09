import React,{Component} from 'react';

import {Switch,Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  
    faAngleLeft
} 
from '@fortawesome/free-solid-svg-icons'

library.add( 	
    faAngleLeft
)


class Login extends Component{
    constructor(){
        super();
        this.state = {
            menu:[
                {
                    title:'账号密码登录',
                    user:'请输入用户名',
                    huo:'',
                    pass:'请输入密码',
                    wang:'忘记密码',
                    li:'立即注册'
                },
                {
                    title:'短信验证码登录',
                    user:'请输入手机号',
                    huo:'获取验证码',
                    pass:'请输入收到的验证码',
                    wang:'',
                    li:''
                }  
            ],
            index:0
        }

        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(tab,idx){
      this.setState({
      	index:idx
      })
    }

    componentDidMount(){
       
    }
    render(){
        return (<div className="Login">
        	<div className="loginHeader">
				<i>{<FontAwesomeIcon icon="angle-left"/>}</i>
				<span>登录</span>
			</div>
			<div className="loginContent clearfix">
				<ul className="clearfix">
		            {
		                this.state.menu.map((item,idx)=>{
		                    //key遵循的原则：唯一、稳定
		                    return <li className={this.state.index==idx?'on':""}key={item.title} onClick={this.handlerClick.bind(this,item,idx)}>{item.title}</li>
		                })
		            }
	           </ul>
	           <div className='logImg'>
	           		<img src='./img/logo.png'/>
	           </div>
	           <div className='useInput com'>
	           		<input type='text' placeholder={this.state.menu[this.state.index].user}/>
	           		<span className="yan">{this.state.menu[this.state.index].huo}</span>
	           </div>
	           <div className='passInput com'>
	           		<input type='text' placeholder={this.state.menu[this.state.index].pass}/>
	           </div>
	            <div className='dengLu'>
	           		登录
	           </div>
	           <div className='wang'>
	           		<span>{this.state.menu[this.state.index].wang}</span>
	           		<span>{this.state.menu[this.state.index].li}</span>
	           </div>
	           <div className='loginBottom'>
	           		客服：400-000-6333 点击拨打
	           </div>
			</div>	
			
        </div>)
    }
}

export default Login;