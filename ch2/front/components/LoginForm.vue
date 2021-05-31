<template>
  <v-container v-if="!me">
    <v-card>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-container>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="이메일"
            type="email"
            required
          />
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="비밀번호"
            type="password"
            required
          />
          <v-btn color="green" type="submit" :disabled="!valid">로그인</v-btn>
          <v-btn nuxt to="/signUp">회원가입</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
  <v-container v-else>
    <v-card>
      <v-container>
        {{me.nickname}}님 로그인되었습니다.
        <v-btn @click="onLogOut">로그아웃</v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        valid: false,
        email: '',
        password: '',
        emailRules: [
          v => !!v || '이메일은 필수입니다.',
          v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
        ],
        passwordRules: [
          v => !!v || '비밀번호는 필수입니다.',
        ],
      };
    },
    computed: {
      me() {
        return this.$store.state.users.me;
      },
    },
    methods: {
      onSubmitForm() {
        if (this.$refs.form.validate()) {
          // dispatch는 자체적으로 promise임 (그래서 then을 사용하여 순서를 보장 할 수 있다.)
          // promise는 async와 await으로도 쓸 수 있다.
          this.$store.dispatch('users/logIn', {
            email: this.email,
            nickname: '이히오',
          });
        }
      },
      onLogOut() {
        this.$store.dispatch('users/logOut');
      },
    },
  };
</script>

<style>

</style>
