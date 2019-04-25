<template>
  <v-container fluid>
    <v-layout row wrap fill-height>
      <v-flex xs12 sm6 md4 v-for="(post) in posts" :key="post.id" class="pa-2">
        <v-card height="100%" class="colCard">
          <v-card-title class="pb-0">
            <h3>
              {{ post.title }}
            </h3>
          </v-card-title>
          <v-card-text class="grow">
            {{ post.content }}
          </v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions class="">
            <a :href="post.link" class="v-btn flat ma-2">Read more</a>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
              posts: [
          { id: 1, title: 'PWA Stats', content: 'A community-driven list of stats and news related to Progressive Web Apps', link: 'https://www.pwastats.com/' },
          { id: 2, title: 'A Comprehensive Guide To HTTP/2 Server Push', content: 'No longer is HTTP/2 a feature we pine for. It has arrived, and with it comes server push!', link: 'https://www.smashingmagazine.com/2017/04/guide-http2-server-push/' },
          { id: 3, title: 'So what’s this GraphQL thing I keep hearing about?', content: 'Why now is the perfect time to learn what exactly this GraphQL thing you keep hearing about really is.', link: 'https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf' },
          { id: 4, title: 'State of The Mobile Gap Between Native and Web', content: 'Clearly PhoneGap, and Cordova are still required today in the mobile world, but when is it really needed? Did the web ever catch up?', link: 'https://remysharp.com/2016/05/28/state-of-the-gap' },
          { id: 5, title: 'Learning JavaScript Design Patterns', content: 'Design patterns are reusable solutions to commonly occurring problems in software designDesign patterns are reusable solutions to commonly occurring problems in software designDesign patterns are reusable solutions to commonly occurring problems in software design.', link: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/' },
          { id: 6, title: 'The Power of Custom Directives in Vue', content: 'The beautiful thing about Vue is that it\'s incredibly feature-rich.', link: 'https://css-tricks.com/power-custom-directives-vue/' }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .colCard{
    display: flex;
    flex-direction: column;
  }
</style>
