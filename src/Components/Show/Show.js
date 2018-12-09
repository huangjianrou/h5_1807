import React,{Component} from 'react';
import '../../styles/App.less';
import axios from 'axios';
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
class Show extends Component{
	constructor(){
		super();
		this.state={
			list:[]
		}
	}
	componentWillMount(){
		axios.get('/api/Home/JsonXspaceList',{
			params:{
				pageIndex: 1,
				pageSize: 10
			}
		}).then(res=>{
			
			this.setState({
				list:res.data.data
			})
			console.log(this.state.list);	
		});
		
	}
	render(){
		return (<div className="Show">
			<div className="showHeader">
				<i>{<FontAwesomeIcon icon="angle-left"/>}</i>
				<span>我单我秀</span>
				<i>{<FontAwesomeIcon icon="camera"/>}</i>
			</div>
			<div className="showBanner">
				<img src="img/banner.png"/>
			</div>
			<div className="pinglun clearfix">
				<ul className="clearfix">
					{this.state.list.map((val,idx)=>(
						<li key={idx}>
							<span>{val.Mobile}</span>
							<p>{val.Content}</p>
							<div className="pingImg">
								<img src={val.PhotoList[0].Photomobile}/>
								<img src={val.PhotoList[1].Photomobile}/>
								<img src={val.PhotoList[2].Photomobile}/>
								<img src={val.PhotoList[3].Photomobile}/>
							</div>
						</li>
					))}

				</ul>
			</div>
		</div>)
	}
}
export default Show;