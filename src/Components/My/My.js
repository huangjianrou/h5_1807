import React,{Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  
    faAngleLeft,
    faCamera
} 
from '@fortawesome/free-solid-svg-icons'

library.add( 	
    faAngleLeft,
     faCamera
)
class My extends Component{
	constructor(){
		super();
		this.state={
			list1:[
				{
					img1:'./img/icon_daifukuan.png',
					title:'待付款',
					img2:'./img/right.png'
				},
				{
					img1:'./img/icon_fahuo.png',
					title:'待发货',
					img2:'./img/right.png'
				},
				{
					img1:'./img/icon_buy.png',
					title:'待收货',
					img2:'./img/right.png'
				},
				{
					img1:'./img/icon_maide.png',
					title:'已完成',
					img2:'./img/right.png'
				}
			],
			list2:[
				{
					img1:'./img/icon_adress.png',
					title:'地址管理',
					img2:'./img/right.png'
				},
				{
					img1:'./img/icon_shoucang.png',
					title:'我的收藏',
					img2:'./img/right.png'
				}
			],
			list3:[
				{
					img1:'./img/icon_denglumima.png',
					title:'修改登录密码',
					img2:'./img/right.png'
				},
				{
					img1:'./img/icon_tixianmima.png',
					title:'设置提现/支付密码',
					img2:'./img/right.png'
				}
			],
			list4:[
				{
					img1:'./img/yijiantiguang.png',
					title:'一键推广',
					img2:'./img/right.png'
				},
				{
					img1:'./img/tghuiyuan.png',
					title:'我推广的会员',
					img2:'./img/right.png'
				},
				{
					img1:'./img/xq-quan@3x.png',
					title:'我的优惠券',
					img2:'./img/right.png'
				},
				{
					img1:'./img/icon_wdjf.png',
					title:'积分商城',
					img2:'./img/right.png'
				}
			]
		}
	}
	goBack(){
		let {history}=this.props;
		history.goBack(-1);
	}
	render(){
		return (
			<div className="My">
				<div className="myHeader">
					<i onClick={this.goBack.bind(this)}>{<FontAwesomeIcon icon="angle-left"/>}</i>
					<span>我的信息</span>
					<span>退出</span>
				</div>
				<div className="myState">
					<div className="s_left">
						<p>李白</p>
						<span>13202361816</span>
					</div>
					<div className="s_right">
						<img src="./img/icon_xiugai.png"/>
					</div>
				</div>
				<ul className="myContent">
					<p>我的订单</p>
					<ul className="kong">
						{this.state.list1.map((item,idx)=>(
							<li key={idx}>
								<span>
									<i><img src={item.img1}/></i>
									<i>{item.title}</i>
								</span>
								<span>
								 	<i className="xiao"><img src={item.img2}/></i>
								</span>
							</li>
						))}
					</ul>	
					<ul className="kong">
						{this.state.list2.map((item,idx)=>(
							<li key={idx}>
								<span>
									<i><img src={item.img1}/></i>
									<i>{item.title}</i>
								</span>
								<span>
								 	<i className="xiao"><img src={item.img2}/></i>
								</span>
							</li>
						))}
					</ul>
					<ul className="kong">
						{this.state.list3.map((item,idx)=>(
							<li key={idx}>
								<span>
									<i><img src={item.img1}/></i>
									<i>{item.title}</i>
								</span>
								<span>
								 	<i className="xiao"><img src={item.img2}/></i>
								</span>
							</li>
						))}
					</ul>
					<ul className="kong">
						{this.state.list4.map((item,idx)=>(
							<li key={idx}>
								<span>
									<i><img src={item.img1}/></i>
									<i>{item.title}</i>
								</span>
								<span>
								 	<i className="xiao"><img src={item.img2}/></i>
								</span>
							</li>
						))}
					</ul>
				</ul>
			</div>
		)
	}
}
export default My;