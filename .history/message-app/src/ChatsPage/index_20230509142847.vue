<template>
    <div style="height: 100vh">
      <PrettyChatWindow
        :projectId="projectId"
        :username="username"
        :secret="secret"
      />
    </div>
  </template>
  
  <style>
  .ce-new-chat-button {
    width: 32px;
    position: relative;
    bottom: 22px;
  }
  </style>
  
  <script>
  import { PrettyChatWindow } from "react-chat-engine-pretty";
  import { applyReactInVue } from "veaury";
  
  export default {
    data() {
      return {
        projectId: 91bc4650-40e8-4be7-b80c-4d5fac80d920",
      };
    },
    components: {
      PrettyChatWindow: applyReactInVue(PrettyChatWindow),
    },
    props: {
      username: {
        type: String,
        required: true,
      },
      secret: {
        type: String,
        required: true,
      },
    },
  };
  </script>