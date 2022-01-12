<template>
  <div class="subsection">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Subsection'
}
</script>

<style scoped>
.subsection {
  page-break-inside: avoid;
  margin: 5px 0px;
}
</style>
