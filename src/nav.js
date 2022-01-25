import React, {Component} from 'react';
import {Nav, Navbar, NavItem, NavLink, NavbarToggler, NavbarText, NavbarBrand} from 'reactstrap';
import logo from './sblogo.png';
import './nav.css';

class Navi extends Component{
    constructor(prop){
        super(prop);
        this.state ={
            navistate : false,
        }
    }

    toggle=()=>{
        this.setState(
            {
                naviState : !this.state.naviState,
            }
        )
    }

    render(){
        return (
           <Navbar>
               <NavbarBrand tag='h1'>
                   <a href='/'>
                       <img src={logo} style={{height: 100 }} className='App-logo' />
                   </a>
               </NavbarBrand>
               <button data-state={this.state.naviState} onClick={this.toggle} id='navToggler' className='navbar-toggler d-block d-md-none'>
                   <span data-state={this.state.naviState}></span>
               </button>
               <Nav data-open={this.state.naviState} className='d-none d-md-flex' id="gnb">
                   <NavItem>
                       <NavLink href='#about'>
                           새소식
                       </NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink href='#menu'>
                           메뉴
                       </NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink href='#search'>
                           매장찾기
                       </NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink href='#consumer'>
                           고객센터
                       </NavLink>
                   </NavItem>
               </Nav>
           </Navbar>
        )
   }
}

export default Navi;