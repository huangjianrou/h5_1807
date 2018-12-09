import React,{Component} from "react";
import { Carousel, WingBlank } from 'antd-mobile';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  
    faAngleLeft,
    faCartArrowDown
} 
from '@fortawesome/free-solid-svg-icons'

library.add( 	
    faAngleLeft,
    faCartArrowDown
)
class Detail extends Component{
	constructor(){
		super();
		this.state={
			goods:{},
			imgs:[],
			sum:1
		}
	}
	addSum(){
		
		this.setState({
			sum:++this.state.sum
		})
	}
	redSum(){
		
		if(this.state.sum<2){
			this.state.sum=2;
		}
		this.setState({
			sum:--this.state.sum
		})
	}
	componentWillMount(){
		let read=JSON.parse(localStorage.getItem('key'));
		let url=`http://imgcdn.fjczy.com/product${read.ImgDefault}`;
		let arr=[]
		for(var i=0;i<4;i++){
			arr.push(url);
		}
		this.setState({
			goods:read,
			imgs:[...arr]
		})
		
	}
	componentDidMount(){
		
	}
	render(){
		return (
			<div className="Detail">
				<div className="detailHeader">
					<i>{<FontAwesomeIcon icon="angle-left"/>}</i>
					<span>详情商品</span>
					<i className="sou" >{<FontAwesomeIcon icon="cart-arrow-down"/>}</i>
				</div>
				<div className="detailBanner">
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
				                src={val}
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
				<div className="detailContent clearfix">
					<span>{this.state.goods.GoodsName}</span>
					<ul className="clearfix xPrice">
						<li><p>零售价<b>¥{this.state.goods.Mktprice.toFixed(2)}</b></p></li>
						<li><p>编　码：{this.state.goods.GoodsSn}</p></li>
						<li><p>条　码：{this.state.goods.Barcode}</p></li>
						<li><p>库　存：{this.state.goods.CState}</p></li>
						<li><p>星　级：★★★★</p></li>
						<li><p> 规　格： 默认</p></li>
						<li>
							<p> 数　量：
								<i className="redSum" onClick={this.redSum.bind(this)}>-</i>
								<input type="text"  value ={this.state.sum}/>
								<i className="addSum" onClick={this.addSum.bind(this)}>+</i>
								<em><b>1</b>件起售</em>
							</p>
						</li>
						
						<li><p>木架费:<b>120元/立方</b></p></li>
					</ul>
					<ul className="clearfix xguige">
						<li><p>材质:香樟木</p><p>坐垫:无坐垫</p></li>
						<li><p>所在地:福建福州</p><p>光身家具:否</p></li>
						<li><p>{this.state.goods.PdtDesc}</p></li>
						<li><p>{this.state.goods.SpecDesc}</p></li>
					</ul>
					<span className="xiang">商品详情</span>
					<ul className="xImg">
						<li>
							<img src={this.state.imgs[0]}/>
						</li>
						<li>
							<img src="http://imgcdn.fjczy.com/product/201801/29/f633a54276e84ec0820e262e2ba2f5cf.jpg"/>
						</li>
						<li>
							<img src="http://imgcdn.fjczy.com/product/201801/29/5e9d1e9e939e4106b12b15338c01eaba.jpg"/>
						</li>
						<li>
							<img src={this.state.imgs[0]}/>
						</li>
						<li>
							<img src="http://imgcdn.fjczy.com/product/201801/29/5e9d1e9e939e4106b12b15338c01eaba.jpg"/>
						</li>
						<li>
							<img src="http://imgcdn.fjczy.com/product/201801/29/f633a54276e84ec0820e262e2ba2f5cf.jpg"/>
						</li>
						<li className="ling">
							<img src="./img/mzsm.jpg"/>
						</li>
					</ul>
					
				</div>
			</div>
			)
	}
}
export default Detail;