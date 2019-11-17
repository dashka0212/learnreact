import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import {postSingle} from '../../redux/actions';
class NewsSingle extends React.Component {
    componentDidMount(){
        const {dispatch , match} = this.props;
        dispatch(postSingle(match.params.id));
    }
    render(){
        const {newsSingle} = this.props;
        return(
            <div>
                <Header />
                <div className="col-lg-9 col-md-9">
                    <div id="content-detail" className="content-detail">
                        <div id="qeyu3q">
                            <h3>{newsSingle.title}</h3>
                            <div>
                                <div className="pull-left">
                                <span><i className="icon ion-ios-clock-outline"></i>&nbsp; {newsSingle.id}</span><span><i className="icon ion-ios-eye-outline"></i>&nbsp; 164</span>
                                </div>
                                <div className="pull-right">
                                    <ul>
                                        <li>
                                            <div className="fb-share-button fb_reset"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-1"></div>
                            <div className="text">
                                <p className="MsoNormal"><img src="http://www.parliament.mn/medias/9cc8deea-54ed-4e60-8127-795160d14953.JPG" />&nbsp;</p>
                                <p className="MsoNormal">
                                    <span>{newsSingle.body}</span><br />
                                </p>
                            </div>
                            <div className="content-part-list">
                                <div></div>
                            </div>
                            <div className="tag-list">
                                <div className="pull-left"></div>
                                <div className="clearfix"></div>
                            </div>
                            <hr />
                            <div>
                                <div className="pull-left">
                                    <span><i className="icon ion-ios-clock"></i>&nbsp; {newsSingle.id}</span><span><i className="icon ion-ios-eye-outline"></i>&nbsp; 164</span>
                                </div>
                            </div>
                            <div className="space10"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
      users : state.todo.users,
      todos : state.todo.todos,
      newsSingle : state.todo.single
    }
  }
export default connect(mapStateToProps)(NewsSingle)