<template>
  <svg class="icon"
       @mousedown="$emit('mousedown',$event)"
       @mouseup="$emit('mouseup',$event)"
       @mouseleave="$emit('mouseleave',$event)"
       aria-hidden="true">
    <use :href="href"></use>
  </svg>
</template>

<script>
  export default {
    name: "FontIcon",
    props: {href: String}
  }
</script>

<style scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
