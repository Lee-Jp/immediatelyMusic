<template>
  <div id="clasfly">
    <!-- 选项 -->
    <van-row class="music-clasfly">
      <van-col span="8" @click.native="toSheet" class="music-clasfly-cont">
        <p class="iconfont music-clasfly-icon">&#xe61a;</p>
        <p class="music-clasfly-title">歌单</p>
      </van-col>
      <van-col span="8" @click.native="toSheet" class="music-clasfly-cont">
        <p class="iconfont music-clasfly-icon">&#xe610;</p>
        <p class="music-clasfly-title">排行榜</p>
      </van-col>
      <van-col span="8" @click.native="toSinger" class="music-clasfly-cont">
        <p class="iconfont music-clasfly-icon">&#xe65e;</p>
        <p class="music-clasfly-title">歌手</p>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { Row, Col } from 'vant'

export default {
  name: 'MusicClasfly',
  components: {
    Row,
    Col
  },
  data () {
    return {
    }
  },
  methods: {
    toSheet () {
      this.$router.push({
        name: 'Sheet'
      })
    },
    toSinger () {
      this.$router.push({
        name: 'Singer'
      })
    }
  }
}
</script>
<style lang="css" scope="this api replaced by slot-scope in 2.5.0+">
.music-clasfly{
  background-color: #fff;
  padding: .5rem 0;
}
.music-clasfly-cont{
  text-align: center;
  font-weight: 600;
}
.music-clasfly-icon{
  font-size: .6rem;
}
.music-clasfly-title{
  margin-top:.28rem;
  font-size: .3rem;
}
</style>
