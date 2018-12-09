import React,{Component} from 'react';
import '../../styles/App.less';
import qs from 'qs';
import { Carousel, WingBlank } from 'antd-mobile';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import Xiaapp from '../com/xiaApp.js';
import {  
    faSearch
} 
from '@fortawesome/free-solid-svg-icons'

library.add( 	
    faSearch
)


class Home extends Component{
	constructor(){
		super();
		this.state={
			imgs:[
				{
					url:'http://imgcdn.fjczy.com/ad/201811/10/22d1d83b52fb4466ba87a751b5b0527c.jpg'
				},
				
				{
					url:'http://imgcdn.fjczy.com/ad/201810/11/f9089df66c0841c78756a0dfddf7593e.jpg'
				},
				{
					url:'http://imgcdn.fjczy.com/ad/201811/20/a8c3a7021262494eb5945a100899795f.jpg'
				}
			],
			shuju:[]
		}
	}
	
	componentWillMount(){
	
		axios.post('/api/Home/GetBestGoodsJson',
		qs.stringify({
			pageIndex: 1,
           pageSize: 10
		}),
		{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded'
			}			
		})
		.then(res=>{
			this.setState({
				shuju:res.data.rows	
			})
			
		})
	}
	toDetail(val){
		let {history}=this.props;
		history.push('/detail');
		localStorage.setItem('key',JSON.stringify(val));
	}
	render(){
		return (
			<div className="Home">
				<Xiaapp/>
				<div className="homeSearch">
					<div className="search_content">
						<i>{<FontAwesomeIcon icon="search"/>}</i>
						<input type="text" placeholder="商品名称,商品编码，商品条形码"/>
					</div>
				</div>
				<div className="homeBanner">
					<WingBlank style={{margin:0}}>
				        <Carousel
				          autoplay={true}
				          infinite
				          
				        >
				          {this.state.imgs.map((val,idx)=> (
				            <a
				              key={val} 
				              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
				            >
				              <img
				                src={val.url}
				                alt=""
				                style={{ width: '100%', verticalAlign: 'top' }}
				                onLoad={() => {				                
				                  window.dispatchEvent(new Event('resize'));
				               
				                }}
				              />
				            </a>
				          ))}
				        </Carousel>
				    </WingBlank>
				</div>
				
				<div className="homeMore">
					<p>
						<span>新品/园区首发</span>
						<i>更多>></i>
					</p>
				</div>	
				<div className="xinpin clearfix">
					<ul className="clearfix">
						{this.state.shuju.map((val,idx)=>(
							<li key={idx} onClick={this.toDetail.bind(this,val)}>

								<img src={'http://imgcdn.fjczy.com/product'+val.ImgDefault}/>
								<p><strong>￥{val.Mktprice.toFixed(2)}</strong></p>
								<span>{val.GoodsName}</span>
							</li>
						))}
					</ul>
				</div>
				<div className="tuijian">
					<p>
						<span>推荐</span>	
					</p>
				</div>	
				<div className="homeTuiJian clearfix">
					<ul className="clearfix">
						{this.state.shuju.map((val,idx)=>(
							<li key={idx} onClick={this.toDetail.bind(this,val)}>
								<div className="imgLeft">
									<img src={'http://imgcdn.fjczy.com/product'+val.ImgDefault}/>
								</div>
								<div className="titleRight">
									<p>{val.GoodsName}</p>
									<b>￥{val.Mktprice.toFixed(2)}</b>
									<span>登录有惊喜</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}
export default Home;