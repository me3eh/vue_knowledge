<template>
  <form @submit.prevent="submitNameAndAge">
    <label>Name</label>
    <input name="name" type="string" v-model="actualFirstname"/>
    <br/>
    <label> Age</label>
    <input name="age" type="number"  v-model="actualAge" />
    <button>Accept</button>
  </form>
</template>
<script>
  export default {
    data(){
      return {
        actualFirstname: "asdf",
        actualAge: 0
      }
    },
    methods:{
      submitNameAndAge(){
        // alert("dupa")
        this.$emit("ping-me", this.actualFirstname, this.actualAge)
      }
    },
    emits: ["ping-me"]
  }
</script>