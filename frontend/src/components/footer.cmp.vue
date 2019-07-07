<template>
  <section class="app-footer">
    <social-sharing
      url="https://fathomless-waters-69729.herokuapp.com/"
      title="Toy Shop World Wide"
      description="Intuitive, Fast and Composable Toys."
      quote="Choose your fav Toys."
      hashtags="Toys,Disney,kids"
      twitter-user="vuejs"
      inline-template
    >
      <div>
        <network style="margin-left: 30px; cursor: pointer;" network="email">
          <i class="fa fa-envelope"></i> Email
        </network>
        <network style="margin-left: 30px; cursor: pointer;" network="facebook">
          <i class="fa fa-facebook"></i> Facebook
        </network>
        <network style="margin-left: 30px; cursor: pointer;" network="googleplus">
          <i class="fa fa-google-plus"></i> Google +
        </network>
        <network style="margin-left: 30px; cursor: pointer;" network="skype">
          <i class="fa fa-skype"></i> Skype
        </network>
        <network style="margin-left: 30px; cursor: pointer;" network="sms">
          <i class="fa fa-commenting-o"></i> SMS
        </network>
        <network style="margin-left: 30px; cursor: pointer;" network="telegram">
          <i class="fa fa-telegram"></i> Telegram
        </network>
        <network style="margin-left: 30px; cursor: pointer;" network="twitter">
          <i class="fa fa-twitter"></i> Twitter
        </network>
        <network style="margin-left: 30px; cursor: pointer;" network="whatsapp">
          <i class="fa fa-whatsapp"></i> Whatsapp
        </network>
      </div>
    </social-sharing>
  </section>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  methods: {},
  computed: {},

  components: {}
};
</script>