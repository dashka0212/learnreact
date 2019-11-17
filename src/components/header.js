import React from 'react';
import {NavLink} from 'react-router-dom';
class Header extends React.Component {
    render(){
        return (
            <div>
                <div className="header-top">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="header-top-wrapper">
                    
<ul className="top-menu">
            <li><a className="no-ajaxify" title="English" href="en_2.htm">English</a></li>
</ul>
<div className="header-search hidden-xs">
<form action="search_2.htm" className="no-ajaxify" id="searchform" method="post" role="search"><input name="__RequestVerificationToken" type="hidden" value="7k77w12esU1Y6wlbDx56fw8nHdWBBhR5wMMB5_ycawBIfhp9KYU5z5b1-36NQVqLNyoAl4_MBBaB5He_PeV6JNuzfYZY34SlRyfrhv55R2w1" />



    <input type="hidden" name="agg" value="1" />
    <div className="input-group">
        <input type="text" className="form-control" name="query" placeholder="Хайх" />
        <span className="input-group-btn">
            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
        </span>
    </div>
</form></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="header hidden-xs hidden-sm">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <a href="www_parliament_default.html" className="logo">

                </a>
            </div>
        </div>
    </div>
</div>
<div id="nav">
    



<nav className="navbar navbar-default" data-spy="affix" data-offset-top="170">
    <div className="container">
        <div className="navbar-header hidden-lg">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-main" aria-expanded="false" aria-controls="menu-main">
                <span className="sr-only">Цэс өөрчлөх</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand no-ajaxify" href="www_parliament_default.html" title="Hural /Parliament/ of Mongolia">
            </a>
        </div>
        <div id="menu-main" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li>
                    <NavLink to={"/"} className="dropdown-toggle no-ajaxify">Нүүр</NavLink>
                </li>
                <li  className="dropdown">
                <NavLink to={"/news"} className="dropdown-toggle no-ajaxify">Мэдээ</NavLink>
                    <ul className="dropdown-menu">
                            <li><NavLink to={"/news"}>Мэдээ мэдээлэл</NavLink></li>
                            <li><a href="m/qofy_2.htm">Видео мэдээ</a></li>
                            <li><a href="m/qwfy_2.htm">Фото мэдээ</a></li>
                            <li><a href="m/cego_2.htm">Инфографик</a></li>
                            <li><a href="m/xrfy_2.htm">NEWS</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
            </div> 
        )
    }
}

export default Header;