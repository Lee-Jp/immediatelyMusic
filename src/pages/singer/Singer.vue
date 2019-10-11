<template>
  <div id="singer">
    <!-- tabbar -->
    <van-nav-bar
      title="热门歌手"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <singer-list :singerList="singerList"></singer-list>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant'
import SingerList from './components/SingerList'
export default {
  name: 'singer',
  components: {
    Tab,
    Tabs,
    SingerList
  },
  data () {
    return {
      singerList: []
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
    // 获取热门歌手
    getSingerList () {
      this.$axios.get('/api/top/artists?offset=0&limit=30')
        .then(this.getSingerListSucc)
    },
    getSingerListSucc (res) {
      console.log(res)
      if (res.data.code === 200) {
        this.singerList = res.data.artists
      }
    }
  },
  mounted () {
    this.getSingerList()
  }
}
</script>
<style lang="css" scope>

</style>
