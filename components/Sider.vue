<template>
  <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
    <nuxt-link to="/"><Logo :style="{ margin: '15px 0', height: '8%', width: '100%' }"/></nuxt-link>
    <a-menu theme="dark" mode="inline">
      <a-menu-item key="1">
        <nuxt-link to="/sunday"><a-icon type="calendar" />Sunday</nuxt-link>
      </a-menu-item>
      <a-menu-item key="2">
        <nuxt-link to="/monday"><a-icon type="calendar" />Monday</nuxt-link>
      </a-menu-item>
      <a-menu-item key="3">
        <nuxt-link to="/tuesday"><a-icon type="calendar" />Tuesday</nuxt-link>
      </a-menu-item>
      <a-menu-item key="4">
        <nuxt-link to="/wednesday"><a-icon type="calendar" />Wednesday</nuxt-link>
      </a-menu-item>
      <a-menu-item key="5">
        <nuxt-link to="/thursday"><a-icon type="calendar" />Thursday</nuxt-link>
      </a-menu-item>
      <a-menu-item key="6">
        <nuxt-link to="/friday"><a-icon type="calendar" />Friday</nuxt-link>
      </a-menu-item>
      <a-menu-item key="7">
        <nuxt-link to="/saturday"> <a-icon type="calendar" />Saturday</nuxt-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import Logo from './Logo.vue'

export default {
  data() {
    return {}
  },
  components: {
    Logo,
  },
}
</script>

<style>
.ant-menu-item a {
  color: rgba(255, 255, 255, 0.65);
}
</style>
