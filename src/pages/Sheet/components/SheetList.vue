<template>
  <div id="sheet-list" ref="wrapper">
    <van-grid :column-num="3" :border="false"  align="center">
      <van-grid-item
      class="sheet-list-cont"
      v-for="(item, index) in musicList"
      :key="index"
      @click.native="goSheetCont(item.id)">
        <img :src="item.coverImgUrl" alt="" class="sheet-list-img">
        <p class="sheet-list-title">{{item.name}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import {Grid, GridItem} from 'vant'
export default {
  name: 'SheetList',
  components: {
    Grid,
    GridItem
  },
  props: {
    musicList: Array
  },
  methods: {
    goSheetCont (sheetId) {
      console.log(sheetId)
      this.$router.push({
        name: 'SheetCont',
        params: {
          sheetId
        }
      })
    }
  },
  mounted () {
  }
}
</script>
<style lang="css" scope="this api replaced by slot-scope in 2.5.0+">
.sheet-list-img{
  display: block;
  width: 100%;
  margin: 0 auto;
  border-radius: .2rem;
}
.sheet-list-title{
  width: 100%;
  margin-top: .2rem;
  font-size: .3rem;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
