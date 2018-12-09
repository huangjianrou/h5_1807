import React,{Component} from 'react';
import '../../styles/App.less';
import axios from 'axios';
/*import qs from 'qs';*/
import { Tabs, WhiteSpace } from 'antd-mobile';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  
    faAngleLeft
} 
from '@fortawesome/free-solid-svg-icons'

library.add( 	
    faAngleLeft
)
class List extends Component{
	constructor(){
		super();
		this.state={
			tabs:[
			    { title: '实木家具' ,parentId:3},
			    { title: '实木大板' ,parentId:10},
			    { title: '大板配件' ,parentId:54},
			    { title: '根雕木雕' ,parentId:4},
			    { title: '根雕茶桌' ,parentId:824},
			    { title: '茶盘' ,parentId:6},
			    { title: '手串' ,parentId:2},
			    { title: '工艺品' ,parentId:7},
			    { title: '漆艺漆器' ,parentId:853},
			    { title: '香道用品' ,parentId:50},
			    { title: '原材料' ,parentId:57},
			    { title: '中华文化' ,parentId:909}
			],
			list:[],
			idx:0
			
		} 
		this.handlerClick=this.handlerClick.bind(this);
	}
	componentWillMount(){
		axios.get('/api/Home/GetChildCates',{
			params:{
				parentId:3
			}
		}).then(res=>{
			
			this.setState({
				list:res.data
			})	
		});
		
	}
	handlerClick(idx){
		
		let idUrl=this.state.tabs[idx].parentId;
		axios.get('/api/Home/GetChildCates',{
			params:{
				parentId:idUrl
			}
		}).then(res=>{
			
			this.setState({
				list:res.data,
				idx:idx
			})	
		});
	}
	handlerGotoGoodsList(val,index){
        //获取history
        let {history} = this.props;
      /*  console.log(history);*/
        history.push({
            pathname:'/goodsList/'+val.cate_id,
            
        });
    }
	render(){
		return (
			<div className="List">
				<div className="listHeader">
					<i>{<FontAwesomeIcon icon="angle-left"/>}</i>
					<span>分类页</span>
				</div>
				<div className="listTab">
					<div className="listLeft">
						<ul>
							{this.state.tabs.map((val,idx)=>(
								<li key={idx} className={this.state.idx==idx?"on":""} onClick={this.handlerClick.bind(this,idx)}>{val.title}</li>
							))}
							
						</ul>
					</div>
					<div className="listRight">
						<p>{this.state.tabs[this.state.idx].title}>></p>
						<ul>
							{this.state.list.map((val,index)=>(
								<li key={index}  onClick={this.handlerGotoGoodsList.bind(this,val,index)}>
									<img src={'http://imgcdn.fjczy.com/icon'+val.cate_image}/>
									<p>{val.cate_name}</p>
								</li>
							))}
							
						</ul>
					</div>
					
				</div>
			</div>
		)
	}
}
export default List;