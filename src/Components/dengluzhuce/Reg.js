import React,{Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import {Switch,Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
    faAngleLeft,
    faUser,
    faUnlock,
    faEnvelopeOpen,
    faKey
} 
from '@fortawesome/free-solid-svg-icons';

library.add( 	
    faAngleLeft,
    faUser,
    faUnlock,
    faEnvelopeOpen,
    faKey
)


class Reg extends Component{
    constructor(){
        super();
       this.state={
			msg:[
				{
					icon:'user',
					title:'手机号',
					xing:'*'
				},
				{
					icon:'unlock',
					title:'请输入密码',
					xing:'*',
				},
				{
					icon:'unlock',
					title:'确认密码',
					xing:'*'
				},
				{
					icon:'envelope-open',
					title:'联系人',
					xing:'*'
				},
				{
					icon:'envelope-open',
					title:'邀请码',
					xing:''
				},
				{
					icon:'key',
					title:'请输入验证码',
					xing:''
				}
			],
			provice:[''],
			city:[],			
            county:[],
			PId:1
       }
    }
    
    
    getCity(e){
    	axios.post('/api/Home/GetRegionData',
		qs.stringify({
			provId: e.target.value
          
		}),
		{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded'
			}			
		})
		.then(res=>{
			
			this.setState({
				city:res.data
			})
		})
    }
    getCounty(e){
    	axios.post('/api/Home/GetRegionData',
		qs.stringify({
			provId: e.target.value
          
		}),
		{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded'
			}			
		})
		.then(res=>{
			
			this.setState({
				county:res.data
			})
		})
    }
    componentDidMount(){
    	axios.post('/api/Home/GetRegionData',
		qs.stringify({
			provId: this.state.PId
          
		}),
		{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded'
			}			
		})
		.then(res=>{
			
			this.setState({
				provice:res.data
			})
		})
       
    }
    render(){
        return (<div className="Reg">
        	<div className="regHeader">
				<i>{<FontAwesomeIcon icon="angle-left"/>}</i>
				<span>注册</span>
				<span>保存</span>
			</div>	
			<ul className="regContent">
				{this.state.msg.map((item,idx)=>(
					<li key={idx}>
						<i>{<FontAwesomeIcon icon={item.icon}/>}</i>
						<input type="text" placeholder={item.title}/>
						<span>{item.xing}</span>
					</li>
				))}
				<li>
					<i>已有账号,立即登录?</i>
					<button>发送验证码</button>
				</li>
				<li>
					<i>省:</i>
					<select onChange={this.getCity.bind(this)}>
						<option></option>
						{this.state.provice.map((item,idx)=>(
							<option key={idx} value={item.RegionId}>{item.RegionName}</option>
						))}
					</select>
					<span>*</span>
				</li>
				<li>
					<i>市:</i>
					<select onChange={this.getCounty.bind(this)}>
						{this.state.city.map((item,idx)=>(
							<option  key={idx} value={item.RegionId}>{item.RegionName}</option>
						))}
					</select>
					<span>*</span>
				</li>
				<li>
					<i>县/区:</i>
					<select>
						{this.state.county.map((item,idx)=>(
							<option key={idx}>{item.RegionName}</option>
						))}
					</select>
					<span>*</span>
				</li>
			</ul>
        </div>)
    }
}

export default Reg;