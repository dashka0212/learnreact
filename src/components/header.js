import React from 'react';
import {NavLink} from 'react-router-dom';
class Header extends React.Component {
    render(){
        return (
            <div>
                <div class="header-top">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="header-top-wrapper">
                    
<ul class="top-menu">
            <li><a class="no-ajaxify" title="English" href="en_2.htm">English</a></li>
</ul>
<div class="header-search hidden-xs">
<form action="search_2.htm" class="no-ajaxify" id="searchform" method="post" role="search"><input name="__RequestVerificationToken" type="hidden" value="7k77w12esU1Y6wlbDx56fw8nHdWBBhR5wMMB5_ycawBIfhp9KYU5z5b1-36NQVqLNyoAl4_MBBaB5He_PeV6JNuzfYZY34SlRyfrhv55R2w1" />



    <input type="hidden" name="agg" value="1" />
    <div class="input-group">
        <input type="text" class="form-control" name="query" placeholder="Хайх" />
        <span class="input-group-btn">
            <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
        </span>
    </div>
</form></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="header hidden-xs hidden-sm">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <a href="www_parliament_default.html" class="logo">

                </a>
            </div>
        </div>
    </div>
</div>
<div id="nav">
    



<nav class="navbar navbar-default" data-spy="affix" data-offset-top="170">
    <div class="container">
        <div class="navbar-header hidden-lg">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-main" aria-expanded="false" aria-controls="menu-main">
                <span class="sr-only">Цэс өөрчлөх</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand no-ajaxify" href="www_parliament_default.html" title="Hural /Parliament/ of Mongolia">
            </a>
        </div>
        <div id="menu-main" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li  class="dropdown">
                <NavLink to={"/about"} className="dropdown-toggle no-ajaxify">Мэдээ</NavLink>
                    <ul class="dropdown-menu">
                            <li><a href="m/nono_2.htm">Мэдээ мэдээлэл</a></li>
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