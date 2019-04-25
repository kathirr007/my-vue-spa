<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue SPA</span>
        <span class="font-weight-light text-capitalize subheading"> Using Vue &amp; vuetify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <CourseContens />
    </v-content>
  </v-app>
</template>

<script>
import CourseContens from './components/CourseContens';
// import treeResult from '../src/assets/result.json'
import axios from 'axios'
// import tree from '../test.js';


/* const dree = require('dree');
const tree = dree.scan('.', {exclude: /node_modules|\.git/, sizeInBytes: false});
console.log(tree); */

export default {
  name: 'App',
  components: {
    CourseContens,

  },
  data () {
    return {
      fileTree: null
    }
  },
  mounted () {
    axios
      .get('./result.json')
      .then(res => {
          console.log(res)
          this.fileTree = res.data.children[1]
        })
    }
}
</script>
