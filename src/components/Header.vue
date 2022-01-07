<template>
  <div class="top-header">
    <h1 class="title">{{ name }}</h1>
    <Subsection class="center-div">
      <div class="header-details">
        <div class="header-detail-row">
          <div class="icon-holder">
            <FontAwesomeIcon
              class="header-detail-icon"
              :icon="['fas', 'phone']"
            />
          </div>
          <span style="margin-left: 5px">+65 93261198</span>
        </div>
        <div class="header-detail-row">
          <div class="icon-holder">
            <FontAwesomeIcon
              class="header-detail-icon"
              :icon="['fab', 'github']"
            />
          </div>
          <span style="margin-left: 5px">
            <a href="https://github.com/Vylantze">https://github.com/Vylantze</a>
          </span>
        </div>
        <div class="header-detail-row">
          <div class="icon-holder">
            <FontAwesomeIcon
              class="header-detail-icon"
              :icon="['fab', 'linkedin']"
            /> 
          </div>
          <span style="margin-left: 5px">
            <a href="https://www.linkedin.com/in/darryl-lai">https://www.linkedin.com/in/darryl-lai</a>
          </span>
        </div>
      </div>
    </Subsection>
  </div>
</template>

<script>
import Subsection from './Subsection.vue'

export default {
  name: 'Header',
  components: {
    Subsection,
  },
  data() {
    return {
      name: "Darryl Lai",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-header {
  text-align: center;
}

.top-header > h1 {
  margin-top: 40px;
  margin-bottom: 10px;
}

.header-details {
  text-align: left;
}

.header-details > .header-detail-row {
  display: flex;
}

.header-details > .header-detail-row > .icon-holder {
  width: 15px;
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>
