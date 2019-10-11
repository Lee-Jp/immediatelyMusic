<template>
  <div id="banner">
    <!-- banner -->
    <van-swipe :autoplay="3000" class="home-banner">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :v-lazy="item.pic" :src="item.pic"/>
        <!-- <img src="image" alt=""> -->
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Lazyload } from 'vant'

export default {
  name: 'Banner',
  components: {
    Swipe,
    SwipeItem,
    Lazyload
  },
  props: {
    banners: Array
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="css" scope="this api replaced by slot-scope in 2.5.0+">
.home-banner img{
  width:100%;
  height: 3.5rem;
}
</style>
