<template>
  <Sidebar ref="sidebar" :title="$t('outline.title')">
    <el-tree
      class="outlineTree"
      :data="data"
      :props="defaultProps"
      :expand-on-click-node="false"
      default-expand-all
    >
      <span class="customNode" slot-scope="{ node, data }">
        <span
          v-html="node.label"
        ></span>
      </span>
    </el-tree>
  </Sidebar>
</template>

<script>
import Sidebar from './Sidebar'
import { mapState } from 'vuex'

/**
 * @Author: 王林
 * @Date: 2021-06-24 22:54:14
 * @Desc: 大纲内容
 */
export default {
  name: 'Outline',
  components: {
    Sidebar
  },
  props: {
    mindMap: {
      type: Object
    }
  },
  data() {
    return {
      data: [],
      defaultProps: {
        label(data) {
          return data.data.title.replaceAll(/\n/g, '</br>')
        }
      }
    }
  },
  computed: {
    ...mapState(['activeSidebar'])
  },
  watch: {
    activeSidebar(val) {
      if (val === 'outline') {
        this.$refs.sidebar.show = true
      } else {
        this.$refs.sidebar.show = false
      }
    }
  },
  created() {
    this.$bus.$on('data_change', data => {
      this.data = [this.mindMap.renderer.renderTree]
    })
  },
  methods: {
    onBlur(e, node) {
      node.data._node.setText(e.target.innerText)
    },

    getKey() {
      return Math.random()
    }
  }
}
</script>

<style lang="less" scoped>
.customNode {
  width: 100%;
  overflow-x: auto;
  font-size: 10pt;

  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    box-shadow: none;
    background: transparent;
    display: none;
  }

  .nodeEdit {
    outline: none;
  }
}

.outlineTree {
  /deep/ .el-tree-node__content {
    height: auto;
    margin: 5px 0;

    .el-tree-node__expand-icon.is-leaf {
      position: relative;

      &::after {
        position: absolute;
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #c0c4cc;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
