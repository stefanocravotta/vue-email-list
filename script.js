
const app = new Vue({

  el: '#app',

  data:{

    mails: [],
    isLoading: true,
  },

  methods: {
    getRandomMail(){
      for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
        this.mails.push(res.data)
        if(this.mails.length > 9){
          this.isLoading = false
        }
        
      })
      
      }
    }

    
  },
  mounted() {
    this.getRandomMail()
  },
})