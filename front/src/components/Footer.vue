<template>
  <v-footer dark padless>
    <v-card flat tile class="text-center" id="footer">
      <v-card-text>
        <v-btn
          v-for="e in icons"
          :key="e"
          class="mx-4 white--text"
          icon
          :href="e.url"
        >
          <v-icon size="24px">
            {{ e.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <b>Disclaimer: </b>The information contained in this website is for
        general information purposes only. The information is provided by
        [Website Name], a property of [Business Name]. While we endeavour to
        keep the information up to date and correct, we make no representations
        or warranties of any kind, express or implied, about the completeness,
        accuracy, reliability, suitability or availability with respect to the
        website or the information, products, services, or related graphics
        contained on the website for any purpose. Any reliance you place on such
        information is therefore strictly at your own risk.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Murdoc98</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "cFooter",
  components: {},
  data: () => ({
    icons: [
      { icon: "mdi-github", url: "https://github.com/murdoc98" },
      {
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/oscar-martinez-vazquez-889401130/",
      },
    ],
  }),
};
</script>
<style>
.v-footer {
  flex: none;
  padding: 0;
}
#footer {
  background: #730000 !important;
  color: white;
  border-radius: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
#footer .v-btn {
  color: white;
  background: #a80000;
}
</style>
