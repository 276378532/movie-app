<template>
    <div class="movie__body">
        <ul>
            <li>
                <div class="pic_show"><img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span> 人想看</p>
                    <p>主演: 陈建斌,任素汐,潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span> 人想看</p>
                    <p>主演: 陈建斌,任素汐,潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span> 人想看</p>
                    <p>主演: 陈建斌,任素汐,潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span> 人想看</p>
                    <p>主演: 陈建斌,任素汐,潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span> 人想看</p>
                    <p>主演: 陈建斌,任素汐,潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span> 人想看</p>
                    <p>主演: 陈建斌,任素汐,潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p><span class="person">17746</span> 人想看</p>
                    <p>主演: 陈建斌,任素汐,潘斌龙</p>
                    <p>2018-11-30上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    name: 'ComingSoon'
}
</script>

<style>
#content .movie__body {
  flex: 1;
  overflow: auto;
}
.movie__body ul {
  margin: 0 12px;
  overflow: hidden;
  /* height: 100%; */
}
.movie__body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie__body .pic_show {
  width: 64px;
  height: 90px;
}
.movie__body .pic_show img {
  width: 100%;
}
.movie__body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie__body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie__body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie__body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie__body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie__body .btn_mall,
.movie__body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie__body .btn_pre{
    background-color: #3c9fe6;
}
</style>
