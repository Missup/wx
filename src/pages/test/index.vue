<template>
  <div>
    12312313
    <p>12313132</p>
  </div>
</template>

<script>
import {get} from '@/utils/index.js'
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    async getData () {
      // const lists = await get('http://t.yushu.im/v2/movie/top250')
      const lists = await get('http://snd.ideatob.com/mp/api/?apikey=snd_apis&at=1&page=1&pagesize=10')
      console.log('lists', lists)
    }
  },
  created () {
  },
  mounted () {
    this.getData()
  }
}
</script>

<style>
</style>
