<template>
  <div class="section">
    <span class="title">{{ title }}</span>
    <hr class="title-underline" />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  margin: 40 40 0 0;
}

.section > .title {
  font-size: 1.3em;
}

.section > .title-underline {
  margin-top: 5px;
}

.section > .content {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
