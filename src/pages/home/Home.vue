<template>
  <div id="home">
    <!-- title -->
    <van-nav-bar title="即刻Music"/>
    <!-- banner -->
    <banner :banners="banners"></banner>
    <!-- 选项 -->
    <music-clasfly></music-clasfly>
    <!-- 最新专辑 -->
    <new-album :albums="albums"></new-album>
  </div>
</template>
<script>
import { NavBar } from 'vant'
import Banner from './components/Banner'
import MusicClasfly from './components/MusicClasfly'
import NewAlbum from './components/NewAlbum'

export default {
  name: 'Home',
  components: {
    Banner,
    NavBar,
    MusicClasfly,
    NewAlbum
  },
  data () {
    return {
      banners: [],
      albums: []
    }
  },
  methods: {
    // 获取banner
    getBanner () {
      this.$axios.get('/api/banner?type=1')
        .then(this.getBannerSucc)
    },
    getBannerSucc (res) {
      // console.log(res)
      if (res.data.code === 200) {
        this.banners = res.data.banners
      }
    },
    // 获取最新专辑
    getAlbum () {
      this.$axios.get('/api/album/newest')
        .then(this.getAlbumSucc)
    },
    getAlbumSucc (res) {
      if (res.data.code === 200) {
        this.albums = res.data.albums
      }
    }
  },
  mounted () {
    this.getBanner()
    this.getAlbum()
  }
}
</script>
<style lang="css" scope="this api replaced by slot-scope in 2.5.0+">
#home{
  background: #f8f8f8;
}
.home-banner img{
  width:100%;
  height: 3.5rem;
}
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
.new-album{
  margin-top: .4rem;
  background: #fff;
}
.new-album-title{
  display: flex;
  width: 92%;
  font-size: .35rem;
  padding: .4rem 0;
  margin: 0 auto;
  justify-content: space-between;
}
</style>
