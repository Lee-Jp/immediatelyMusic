<template>
  <div id="sheet">
    <!-- tabbar -->
    <van-nav-bar
      title="歌单广场"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="sheet-tabbar"
    />
    <van-tabs v-model="chooseIndex" swipeable>
      <van-tab v-for="(item, index) in sheetMenu"
      :key="index"
      :title="item.name"
      class="sheet-menu">
        <sheet-list :musicList="musicList"></sheet-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant'
import SheetList from './components/SheetList'
export default {
  name: 'Sheet',
  components: {
    Tab,
    Tabs,
    SheetList
  },
  data () {
    return {
      sheetMenu: [],
      chooseIndex: 0,
      musicList: []
    }
  },
  props: {

  },
  watch: {
    // 如果 `chooseIndex` 发生改变，这个函数就会运行
    chooseIndex: function (newChoose, oldChoose) {
      this.tag = this.sheetMenu[newChoose].name
      this.getSheetMusic()
    }
  },
  methods: {
    onClickLeft () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    // 获取歌单菜单
    getSheetMenu () {
      this.$axios.get('/api/playlist/hot')
        .then(this.getSheetMenuSucc)
    },
    getSheetMenuSucc (res) {
      if (res.data.code === 200) {
        this.sheetMenu = res.data.tags
      }
    },
    // 获取菜单对应歌单
    getSheetMusic () {
      if (this.tag) {
        this.$axios.get('/api/top/playlist?limit=18&order=hot&cat=' + this.tag)
          .then(this.getSheetMusicSucc)
      } else {
        this.$axios.get('/api/top/playlist?limit=18&order=hot&cat=华语')
          .then(this.getSheetMusicSucc)
      }
    },
    getSheetMusicSucc (res) {
      console.log(res.data)
      if (res.data.code === 200) {
        this.musicList = res.data.playlists
      }
    }
  },
  mounted () {
    this.getSheetMenu()
    this.getSheetMusic()
  }
}
</script>
<style lang="css" scope="this api replaced by slot-scope in 2.5.0+">
.sheet-tabbar{
  /* position: fixed;
  top: 0;
  z-index: 88; */
}
.sheet-menu{
  /* position: fixed;
  top: 2rem; */
  z-index: 10;
}
</style>
