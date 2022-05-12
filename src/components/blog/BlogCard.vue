<template>
  <div style="border: 1px black solid">
    <div v-if="hasHeadImage">
      <img
          style="width: 100%; height: 300px;"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </div>
    <div style="padding: 20px">
      <h2>标题: {{ title }}</h2>
      <p>摘要</p>
    </div>
    <div style="display: flex;padding: 0 20px 0 20px; margin-bottom: 10px;">
      <div style="margin-right: 10px;">
        <eye-outlined style="margin-right: 5px;" />
        <span >{{this.view}}</span>
      </div>
      <div style="margin-right: 10px;">
        <calendar-outlined style="margin-right: 5px;"/>
        <span>{{getPublicTime}}</span>
      </div>
      <div style="margin-right: 10px;">
        <file-text-outlined style="margin-right: 5px;"/>
        <span>{{this.length}}</span>
      </div>

    </div>
    <div style="padding: 0 20px 0 20px; margin-bottom: 10px;">
      <div style="margin-right: 10px;">
        <tag-outlined style="margin-right: 5px;"/>
        <a-tag color="#55acee">
          <template #icon>
            <TwitterOutlined />
          </template>
          Twitter
        </a-tag>
        {{this.tag}}
      </div>
    </div>


  </div>
</template>

<script>
import Moment from 'moment';
import {EyeOutlined, CalendarOutlined, FileTextOutlined,TagOutlined,TwitterOutlined} from '@ant-design/icons-vue';
export default {
  name: "BlogCard",
  components: {
    EyeOutlined,
    CalendarOutlined,
    FileTextOutlined,
    TagOutlined,
    TwitterOutlined,
  },
  props: {
    url: String,
    head_image: String,
    edit_time: Number,
    public_time: Number,
    title: String,
    view: Number,
    tag: Array,
    length: Number,
    abstract: String,
  },
  computed: {
    hasHeadImage() {
      return this.head_image.length > 0;
      // return false;
    },
    getPublicTime() {
      return Moment(this.public_time).format('YYYY-MM-DD HH:mm:ss');
    }
  }
}
</script>

<style scoped>

</style>