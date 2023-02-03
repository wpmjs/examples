<template>
  <div>
    <UmiApp />
  </div>
</template>

<script>
import UmiApp from 'umi/App'
import {applyReactInVue} from "vuereact-combined"
import "react"

export default {
  name: 'App',
  components: {
    UmiApp: applyReactInVue(UmiApp),
  }
}
</script>

<style>
</style>
