<template>
  <div style="display: flex; flex-flow: column wrap; width: calc(100vw - 320px); margin: 0 auto 0 auto;">
    <div style="display: flex; flex-flow: row wrap; justify-content: flex-start; align-items: center;height: 90px; padding: 20px;
                border: 1px dashed #f0f0f0;margin: 10px 0 10px 0">
      <div style="margin-right: 10px;">
        <a-switch style="" v-model:checked="checked" checked-children="时间线" un-checked-children="卡片" />
      </div>
      <div>
        <p style="margin: 0">共{{post_num}}篇文章</p>
      </div>
    </div>

  </div>

</template>

<script>
import BlogHome from "@/components/blog/BlogHome";
import BlogAside from "@/components/blog/BlogAside";
import {ref} from "vue";


export default {
  name: "Archive",
  components: { BlogAside},
  setup() {
    const checked = ref(true);
    const post_num = ref(0);
    return {
      checked,
      post_num,
    }
  }
}
</script>

<style scoped>

</style>