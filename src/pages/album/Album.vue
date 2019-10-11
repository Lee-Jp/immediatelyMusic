<template>
  <div id="album">
    <!-- tabbar -->
    <van-nav-bar
      title="专辑"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 专辑大图 -->
    <div class="album-wrap">
      <img class="album-img" :src="albumPage.picUrl" alt="">
      <p  class="album-title">{{albumPage.name}}</p>
    </div>
    <!-- 音乐列表 -->
    <music-list class="mc" :albumSong="albumSong"></music-list>

  </div>

</template>
<script>
import { NavBar } from 'vant'
import MusicList from '../components/MusicList'
export default {
  name: 'Album',
  components: {
    NavBar,
    MusicList
  },
  data () {
    return {
      albumPage: [],
      albumSong: []
    }
  },
  methods: {
    onClickLeft () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    getAlbumMusic () {
      this.$axios.get('/api/album?id=' + this.$route.params.albumId)
        .then(this.getAlbumMusicSucc)
    },
    getAlbumMusicSucc (res) {
      if (res.data.code === 200) {
        this.albumPage = res.data.album
        this.albumSong = res.data.songs
      }
    }
  },
  mounted () {
    this.getAlbumMusic()
  }
}
</script>
<style lang="css" scope="this api replaced by slot-scope in 2.5.0+">
.album-img{
  width: 100%;
  height: 6rem;
}
.album-title{
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
