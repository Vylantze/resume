<template>
  <div class="top-header">
    <h1 class="title">{{ name }}</h1>
    <div class="center-div">
      <div class="header-details">
        <div class="header-detail-row">
          <FontAwesomeIcon
            class="header-detail-icon"
            :icon="['fas', 'phone']"
          />
          <span style="margin-left: 5px">+65 93261198</span>
        </div>
        <div class="header-detail-row">
          <FontAwesomeIcon
            class="header-detail-icon"
            :icon="['fab', 'github']"
          />
          <span style="margin-left: 5px">
            <a href="https://github.com/Vylantze">https://github.com/Vylantze</a>
          </span>
        </div>
        <div class="header-detail-row">
          <FontAwesomeIcon
            class="header-detail-icon"
            :icon="['fab', 'linkedin']"
          /> 
          <span style="margin-left: 5px">
            <a href="https://www.linkedin.com/in/darryl-lai">https://www.linkedin.com/in/darryl-lai</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      name: "Darryl Lai",
      
    }
  },
  computed: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}

.header-details {
  text-align: left;
}

.top-header {
  text-align: center;
}
</style>
