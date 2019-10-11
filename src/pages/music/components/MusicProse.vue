<template>
  <div>
     <van-row class="musicProse">
      <van-col span="4">{{currentTime}}</van-col>
      <van-col span="16"><van-slider
          v-model="musicProse"
          active-color="#f44"
          bar-height="4px"
          @change="changeSlider"
          >
        </van-slider></van-col>
      <van-col span="4">{{duration}}</van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: 'MusicProse',
  props: ['duration', 'currentTime', 'musicProse'],
  methods: {
    changeSlider (musicCurrentTime) {
      this.$emit('changeSlider', musicCurrentTime)
    }
  }
}
</script>
<style lang="css" scope>
.musicProse{
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  line-height: .2rem;
  margin: 0 auto;
  font-size: .2rem;
  text-align: center;
}
</style>
