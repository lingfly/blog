<template>
  <div style="display: flex; flex-flow: column wrap; width: calc(100vw - 320px); margin: 0 auto 0 auto; ">
    <div style="display: flex">
      <div style="width: calc(50% - 10px); margin-right: 20px;">
        <div  v-for="(post, index) in posts">
          <BlogCard v-if="index % 2 === 0" style="margin-bottom: 10px;"
                    :url="post.url"
                    :head_image="post.head_image"
                    :edit_time="post.edit_time"
                    :public_time="post.public_time"
                    :title="post.title"
                    :view="post.view"
                    :tag="post.tag"
                    :length="post.length"
          >
          </BlogCard>
        </div>

      </div>
      <div style="width: calc(50% - 10px); ">
        <div  v-for="(post, index) in posts">
          <BlogCard v-if="index % 2 === 1" style="margin-bottom: 10px;"
                    :url="post.url"
                    :head_image="post.head_image"
                    :edit_time="post.edit_time"
                    :public_time="post.public_time"
                    :title="post.title"
                    :view="post.view"
                    :tag="post.tag"
                    :length="post.length"
          >
          </BlogCard>
        </div>
      </div>

    </div>
    <div style="text-align: center; margin-top: 20px;">
      <a-button href="">查看更多</a-button>
    </div>

  </div>
</template>

<script>
import BlogCard from "@/components/blog/BlogCard";

export default {
  name: "BlogHome",
  components: {BlogCard},
  data() {
    return {
      posts: [
        {
          url: 'aa',
          head_image: 'aa',
          edit_time: 0,
          public_time: 0,
          title: 'aa',
          view: 100,
          tag: ['a',],
          length: 100,
          abstract: '',
        },
        {
          url: 'aa',
          head_image: 'aa',
          edit_time: 0,
          public_time: 0,
          title: 'aa',
          view: 0,
          tag: ['a','b'],
          length: 0,
          abstract: '',
        },
        {
          url: 'aa',
          head_image: '',
          edit_time: 0,
          public_time: 0,
          title: 'aa',
          view: 0,
          tag: [],
          length: 0,
          abstract: '',
        },
        {
          url: 'aa',
          head_image: 'aa',
          edit_time: 0,
          public_time: 0,
          title: 'aa',
          view: 100,
          tag: ['a',],
          length: 100,
          abstract: '',
        },
        {
          url: 'aa',
          head_image: 'aa',
          edit_time: 0,
          public_time: 0,
          title: 'aa',
          view: 0,
          tag: ['a','b'],
          length: 0,
          abstract: '',
        },
        {
          url: 'aa',
          head_image: '',
          edit_time: 0,
          public_time: 0,
          title: 'aa',
          view: 0,
          tag: [],
          length: 0,
          abstract: '',
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>