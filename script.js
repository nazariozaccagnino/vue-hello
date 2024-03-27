const { createApp } = Vue

const app = createApp({
    data() {
      return {
        message:'Vue Hello!'
      }
    }
  })
  
  app.mount('#app')