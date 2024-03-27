const { createApp } = Vue

const app = createApp({
    data() {
      return {
        message:'Vue Hello!',
        url: 'https://picsum.photos/200/300',
        alt: 'random-image'
      }
    }
  })
  
  app.mount('#app')