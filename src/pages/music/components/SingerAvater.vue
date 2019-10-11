<template>
  <div>
    <!-- 歌手图片 -->
    <van-image
      class="singerAvater"
      ref="singerAvater"
      round
      fit="fill"
      width="4rem"
      height="4rem"
      :src="avater"
    />
  </div>
</template>
<script>
export default {
  name: 'SingerAvater',
  props: ['avater']
}
</script>
<style lang="css" scope>
.singerAvater{
  display: block;
  margin: 1.5rem auto;
}
</style>
