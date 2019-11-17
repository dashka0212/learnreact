import React from 'react';
import Header from './header';
import RightMenu from './rightMenu';
import NavMenu from './navMenu';
import {connect} from 'react-redux';
import {testRed , getUsers , getTodos} from '../../redux/actions';
import {NavLink} from 'react-router-dom';
class About extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.dispatch(getUsers());
  }
  render(){
    return (
      <div>
        <Header />
        <div className="content">
          <div id="page_container">
              <div className="container content-wrapper">
                <NavMenu />
                <div className="col-lg-7 col-md-7">
                        <div id="559537">
                            <div className="page-title">
                                <h3>  Мэдээ мэдээлэл            
                                  <span className="pull-right">
                                      <span className="badge badge-info" data-rel="tooltip" title="Total count">2373 мэдээ</span>
                                  </span>
                                </h3>
                                <p className="category-desc">
                                    Улсын Их Хурлын 2018 оны хаврын ээлжит чуулган нээлтээ хийлээ
                                </p>
                            </div>
                            <div className="clearfix"></div>
                            {
                              this.props.newss.map((news) => 
                              <NavLink to={"/news/" + news.id}>
                                  <News title={news.title} desc={news.body} date={news.id}/>
                              </NavLink>
                              )
                            }
                    </div>
                </div>
                <RightMenu />
              </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  console.log( state.todo.users);
  return {
    newss : state.todo.users,
  }
}



const News = (props) => {
  return (
    <div className="row">
                <div className="col-md-3 col-lg-2 news-item-img-wrapper hidden-xs hidden-sm">
                    <div className="news-item-img"></div>
                </div>
                <div className="col-md-9 col-lg-10">
                  <h3>{props.title}</h3>
                  <span><i className="icon ion-ios-clock-outline"></i> {props.date}</span>
                    <p>
                        {props.desc}
                    </p>
                </div>
        </div>
  )
}


export default connect(mapStateToProps)(About);
