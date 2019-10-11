<template>
  <div id="musiclist">
    <van-row class="top-title border-bottom">
      <van-col span="3" class="top-title-icon">播放</van-col>
      <van-col span="18" class="top-title-cont">播放全部</van-col>
    </van-row>
    <van-row
    class="musiclist border-bottom"
    v-for="(songAll,key) of albumSong"
    :key="key"
    @click.native="playMusic(songAll.id,albumSong)">
        <van-col span="3" class="list-num">{{key+1}}</van-col>
        <van-col span="18" class="list-cont">
          <p>{{songAll.name}}</p>
          <p><van-tag plain type="danger">独家</van-tag> {{songAll.ar[0].name}}</p>
        </van-col>
        <van-col span="3" class="list-more">···</van-col>
    </van-row>
  </div>
</template>
<script>
import { Row, Col, Tag } from 'vant'
export default {
  name: 'MusicList',
  components: {
    Row,
    Col,
    Tag
  },
  props: {
    albumSong: Array
  },
  methods: {
    playMusic (musicId, songAll) {
      this.$router.push({
        name: 'MusicPlay',
        params: {
          musicId,
          songAll
        }
      })
    }
  },
  mounted () {
    // console.log(this.albumSong)
  }
  // mounted() {
  //         this.$nextTick(() => {
  //             this.scroll = new Bscroll(this.$refs.wrapper, {})
  //         })
  //     }
}
</script>
<style lang="css" scope="this api replaced by slot-scope in 2.5.0+">

#musiclist{
  margin-top: .6rem;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  /* background-color: aqua; */
}
.musiclist{
  border-bottom: 1px solid #ccc;
  margin-top: .3rem;
}
.top-title-icon{
  line-height: .5rem;
  color: #999;
  text-align: center;
  font-size: .3rem;
}
.top-title-cont{
  /* background-color:blueviolet; */
  margin-bottom: .2rem;
  height: .5rem;
  font-size: .3rem;
  line-height: .5rem;
}
.list-num{
  line-height: 1rem;
  /* background-color: aqua; */
  color: #999;
  text-align: center;
  font-size: .3rem;
}
.list-cont{
  /* background-color:blueviolet; */
  height: 1rem;
  font-size: .3rem;
  line-height: .5rem;
}
.list-cont p:nth-of-type(1){
  font-weight: 600;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.list-cont p:nth-of-type(2){
  font-size: .22rem;
  color: #999;
}
.list-more{
  padding: .25rem 0;
  /* background-color: rgb(20, 247, 31); */
  color: #999;
  text-align: center;
}
</style>
