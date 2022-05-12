<template>
  <div style="height: 45px; width: calc(100vw - 320px); display: flex; justify-content: space-around; align-items: center;  border-bottom: 1px solid #f0f0f0" >
    <div>
      <a style="" href="">lingfly's blog</a>
    </div>
    <div style="">
      <a-menu v-model:selectedKeys="current" mode="horizontal">
        <a-menu-item key="blog">
          博客
        </a-menu-item>
        <a-menu-item key="japanese">
          日语
        </a-menu-item>
        <a-menu-item key="literature">
          文史
        </a-menu-item>
      </a-menu>
    </div>
    <div >
      <a-input-search style=""
          v-model:value="searchKey"
          placeholder="input search loading with enterButton"
          enter-button
      />
    </div>
  </div>


</template>

<script>
import {ref} from 'vue'
export default {


  setup() {
    const searchKey = ref('');
    const current = ref(['blog']);
    return {
      current,
      searchKey,
    }
  }
}

</script>
