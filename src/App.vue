<script>
export default {
  data() {
    return {
      firstname: "Puste",
      age: "23",
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods:{
    heh(newFirstname, newAge){
      this.firstname = newFirstname
      this.age = newAge
    }
  }
};
</script>

<template>
  <h1>
    sraka
  </h1>
  <active-user :firstname="firstname" :age="age"></active-user>
  <user-data @ping-me="heh">

  </user-data>
</template>

<style scoped>

</style>