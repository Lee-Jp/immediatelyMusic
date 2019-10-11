<template>
  <div id="singer-list">
    <!-- 热门歌手 -->
    <div class="new-singer-list">
      <van-row class="singer">
        <van-col span="8" class="singer-cont"
        v-for="(item, index) in singerList"
        :key="index"
        @click.native="toSingerList(item.id)">
          <img :src="item.picUrl" alt="" class="singer-img">
          <p class="singer-title">{{item.name}}</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import { Row, Col } from 'vant'

export default {
  name: 'SingerList',
  components: {
    Row,
    Col
  },
  props: {
    singerList: Array
  },
  data () {
    return {
    }
  },
  methods: {
    toSingerList (singerId) {
      this.$router.push({
        name: 'SingerCont',
        params: {
          singerId
        }
      })
    }
  }
}
</script>
<style lang="css" scope>
.new-singer-list{
  margin-top: .4rem;
  background: #fff;
}
.new-singer-list-title{
  display: flex;
  width: 92%;
  font-size: .35rem;
  padding: .4rem 0 .2rem;
  margin: 0 auto;
  justify-content: space-between;
}
.singer{
  margin: 0 auto;
}
.singer-cont{
  margin-top: .2rem;
}
.singer-img{
  display: block;
  width: 90%;
  margin: 0 auto;
  height: 2rem;
  border-radius: .2rem;
}
.singer-title{
  width: 90%;
  margin: .2rem auto;
  font-size: .3rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>
