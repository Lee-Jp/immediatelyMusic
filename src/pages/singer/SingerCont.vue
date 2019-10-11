<template>
  <div id="singer">
    <!-- tabbar -->
    <van-nav-bar
      title="热门歌手"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 歌手大图 -->
    <div class="singer-cont-wrap">
      <img class="singer-cont-img" :src="singerPage.picUrl" alt="">
      <p  class="singer-cont-title">{{singerPage.name}}</p>
    </div>
    <music-list :albumSong="singerSong"></music-list>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant'
import MusicList from '../components/MusicList'
export default {
  name: 'SingerCont',
  components: {
    Tab,
    Tabs,
    MusicList
  },
  data () {
    return {
      singerPage: [],
      singerSong: []
    }
  },
  props: {

  },
  watch: {

  },
  methods: {
    onClickLeft () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    // 获取歌手信息和歌曲
    getSingerContList () {
      this.$axios.get('/api/artists?id=' + this.$route.params.singerId)
        .then(this.getSingerContListSucc)
    },
    getSingerContListSucc (res) {
      console.log(res)
      if (res.data.code === 200) {
        this.singerPage = res.data.artist
        this.singerSong = res.data.hotSongs
      }
    }
  },
  mounted () {
    this.getSingerContList()
    console.log(this.singerPage)
  }
}
</script>
<style lang="css" scope>

.singer-cont-img{
  width: 100%;
  height: 6.2rem;
}
.singer-cont-title{
  font-size: .4rem;
  position:absolute;
  top: 4rem;
  box-sizing: border-box;
  padding-left: .4rem;
  padding-bottom: .5rem;
  z-index: 2;
  width: 100%;
  padding-top: 2.1rem;
  color: #fff;
  background: #000;
  background: -webkit-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8));
}
</style>
