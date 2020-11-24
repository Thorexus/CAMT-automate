<template>
  <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <nuxt-link to="/"><Logo :style="{ margin: '15px 0', height: '8%', width: '100%' }" /></nuxt-link>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="calendar" />
          <span class="nav-text"><nuxt-link to="/sunday">Sunday</nuxt-link></span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="calendar" />
          <span class="nav-text"><nuxt-link to="/monday">Monday</nuxt-link></span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="calendar" />
          <span class="nav-text"><nuxt-link to="/tuesday">Tuesday</nuxt-link></span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="calendar" />
          <span class="nav-text"><nuxt-link to="/wednesday">Wednesday</nuxt-link></span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="calendar" />
          <span class="nav-text"><nuxt-link to="/thursday">Thursday</nuxt-link></span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="calendar" />
          <span class="nav-text"><nuxt-link to="/friday">Friday</nuxt-link></span>
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="calendar" />
          <span class="nav-text"><nuxt-link to="/saturday">Saturday</nuxt-link></span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>

<script>
import Logo from './Logo.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    Logo
  }
}
</script>

<style>
.ant-menu-item a{
  color: rgba(255, 255, 255, 0.65);
}
</style>