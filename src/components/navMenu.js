import React from 'react';


class NavMenu extends React.Component {
    render(){
        return(
            <div class="col-lg-2 col-md-2">
                
        <ul class="right-menu">
                <li class="active">
                    <a data-parent="#accordion" href="../c/he_2.htm" class="no-ajaxify"> Мэдээ мэдээлэл</a>
                        <ul class="in">
                                        <li class="">
                <a href="../c/4a_2.htm" class="no-ajaxify">Албан мэдээ</a>
            </li>
            <li class="">
                <a href="../c/jrno_2.htm" class="no-ajaxify">Улсын Их Хурлын дарга</a>
            </li>
            <li class="">
                <a href="../c/jeno_2.htm" class="no-ajaxify">Хуралдааны тойм</a>
            </li>
            <li class="">
                <a href="../c/jcno_2.htm" class="no-ajaxify">Байнгын хороо</a>
            </li>
            <li class="">
                <a href="../c/jono_2.htm" class="no-ajaxify">Улсын Их Хурлын гишүүд</a>
            </li>

                        </ul>
                </li>
                <li class="">
                    <a data-parent="#accordion" href="../c/jano_2.htm" class="no-ajaxify"> Видео мэдээ</a>
                        <ul class="collapse">
                                        <li class="">
                <a href="../c/ccno_2.htm" class="no-ajaxify">Улсын Их Хурал - Энэ долоо хоногт</a>
            </li>
            <li class="">
                <a href="../c/cono_2.htm" class="no-ajaxify">Улсын Их Хурлын гишүүнтэй ярилцах цаг</a>
            </li>

                        </ul>
                </li>
                <li class="">
                    <a data-parent="#accordion" href="../c/5r_2.htm" class="no-ajaxify"> Фото мэдээ</a>
                        <ul class="collapse">
                                        <li class="">
                <a href="../c/crno_2.htm" class="no-ajaxify">УИХ - Энэ долоо хоногт</a>
            </li>
            <li class="">
                <a href="../c/ceno_2.htm" class="no-ajaxify">Гэрэл зураг түүх өгүүлнэ</a>
            </li>

                        </ul>
                </li>
                <li class="">
                    <a data-parent="#accordion" href="../c/xwdo_2.htm" class="no-ajaxify"> Инфографик</a>
                </li>
                <li class="">
                    <a data-parent="#accordion" href="../c/mano_2.htm" class="no-ajaxify"> English news</a>
                </li>
        </ul>

            </div>
        )
    }
}

export default NavMenu;