<template>
  <div class="navigatorContainer">
    <div class="item">
      <el-select
        v-model="lang"
        size="small"
        style="width: 100px"
        @change="onLangChange"
      >
        <el-option
          v-for="item in langList"
          :key="item.value"
          :label="item.name"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="item">
      <el-checkbox v-model="openMiniMap" @change="toggleMiniMap">{{
        $t('navigatorToolbar.openMiniMap')
      }}</el-checkbox>
    </div>
   
    <div class="item">
      <Scale :mindMap="mindMap"></Scale>
    </div>
    <div class="item">
      <Fullscreen :mindMap="mindMap"></Fullscreen>
    </div>
  </div>
</template>

<script>
import Scale from './Scale'
import Fullscreen from './Fullscreen'
import { langList } from '@/config'
import i18n from '@/i18n'
import { storeLang, getLang } from '@/api'

/**
 * @Author: 王林
 * @Date: 2021-06-24 22:53:10
 * @Desc: 导航器工具栏
 */
export default {
  name: 'NavigatorToolbar',
  components: {
    Scale,
    Fullscreen
  },
  props: {
    mindMap: {
      type: Object
    }
  },
  data() {
    return {
      langList,
      lang: getLang(),
      openMiniMap: true
    }
  },
  mounted() {
    this.toggleMiniMap(this.openMiniMap)
  },
  methods: {
    readonlyChange(value) {
      this.mindMap.setMode(value ? 'readonly' : 'edit')
    },

    toggleMiniMap(show) {
      this.$bus.$emit('toggle_mini_map', show)
    },

    onLangChange(lang) {
      i18n.locale = lang
      storeLang(lang)
    }
  }
}
</script>

<style lang="less" scoped>
.navigatorContainer {
  padding: 0 12px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: hsla(0, 0%, 100%, 0.8);
  border-radius: 5px;
  opacity: 0.8;
  height: 44px;
  font-size: 12px;
  display: flex;
  align-items: center;

  .item {
    margin-right: 20px;

    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
