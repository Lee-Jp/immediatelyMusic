<template>
  <div id="music-play">
    <!-- tabbar -->
    <van-nav-bar
      class="tabbar"
      :title="musicInfo.name"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 歌手图片 -->
    <singer-avater
    ref="singerAvater"
    :avater="singerAvatar">
    </singer-avater>
    <!-- <ul id="lrclist" style="transform: translateY(80px);"> -->
      <!-- 保证歌词在正中间 -->
      <!-- <li>{{lyric}}</li> -->
    <!-- </ul> -->
    <!-- 进度条 -->
    <music-prose
      class="music-prose"
      :currentTime="currentTime"
      :duration="duration"
      :musicProse="musicProse"
      @changeSlider="changeSlider"
    ></music-prose>
    <!-- 隐藏的歌曲audio -->
    <div v-html="audioDom"></div>
    <!-- 控件 -->
    <van-grid :gutter="2" :column-num="5" :border="false" class="musicContro">
      <van-grid-item @click.native="startRound" class="iconfont" v-html="contro1"></van-grid-item>
      <van-grid-item @click.native="startRound" class="iconfont" v-html="contro2"></van-grid-item>
      <van-grid-item @click.native="playMusic" class="iconfont contro3" v-html="contro3"></van-grid-item>
      <van-grid-item @click.native="nextMusic" class="iconfont" v-html="contro4"></van-grid-item>
      <van-grid-item @click.native="startRound" class="iconfont" v-html="contro5"></van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import { Slider } from 'vant'
import singerAvater from './components/SingerAvater'
import musicProse from './components/MusicProse'
export default {
  name: 'MusicPlay',
  data () {
    return {
      musicInfo: {},
      singerAvatar: '',
      audioDom: '',
      lyric: '',
      musicList: [],
      thisMusicId: 0,
      musicProse: 0,
      imgCurrent: 0,
      contro1: '&#xe66c;',
      contro2: '&#xe6e1;',
      contro3: '&#xe628;',
      contro4: '&#xe718;',
      contro5: '&#xe634;',
      duration: '0:00',
      currentTime: '0:00'
    }
  },
  components: {
    Slider,
    singerAvater,
    musicProse
  },
  methods: {
    onClickLeft () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    setLyric () {
      // for (var value of this.lyric.split('\n')) {
      //   // console.log(value.substr(11,value.length-9))
      // }
    },
    // 控制播放进度
    changeSlider (musicCurrentTime) {
      // console.log('当前值：' + musicCurrentTime)
      var audio = document.querySelector('audio')
      this.musicProse = parseInt(
        (musicCurrentTime * parseInt(audio.duration)) / 100
      )
      audio.currentTime = (parseInt(audio.duration) * this.musicProse) / 100
    },
    setSlider () {
      // var audio = this.$refs.musicAudio
    },
    // 渲染audio
    setAudio () {
      var musicSrc =
        'https://music.163.com/song/media/outer/url?id=' +
        this.thisMusicId +
        '.mp3'
      this.audioDom = '<audio src="' + musicSrc + '" ref="musicAudio"></audio>'
    },
    // 播放暂停按钮
    playMusic () {
      this.controlRound()
      this.controMusicTime()
    },
    // 下一曲
    nextMusic () {
      if (this.musicList.indexOf(this.thisMusicId) + 1 <= this.musicList.length) {
        this.thisMusicId = this.musicList[this.musicList.indexOf(this.thisMusicId) + 1]
      } else {
        this.thisMusicId = this.musicList[0]
      }
      var audio = document.querySelector('audio')
      audio.currentTime = 0
      console.log(this.musicList.length)
      console.log(this.thisMusicId)
    },
    // 控制歌手照片转动
    controlRound () {
      var singerAvater = this.$refs.singerAvater.$el
      var imgInter = setInterval(_ => {
        if (this.contro3 === '&#xe628;') {
          clearInterval(imgInter)
        }
        this.imgCurrent = (this.imgCurrent + 1) % 360
        singerAvater.style.transform = 'rotate(' + this.imgCurrent + 'deg)'
      }, 50)
    },
    // 显示音乐时长和播放时长
    controMusicTime () {
      var audio = document.querySelector('audio')
      // var audio = this.$refs.musicAudio
      this.duration =
        parseInt(parseInt(audio.duration) / 60) +
        ':' +
        (parseInt(audio.duration) % 60)
      if (this.contro3 === '&#xe628;') {
        audio.play()
        this.contro3 = '&#xe674;'
      } else {
        audio.pause()
        this.contro3 = '&#xe628;'
      }
      var imgInter = setInterval(_ => {
        if (this.contro3 === '&#xe628;') {
          clearInterval(imgInter)
        }
        this.musicProse = parseInt((audio.currentTime / audio.duration) * 100)
        if (audio.currentTime < 10) {
          this.currentTime = '0:0' + parseInt(audio.currentTime)
        } else if (audio.currentTime >= 10 && audio.currentTime < 60) {
          this.currentTime = '0:' + parseInt(audio.currentTime)
        } else if (audio.currentTime >= 60) {
          if (audio.currentTime % 60 < 10) {
            this.currentTime =
              parseInt(parseInt(audio.currentTime) / 60) +
              ':0' +
              parseInt(parseInt(audio.currentTime) % 60)
          } else {
            this.currentTime =
              parseInt(parseInt(audio.currentTime) / 60) +
              ':' +
              parseInt(audio.currentTime % 60)
          }
        }
      }, 1000)
    },
    // 获取当前播放列表歌曲信息
    getMusicList () {
      this.thisMusicId = this.$route.params.musicId
      var musicListObj = this.$route.params.songAll
      for (var index in musicListObj) {
        console.log(musicListObj[index].id)
        this.musicList.push(musicListObj[index].id)
      }
    },
    // 获取歌曲详细信息
    getMusicInfo () {
      this.$axios
        .get('/api/song/detail?ids=' + this.thisMusicId)
        .then(this.getMusicInfoSucc)
    },
    getMusicInfoSucc (res) {
      // console.log(res.data.songs[0].al.picUrl)
      if (res.data.code === 200) {
        this.musicInfo = res.data.songs[0]
        this.singerAvatar = res.data.songs[0].al.picUrl
      }
    },
    // 获取歌词
    getMusicLyric () {
      this.$axios
        .get('/api/lyric?id=' + this.thisMusicId)
        .then(this.getMusicLyricSucc)
    },
    getMusicLyricSucc (res) {
      console.log(res.data.lrc)
      if (res.data.code === 200) {
        this.lyric = res.data.lrc.lyric
        this.setLyric()
      }
    }
  },
  watch: {
    thisMusicId: function () {
      this.getMusicInfo()
      this.getMusicLyric()
      this.setAudio()
    }
  },
  mounted () {
    // console.log(this.$route.params.musicId)
    // console.log(this.$route.params.songAll)
    this.getMusicList()
  }
}
</script>
<style lang="css" scope>
.tabbar {
  /* position: fixed; */
  width: 100%;
  background-color: #fff;
}

.musicContro {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.musicContro .iconfont {
  text-align: center;
  line-height: 1rem;
  font-size: 0.4rem;
}
.musicContro .contro3 {
  font-size: 0.8rem;
}

#lrclist {
  width: 340px;
  height: 9rem;
  margin: 0 auto;
  overflow-y: hidden;
}
ul {
  transition-duration: 600ms;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
li.on {
  color: red;
}
p {
  overflow: hidden;
  text-overflow: ellipsis;
  height: 16px;
  line-height: 16px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;
}
</style>
