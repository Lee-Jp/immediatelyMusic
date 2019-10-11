import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Album from '@/pages/album/Album'
import Sheet from '@/pages/sheet/Sheet'
import SheetCont from '@/pages/sheet/SheetCont'
import Singer from '@/pages/singer/Singer'
import SingerCont from '@/pages/singer/SingerCont'
import MusicPlay from '@/pages/music/MusicPlay'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home/album',
      name: 'Album',
      component: Album
    },
    {
      path: '/sheet',
      name: 'Sheet',
      component: Sheet
    },
    {
      path: '/sheet/sheetCont',
      name: 'SheetCont',
      component: SheetCont
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/singer/singerCont',
      name: 'SingerCont',
      component: SingerCont
    },
    {
      path: '/music',
      name: 'MusicPlay',
      component: MusicPlay
    }
  ]
})
