<template>
    <div class="login-page">
    <div class="card">
      <form @submit.prevent="login">
        <div class="title">Login</div>
        <input placeholder="Username" type="text" v-model="username" />
        <br />
        <input placeholder="Password" type="password" v-model="password" />
        <br />
        <button type="submit">Login</button>
      </form>

      <form @submit.prevent="signup">
        <div class="title">Sign Up</div>
        <input
          class="input"
          placeholder="Username"
          type="text"
          v-model="username"
        />
        <br />
        <input placeholder="Password" type="password" v-model="password" />
        <br />
        <input placeholder="Email" type="text" v-model="email" />
        <br />
</template>