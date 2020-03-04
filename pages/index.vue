<template>
  <div class="container">
    <div>
      <h1 class="title">
        Hello.
      </h1>
      <p class="subtitle">
        My name is Alexander Hung
      </p>
      <p>
        I am an independent software developer, I've worked as an AQA in the past, but right now I am learning web and app development.
      </p>
      <p>
        My main goal from this website, is to create a blog to share my projects. Right now I am working on an AQA Testing Environment using Java and this website using Vue.js and Nuxt.js. I will add my github account ASAP I get to a stable version of the environment.
      </p> 
      <p>
        Outside of programming and university. I enjoy playing indie games, learning languages and drawing.
      </p>
      <p>
        If you happen to speak Spanish, Deutsch (Entry level) or 中文, you can get in contact by writing to hung9762@gmail.com
      </p>
    </div>
  </div>
</template>

<script>
//import Logo from '~/components/Logo.vue'

export default {
  data () {
    return {
      title: 'Alexander Hung'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description'}
      ]
    }
  },
  components: {
    //Logo
  }
}
</script>

<style>
.container {
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: calc(10px + 0.33vw);
  -webkit-font-smoothing: antialiased;
  padding: 5vh 10vw;
  color: #121314;
}

.title {
  font-size: 4.5em;
  font-weight: 450;
  margin-bottom: 0;
}

.subtitle {
  font-weight:300;
  font-size:2.5em
}

p {
  font-size: 1.6em;
  font-weight: 250;
  line-height: 1.4;
  max-width: 26em;
}

.links {
  padding-top: 15px;
}
</style>
