import React,{Component} from 'react';
import '../../styles/App.less';
import axios from 'axios';
/*import qs from 'qs';*/
import { Tabs, WhiteSpace } from 'antd-mobile';
import qs from 'qs';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  
    faAngleLeft,
     faSearch
} 
from '@fortawesome/free-solid-svg-icons'

library.add( 	
    faAngleLeft,
     faSearch
)
class goodsList extends Component{
	constructor(){
		super();
		this.state={
			list:[],
			goods:''
		}
		
	}
	componentWillMount(){
		let hash= window.location.hash.slice(12);
		/*console.log(hash)*/
		axios.post('/api/Home/GoodsListJson',
		qs.stringify({
			pageIndex: 1,
           pageSize: 10,
           cateId: hash
		}),
		{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded'
			}			
		})
		.then(res=>{
			this.setState({
				list:res.data.rows
			})
		})
		
	}
	listToDetai(val){ 
		let {history} = this.props;
        localStorage.setItem('key',JSON.stringify(val));
        history.push({
            pathname:'/detail'
        });
       
	}
	
	
	render(){
		return (
			<div className="goodsList">
				<div className="goodslistHeader">
					<i>{<FontAwesomeIcon icon="angle-left"/>}</i>
					<span>分类页</span>
					<i className="sou">{<FontAwesomeIcon icon="search"/>}</i>
				</div>
				<div className="xinpin clearfix">
					<ul className="clearfix">
						{this.state.list.map((val,idx)=>(
							<li key={idx} onClick={this.listToDetai.bind(this,val)}>

								<img src={'http://imgcdn.fjczy.com/product'+val.ImgDefault}/>
								<p><strong>￥{val.Mktprice.toFixed(2)}</strong></p>
								<span>登录惊喜价</span>
								<span>{val.GoodsName}</span>
								
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}
export default goodsList;