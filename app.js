const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      timeout: true,
    };
  },
  watch: {
    counter(new_value){
      // you need to have this to use it in timeout
      const that = this;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(
        function() {
          that.counter = 0;
        }, 1000);
    }
  },
  computed:{
    showResult(){
      if(this.counter < 37 )
        return "Not there yet";

      if(this.counter > 37 )
        return "Too much";

      return "37";
    }
  },
  methods:{
    add(how_much){
      this.counter += how_much;
    },
  }
});

app.mount('#assignment');
