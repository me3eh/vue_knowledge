const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      valueOnParagraph: '',
      valueOnParagraph2: '',
      confirmedName: ""
    };
  },
  methods: {
    showAlert(){
      alert("dupa");
    },
    outputOnParagraph(event){
      this.valueOnParagraph = event.target.value; 
    },
    outputOnParagraph2(event){
      this.valueOnParagraph2 = event.target.value; 
    }
  }
});

app.mount('#assignment');
