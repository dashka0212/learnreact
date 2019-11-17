import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
class NewsSingle extends React.Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <Header />
                <div class="col-lg-9 col-md-9">
            <div id="content-detail" class="content-detail">
                <div id="qeyu3q" data-refresh="/n/r9ky">
                    


<h3>Галуут сумын иргэд Улсын Их Хурлын дарга Г.Занданшатарт хандлаа</h3>
<div>
    <div class="pull-left">
        <span><i class="icon ion-ios-clock-outline"></i>&nbsp; 2019-11-01 18:36</span><span><i class="icon ion-ios-eye-outline"></i>&nbsp; 164</span>
    </div>
    <div class="pull-right">
        <ul>
            <li>
                <div class="fb-share-button fb_reset" data-href="/n/r9ky" data-layout="button_count"></div>
            </li>
            <li>
                <a class="twitter-share-button" href="https://twitter.com/share?via=ParliamentMN" data-url="/n/r9ky" data-text="Галуут сумын иргэд Улсын Их Хурлын дарга Г.Занданшатарт хандлаа">Tweet</a>
                
            </li>
        </ul>
    </div>
</div>

<div class="space-1"></div>
<div class="text">
    















<p class="MsoNormal"><img src="http://www.parliament.mn/medias/9cc8deea-54ed-4e60-8127-795160d14953.JPG" />&nbsp;</p>
<p class="MsoNormal"><span>Баянхонгор аймгийн Галуут
сумын иргэд Улсын Их Хурлын дарга Г.Занданшатартай уулзаж, нутгийн малчдын мал
сүргээ өсгөдөг гол нутаг, аргаль, янгир, ирвэс зэрэг дархан цаазтай амьтдын идээшин
амьдардаг, эмийн болон ховор ургамал ургадаг газар уул уурхайн ашиглалтын үйл
ажиллагаанд өртөж, устаж үгүй болоход хүрээд байгаа талаар ярилаа.</span><br /></p>


</div>



<div class="content-part-list">
            <div>
            </div>
</div>

<div class="tag-list">
    <div class="pull-left">
    </div>
    <div class="clearfix"></div>
</div>

<hr />

<div>
    <div class="pull-left">
        <span><i class="icon ion-ios-clock"></i>&nbsp; 2019-11-01 18:32</span><span><i class="icon ion-ios-eye-outline"></i>&nbsp; 164</span>
    </div>
    <div class="pull-right">
        <ul>
            <li>
                <div class="fb-share-button fb_reset" data-href="/n/r9ky" data-layout="button_count"></div>
            </li>
            <li>
                <a class="twitter-share-button" href="https://twitter.com/share?via=ParliamentMN" data-url="/n/r9ky" data-text="Галуут сумын иргэд Улсын Их Хурлын дарга Г.Занданшатарт хандлаа">Tweet</a>
                
            </li>
        </ul>
    </div>
</div>
<div class="space10"></div>
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
    }
  }
export default connect(mapStateToProps)(NewsSingle)