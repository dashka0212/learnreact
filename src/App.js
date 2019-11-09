import React , {Component} from 'react';
import {testRed , getUsers , getTodos} from '../redux/actions';
import {connect} from 'react-redux';
import Header from './components/header';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users : [],
      todos : []
    }
  }
  componentDidMount(){
    this.props.dispatch(getUsers());
  }
  test(event){
    this.props.dispatch(testRed(event.target.value));
  }
  testing(id){
    console.log(id);
    this.props.dispatch(getTodos(id));
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Others />
        </header>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    users : state.todo.users,
    todos : state.todo.todos,
  }
}

const Others = () => {
  return (
    <div>
      <div class="content">
          <div class="container" id="breadcrumb_container">
              


          </div>
          <div class="container">
              <div id="alerts">
      </div>
          </div>
          <div id="page_container">
              
      <div class="container content-wrapper">
          
          <div class="ajax-content" data-ajax="/n?view=featured&amp;featured=true&amp;limit=4">
              <div class="well">
                  Мэдээллийг ачааллаж байна ..
              </div>
          </div>
          
          <div class="spaceclear"></div>
          <div class="row">
              <div class="col-md-9">
                  <ul class="nav nav-tabs">
                      <li class="active"><a data-toggle="tab" href="www_parliament_default.html#latest" data-ajax="/n?view=sidebar&amp;type=default&amp;sort_field=published&amp;sort_dir=desc&amp;limit=20" data-on-success="OnLoadLatestNews">Шинэ</a></li>
                      <li><a data-toggle="tab" href="www_parliament_default.html#photo" data-ajax="/d/photos/slider?limit=10">Фото мэдээ</a></li>
                      <li><a data-toggle="tab" href="www_parliament_default.html#video" data-ajax="/d/videos/slider?limit=10">Дүрст мэдээ</a></li>
                      <li class="hidden-xs"><a data-toggle="tab" href="www_parliament_default.html#calendar" data-ajax="/calendar?name=calendar&amp;view=top">Өнөөдөр</a></li>
                  </ul>
                  <div class="tab-content">
                      <div id="latest" class="tab-pane fade in active">
                          <div class="well-space">
                              <div class="well">
                                  Мэдээллийг ачааллаж байна ..
                              </div>
                          </div>
                      </div>
                      <div id="photo" class="tab-pane fade">
                          <div class="well-space">
                              <div class="well">
                                  Мэдээллийг ачааллаж байна ..
                              </div>
                          </div>
                      </div>
                      <div id="video" class="tab-pane fade">
                          <div class="well-space">
                              <div class="well">
                                  Мэдээллийг ачааллаж байна ..
                              </div>
                          </div>
                      </div>
                      <div id="calendar" class="tab-pane fade">
                          <div class="well-space">
                              <div class="well">
                                  Мэдээллийг ачааллаж байна ..
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="space72"></div>
                  
      <div class="home-right-menu">
          <ul class="side-menu">
              <li>
                  <a target="_blank" href="forum_parliament_default.html">
                      {/* <img class="hidden-md" src="themes/new/assets/images/ic-forum_2.png" alt="" /> */}
                      <h3>Цахим хэлэлцүүлэг</h3>
                      <span>Хуулийн төслийн хэлэлцүүлэг</span>
                  </a>
              </li>
              <li>
                  <a target="_blank" href="forum_parliament_default_2.html">
                      {/* <img class="hidden-md" src="themes/new/assets/images/ic-project_2.png" alt="" /> */}
                      <h3>Өргөн мэдүүлсэн төсөл</h3>
                      <span>УИХ-д өргөн мэдүүлсэн төсөл</span>
                  </a>
              </li>
              <li>
                  <a href="http://www.parliament.mn/d/huraldaaniitov">
                      {/* <img class="hidden-md" src="themes/new/assets/images/ic-session_2.png" alt="" /> */}
                      <h3>Хуралдааны тов</h3>
                      <span>Хэлэлцэх асуудал хуралдааны хуваарь</span>
                  </a>
              </li>
              <li>
                  <a target="_blank" href="laws.htm">
                      {/* <img class="hidden-md" src="themes/new/assets/images/ic-law_2.png" alt="" /> */}
                      <h3>Хуулийн сан</h3>
                      <span>Батлагдсан хууль, тогтоолууд</span>
                  </a>
              </li>
              <li>
                  <a href="d/stateinfo_2.htm">
                      {/* <img class="hidden-md" src="themes/new/assets/images/ic-tm_2.png" alt="" /> */}
                      <h3>Төрийн мэдээлэл</h3>
                      <span>Төрийн мэдээллийн эмхэтгэлүүд</span>
                  </a>
              </li>
          </ul>
      </div>
              </div>
          </div>
          <div class="space40"></div>
          

      <div class="row small-boxes">
          <div class="col-sm-6 col-md-3">
              <a href="pages/livetv.htm">
                      <div class="box-tv text-center">
                          {/* <img src="themes/new/assets/images/ic-tv_2.png" alt="" /> */}
                          <h3>Parliament ТВ</h3>
                          <p>шууд үзэх</p>
                      </div>
              </a>
          </div>
          <div class="col-sm-6 col-md-3">
              <div class="box">
                  <a class="twitter-timeline" data-height="179" href="https://twitter.com/ParliamentMN">Tweets by ParliamentMN</a>
                  <script async src="http://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
          </div>
          <div class="col-sm-6 col-md-3">
              <div class="text-center">
                  <div class="fb-page" data-href="https://www.facebook.com/ParliamentMN-492661167424998/" data-tabs="timeline" data-height="207" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/ParliamentMN-492661167424998/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ParliamentMN-492661167424998/">ParliamentMN</a></blockquote></div>
              </div>
          </div>
          <div class="col-sm-6 col-md-3">
              <div class="box">
                  <div class="box-app">
                      <div class="box-playstore hidden-md"></div>
                      <ul>
                          {/* <li><a target="_blank" href="https://play.google.com/store/apps/details?id=com.ideadevelopment.parliament"><img src="themes/new/assets/images/app-parliament_2.png" alt="" /></a></li> */}
                          {/* <li><a target="_blank" href="https://play.google.com/store/apps/details?id=com.mezorn.lawsmn"><img src="themes/new/assets/images/app-law_2.png" alt="" /></a></li> */}
                          {/* <li><a target="_blank" href="https://play.google.com/store/apps/details?id=com.mezorn.emhetgel"><img src="themes/new/assets/images/app-tm_2.png" alt="" /></a></li> */}
                      </ul>
                  </div>
                  <div class="box-app">
                      <div class="box-appstore hidden-md"></div>
                      <ul>
                          {/* <li><a target="_blank" href="https://itunes.apple.com/us/app/parliamentmn/id735910569"><img src="themes/new/assets/images/app-parliament_2.png" alt="" /></a></li> */}
                          {/* <li><a target="_blank" href="https://itunes.apple.com/us/app/lawsmn/id657730319"><img src="themes/new/assets/images/app-law_2.png" alt="" /></a></li> */}
                          {/* <li><a target="_blank" href="https://itunes.apple.com/us/app/тм-эмхэтгэл/id585235327"><img src="themes/new/assets/images/app-tm_2.png" alt="" /></a></li> */}
                      </ul>
                  </div>
              </div>
          </div>
      </div>


      </div>


          </div>
      </div>
      <div class="container footer-menu hidden-xs hidden-sm">
          <div class="row">
                  <div class="col-md-3 fixed">
                      <ul>
                          <li>
                              <a href="m/9cro_2.htm" title="Улсын Их Хурлын тухай" >
                                  Улсын Их Хурлын тухай
                              </a>
                          </li>
                  <li>
                      <a href="http://www.parliament.mn/m/jygo" title="Түүхэн товчоон" >Түүхэн товчоон</a>
                  </li>
                  <li>
                      <a href="m/jrgo_2.htm" title="Бүтэц, зохион байгуулалт" >Бүтэц, зохион байгуулалт</a>
                  </li>
                  <li>
                      <a href="http://www.parliament.mn/n/8pey.htm" title="Бүрэн эрх" >Бүрэн эрх</a>
                  </li>
                  <li>
                      <a href="http://www.parliament.mn/n/8tey.htm" title="Хууль тогтоох үе шат" >Хууль тогтоох үе шат</a>
                  </li>
                  <li>
                      <a href="http://www.parliament.mn/n/8iey.htm" title="Хянан шалгах" >Хянан шалгах</a>
                  </li>
                  <li>
                      <a href="http://www.parliament.mn/m/jwgo" title="УИХ дахь бүлэг /албан бус/" >УИХ дахь бүлэг /албан бус/</a>
                  </li>
                      </ul>
                  </div>
                  <div class="col-md-3 fixed">
                      <ul>
                          <li>
                              <a href="cv_7.htm" title="Улсын Их Хурлын гишүүд" >
                                  Улсын Их Хурлын гишүүд
                              </a>
                          </li>
                  <li>
                      <a href="http://www.parliament.mn/cv_2.htm" title="Улсын Их Хурлын дарга" >Улсын Их Хурлын дарга</a>
                  </li>
                  <li>
                      <a href="http://www.parliament.mn/cv_3.htm" title="Улсын Их Хурлын дэд дарга" >Улсын Их Хурлын дэд дарга</a>
                  </li>
                  <li>
                      <a href="http://www.parliament.mn/cv_6.htm" title="Улсын Их Хурлын гишүүд" >Улсын Их Хурлын гишүүд</a>
                  </li>
                  <li>
                      <a href="http://www.parliament.mn/cv_5.htm" title="Байнгын хороодоор" >Байнгын хороодоор</a>
                  </li>
                  <li>
                      <a href="http://www.parliament.mn/cv_4.htm" title="Намын харъяаллаар" >Намын харъяаллаар</a>
                  </li>
                      </ul>
                  </div>
                  <div class="col-md-3 fixed">
                      <ul>
                          <li>
                              <a href="http://www.parliament.mn/m/eego" title="Үйл ажиллагаа" >
                                  Үйл ажиллагаа
                              </a>
                          </li>
                  <li>
                      <a href="http://www.parliament.mn/www_parliament_default.html" title="Хууль тогтоох үйл ажиллагаа" >Хууль тогтоох үйл ажиллагаа</a>
                  </li>
                  <li>
                      <a href="http://www.parliament.mn/www_parliament_default.html" title="Хянан шалгах үйл ажиллагаа" >Хянан шалгах үйл ажиллагаа</a>
                  </li>
                  <li>
                      <a href="m/kogo_2.htm" title="Гадаад харилцаа" >Гадаад харилцаа</a>
                  </li>
                      </ul>
                  </div>
                  <div class="col-md-3 fixed">
                      <ul>
                          <li>
                              <a href="m/ecgo_2.htm" title="Парламентын боловсрол" >
                                  Парламентын боловсрол
                              </a>
                          </li>
                  <li>
                      <a href="m/mego_2.htm" title="Төрийн ордны танилцуулга" >Төрийн ордны танилцуулга</a>
                  </li>
                  <li>
                      <a href="m/mcgo_2.htm" title="Галлерей" >Галлерей</a>
                  </li>
                  <li>
                      <a href="http://www.parliament.mn/tour_parliament_default.html" title="Цахим аялал" >Цахим аялал</a>
                  </li>
                      </ul>
                  </div>
                  <div class="col-md-3 fixed">
                      <ul>
                          <li>
                              <a href="http://www.parliament.mn/www_parliament_default.html" title="Мэдээ мэдээлэл" >
                                  Мэдээ мэдээлэл
                              </a>
                          </li>
                  <li>
                      <a href="m/kwgo_2.htm" title="Албан мэдээ" >Албан мэдээ</a>
                  </li>
                  <li>
                      <a href="m/kago_2.htm" title="Улсын Их Хурлын дарга" >Улсын Их Хурлын дарга</a>
                  </li>
                  <li>
                      <a href="m/khgo_2.htm" title="Хуралдааны тойм" >Хуралдааны тойм</a>
                  </li>
                  <li>
                      <a href="m/mygo_2.htm" title="Байнгын хороо" >Байнгын хороо</a>
                  </li>
                  <li>
                      <a href="m/mrgo_2.htm" title="Улсын Их Хурлын гишүүд" >Улсын Их Хурлын гишүүд</a>
                  </li>
                      </ul>
                  </div>
          </div>
      </div>
      <div class="container footer-wrapper">
          <div class="row">
              <div class="col-md-6">
                  <ul class="footer-ul">
          
      </ul>
              </div>
              <div class="col-md-6 ">
                  <div class="pull-right">
                      <ul class="stats">
          <li>Өнөөдөр: 1092</li>
          <li>Нийт: 20622123</li>
      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div class="container footer-contact">
    <div class="row">
        <div class="col-md-5">
            Улсын Их Хурлын Тамгын газар. Монгол Улс 14201 Улаанбаатар хот, Сүхбаатар дүүрэг, Жанжин Д.Сүхбаатарын талбай 1, Төрийн ордон.
        </div>
        <div class="col-md-2">
            Утас: +976-51-267016 <br />
            Факс: +976-11-327016 <br />
        </div>
        <div class="col-md-2">
            Цахим шуудан: secretariat@parliament.mn
        </div>
        <div class="col-md-3">
            <div class="pull-right">
                <ul>
                    <li><a target="_blank" href="http://www.facebook.com/pages/ParliamentMN/492661167424998"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a target="_blank" href="http://twitter.com/ParliamentMN"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a target="_blank" href="https://www.youtube.com/channel/UC3wPUKge3YS0xFgRYFnIvrQ/videos"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/parliamentofmongolia/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-center">
            <div class="copyright">Монгол Улсын Их Хурлын Тамгын газар &copy; 2019.</div>
        </div>
    </div>
</div>
    </div>   
  )
}



export default connect(mapStateToProps)(App);
