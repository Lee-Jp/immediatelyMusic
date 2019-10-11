<template>
  <div id="album">
    <!-- 最新专辑 -->
    <div class="new-album">
      <div class="new-album-title">
        <p>最新专辑</p>
        <p>最新专辑</p>
      </div>
      <van-row class="ablum">
        <van-col span="8" class="ablum-cont"
        v-for="(item, index) in albums"
        :key="index"
        @click.native="toAlbum(item.id)">
          <img :src="item.picUrl" alt="" class="ablum-img">
          <p class="ablum-title">{{item.name}}</p>
        </van-col>
      </van-row>

    </div>
  </div>
</template>
<script>
import { Row, Col } from 'vant'

export default {
  name: 'NewAlbum',
  components: {
    Row,
    Col
  },
  props: {
    albums: Array
  },
  data () {
    return {
    }
  },
  methods: {
    toAlbum (albumId) {
      this.$router.push({
        name: 'Album',
        params: {
          albumId
        }
      })
    }
  }
}
</script>
<style lang="css" scope="this api replaced by slot-scope in 2.5.0+">
.new-album{
  margin-top: .4rem;
  background: #fff;
}
.new-album-title{
  display: flex;
  width: 92%;
  font-size: .35rem;
  padding: .4rem 0 .2rem;
  margin: 0 auto;
  justify-content: space-between;
}
.ablum{
  margin: 0 auto;
}
.ablum-cont{
  margin-top: .2rem;
}
.ablum-img{
  display: block;
  width: 90%;
  margin: 0 auto;
  border-radius: .2rem;
}
.ablum-title{
  width: 90%;
  margin: .2rem auto;
  font-size: .3rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
