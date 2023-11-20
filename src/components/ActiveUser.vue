<template>
  <p>{{ firstname }} </p>
  <p>{{ age }} </p>
</template>
<script>
  export default {
    props: [
      'firstname', "age"
    ]
  }
</script>