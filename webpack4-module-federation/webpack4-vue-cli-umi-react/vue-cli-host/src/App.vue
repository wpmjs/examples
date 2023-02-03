<template>
  <div>
    <div style="width: 100%; padding: 20px; background: #aaa">
      vue-cli-host
    </div>
    <UmiApp />
    <VueCliRemote />
  </div>
</template>

<script>
import UmiApp from 'umi/App'
import {applyReactInVue} from "vuereact-combined"
import VueCliRemote from "vueCliRemote/App"

export default {
  name: 'App',
  components: {
    UmiApp: applyReactInVue(UmiApp),
    VueCliRemote
    // Button,
  }
}
</script>

<style>
</style>
