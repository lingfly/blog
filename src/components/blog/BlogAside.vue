<template>
  <div style="display: flex; flex-flow: column wrap; position:fixed; height: calc(100vh - 45px); border: solid 1px #f0f0f0 ;">
    <div style="margin-top: 10px;"></div>
    <div>
      <a-menu v-model:selectedKeys="selectedKeys"
              v-model:inlineCollapsed="collapsed"
              theme="light" mode="inline">
        <a-menu-item key="1" v-on:click="toHome">
          <HomeOutlined />
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="2" v-on:click="toArchive">
          <ContainerOutlined />
          <span>归档</span>
        </a-menu-item>
        <a-menu-item key="3">
          <TagOutlined />
          <span>标签</span>
        </a-menu-item>
        <a-menu-item key="4">
          <CommentOutlined />
          <span>评论区</span>
        </a-menu-item>
        <a-menu-item key="5">
          <LinkOutlined />
          <span>优秀博客订阅</span>
        </a-menu-item>
      </a-menu>

    </div>
    <div style="flex: 1 1 auto">

    </div>
    <div style="align-items: flex-end; ">
      <a-button  style="width: 100%;" @click="toggleCollapsed">
        <RightOutlined v-if="collapsed" />
        <LeftOutlined v-else />
      </a-button>
    </div>
  </div>
</template>

<script>
import { HomeOutlined,ContainerOutlined,TagOutlined,CommentOutlined,LinkOutlined, RightOutlined,LeftOutlined} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import router from "@/router";
export default  {
  name: "BlogAside",
  components: {
    HomeOutlined,
    ContainerOutlined,
    TagOutlined,
    CommentOutlined,
    LinkOutlined,
    RightOutlined,
    LeftOutlined,
  },

  data() {
    return {
      collapsed: ref(true),
      selectedKeys: ref(['1']),
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    toHome() {
      router.push('/blog/home');
    },
    toArchive() {
      router.push('/blog/archive');
    }
  }

}
</script>

<style scoped>

</style>