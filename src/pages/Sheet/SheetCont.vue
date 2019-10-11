<template>
  <div id="sheet">
    <!-- tabbar -->
    <van-nav-bar
      title="歌单广场"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 歌单 -->
    <div class="sheet-wrap">
      <img class="sheet-img" :src="sheetPage.coverImgUrl" alt="">
      <p  class="sheet-title">{{sheetPage.name}}</p>
    </div>
    <!-- 音乐列表 -->
    <music-list class="mc" :albumSong="sheetSong"></music-list>

  </div>

</template>
<script>
import { NavBar } from 'vant'
import MusicList from '../components/MusicList'
export default {
  name: 'sheet',
  components: {
    NavBar,
    MusicList
  },
  data () {
    return {
      sheetPage: [],
      sheetSong: []
    }
  },
  methods: {
    onClickLeft () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    getsheetMusic () {
      this.$axios.get('/api/playlist/detail?id=' + this.$route.params.sheetId)
        .then(this.getsheetMusicSucc)
    },
    getsheetMusicSucc (res) {
      console.log(res.data)
      if (res.data.code === 200) {
        this.sheetPage = res.data.playlist
        this.sheetSong = res.data.playlist.tracks
      }
    }
  },
  mounted () {
    this.getsheetMusic()
  }
}
</script>
<style lang="css" scope="this api replaced by slot-scope in 2.5.0+">

.sheet-wrap{
  position: relative;
}
.sheet-img{
  width: 100%;
  position:absolute;
  height: 7rem;
}
.sheet-title{
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
.mc{
  margin-top: 7.5rem;
}
</style>
