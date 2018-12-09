import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

import { TabBar } from 'antd-mobile';
import Home from './Components/Home/Home.js';
import Cart from './Components/Cart/Cart.js';
import List from './Components/List/List.js';
import Detail from './Components/Detail/Detail.js';
import GoodsList from './Components/Goods/goodsList.js';
import My from './Components/My/My.js';
import Show from './Components/Show/Show.js';
import Login from './Components/dengluzhuce/Login.js';
import Reg from './Components/dengluzhuce/Reg.js';
//引入ant-design-mobile的样式
import '../node_modules/antd-mobile/dist/antd-mobile.css';
import './styles/App.less';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	  faHome,
    faListUl,
    faCamera,
    faShoppingCart,
    faUser,
    faSearch
} 
from '@fortawesome/free-solid-svg-icons'

library.add( 
		faHome,
    faListUl,
  	faCamera,
    faShoppingCart,
    faUser,
    faSearch
)


class App extends Component {
	constructor(){
		super();
		this.state={
			 tabs:[
				{
					title:'首页',
					path:'/home',
					
          icon:'home'
				},
			  {
	        title:'分类',
	        path:'/list',
	        
	        icon:'list-ul'
        },
        {
	        title:'我单我秀',
	        path:'/show',
	       
	        icon:'camera'
        },
        {
	        title:'购物车',
	        path:'/cart',
	       
	        icon:'shopping-cart'
        },
        {
	        title:'我的',
	        path:'/my',
	        
	        icon:'user'
        }
			],
			currentTab:0
		}
	}
	
	handlerClick(idx,path){
		this.setState({
			currentTab:idx
		});
		this.props.history.push(path);
	}
	componentWillMount(){
		let hash=window.location.hash.slice(1);
		let currentTab=0
		this.state.tabs.some((item,idx)=>{
			currentTab=idx;
			return item.path===hash
		});
		this.setState({
			currentTab
		});
	}
	
	
  render() {
    return (
    <div className="container">
	  	<div className="content">
	  		<Switch>
	  			<Route path='/home' component={Home}/>
	  			<Route path='/cart' component={Cart}/>
	  			<Route path='/goodsList' component={GoodsList}/>
	  			<Route path='/show' component={Show}/>
	  			<Route path='/my' component={My}/>
	  			<Route path='/list' component={List}/>
	  			<Route path='/login' component={Login}/>
	  			<Route path='/reg' component={Reg}/>
	  			<Route path='/detail' component={Detail}/>
	  			
	  			<Redirect from="/" to="/home" exact/>
	  		</Switch>
	  	</div>
  		<TabBar className="TabBar"
      tintColor="#f00"
	    noRenderContent={true}
	   /* hidden={!this.props.tabbarStatus}*/
    >
  		{
		  		this.state.tabs.map((tab,idx)=>{
		  		 return <TabBar.Item
  			 			title={tab.title}
  						key={tab.path}
  						icon={<FontAwesomeIcon icon={tab.icon}/>}
  						selectedIcon={<FontAwesomeIcon icon={tab.icon}/>}
  						onPress={this.handlerClick.bind(this,idx,tab.path)}
							selected={this.state.currentTab===idx}
		  			>
		  			</TabBar.Item>
		  		})
  		}
      </TabBar>
      	
      </div>		
    );
  }
}
App = withRouter(App);
export default App;
