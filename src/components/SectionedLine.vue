<template>
  <div class="sectioned-line">
    <div class="left-side">
      <slot name="left" />
    </div>
    <div class="right-side">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionedLine',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sectioned-line {
  display: flex;
  text-align: left;
}

.sectioned-line > .left-side {
  flex: 1;
}
</style>
