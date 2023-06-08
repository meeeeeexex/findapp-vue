<template>
  <v-app id="inspire">
    <div class="main">
      <v-alert
        v-if="isAlertOpened"
        :color="alertColor"
        :icon="alertIcon"
        :title="alertTitle"
        :closable="true"
        position="fixed"
        class="alert"
        :text="alertText"
        @click:close="isAlertOpened = false"
      ></v-alert>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                            class="text-center display-2 teal--text text--accent-3"
                        >Sign in to Findapp</h1>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form @submit.prevent>
                          <v-text-field
                              label="Email"
                              name="Email"
                              prepend-icon="email"
                              type="text"
                              color="teal accent-3"
                          />
                          <v-text-field
                              id="password"
                              label="Password"
                              name="password"
                              prepend-icon="lock"
                              type="password"
                              color="teal accent-3"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Forgot your password ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3 mb-4">
                        <v-btn rounded color="teal accent-3" type="submit" dark>SIGN IN</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="container teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                        <h5
                            class="text-center mt-4"
                        >Enter your personal details and start journey with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5
                            class="text-center mt-4"
                        >To Keep connected with us please login with your personnel info</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Create Account</h1>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form  @submit.prevent>
                          <v-text-field
                              label="Name"
                              name="Name"
                              v-model="nickname"
                              prepend-icon="person"
                              type="text"
                              color="teal accent-3"
                          />
                          <v-text-field
                              label="Email"
                              name="Email"
                              v-model="email"
                              prepend-icon="email"
                              type="text"
                              color="teal accent-3"
                          />

                          <v-text-field
                              id="password"
                              label="Password"
                              name="password"
                              prepend-icon="lock"
                              type="password"
                              v-model="password"
                              color="teal accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-2">
                        <v-btn rounded color="teal accent-3" @click="handleSubmit" dark>SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
// import axios from 'axios'
export default {
  data: () => ({
    step: 1,
    email: '',
    nickname: '',
    password: '',
    alertColor: '',
    alertTitle: '',
    alertIcon: '',
    alertText: '',
    isAlertOpened: false
  }),
  props: {
    source: String
  },
  methods: {
    handleSubmit: function () {
      // axios.post('url', {
      //   email: this.email,
      //   password: this.password,
      //   nickname: this.nickname
      // }).catch((e) =>  {
      //   this.alertText = e
      //   this.alertTitle = 'Something went wrong'
      //   this.alertIcon = '$error'
      //   this.alertColor = 'error'
      //   this.isAlertOpened = true
      // }).then((res) => {
      //   if (res?.data) {
      //     this.$router.push('/verify')
      //   }
      // })
      this.$router.push('/verify')
    }
  }
};
</script>

<style scoped lang="css">
.main {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  padding: 30px !important;
}
.alert {
  left: auto;
  right: auto;
  z-index: 1000;
  top: 5%;
}
</style>
