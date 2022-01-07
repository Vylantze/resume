<template>
  <div class="body">
    <Section
      title="Education"
    >
      <SectionedLine>
        <div slot="left">
          <b>National University of Singapore</b>
        </div>
        <div slot="right">
          08/2014 – 05/2018
        </div>
      </SectionedLine>
      <div class="italics note">
        Bachelor of Computing (Honours) in Computer Science
      </div>

      <SectionedLine style="margin-top: 10px">
        <div slot="left">
          <b>Saint Andrew's Junior College</b>
        </div>
        <div slot="right">
          01/2010 – 12/2011
        </div>
      </SectionedLine>
      <div class="italics note">
        GCE 'A' Levels - H2 Computing, H2 Maths, H2 Physics
      </div>
    </Section>

    <Section
      title="Skills"
    >
      <table>
        <colgroup>
          <col span="1" style="width: 20%;">
          <col span="1" style="width: 80%;">
        </colgroup>

        <tbody>
          <tr>
            <td><b>Languages</b></td>
            <td>C++, C#, Golang, Java, Javascript, HTML/CSS</td>
          </tr>
          <tr>
            <td><b>Frameworks</b></td>
            <td>Vuejs, React, Unity Engine, Unreal Engine</td>
          </tr>
          <tr>
            <td><b>Developer Tools</b></td>
            <td>Git, Heroku, Render, AWS, MySQL, MongoDB</td>
          </tr>
        </tbody>
      </table>
    </Section>

    <Section
      title="Experience"
    >
      <SectionedLine>
        <div slot="left">
          <b>VRcollab Pte. Ltd.</b>
        </div>
        <div slot="right">
          08/2018 – Present
        </div>
      </SectionedLine>
      <div class="italics note">
        Senior Developer
      </div>
      <ul>
        <li>Developed and maintained a full-stack application using Vuejs to manage user accounts.</li>
        <li>Developed and maintained an Electron application using Vuejs and NodeJS to provide a front-end UI for the desktop application.</li>
        <li>Developed and maintained a server's apis using Golang to manage issue creation and cloud syncing with the desktop application.</li>
        <li>Developed and maintained plugins using C# to retrieve and convert geometry data from external applications such as Autodesk Revit.</li>
      </ul>
    </Section>


    <Section
      title="Projects"
    >
      <SectionedLine>
        <div slot="left">
          <b>KanColle Simulator</b>
        </div>
      </SectionedLine>
      <div class="italics note">
        <a href="https://vylantze.github.io/KCS/">https://vylantze.github.io/KCS/</a>
      </div>
      <ul>
        <li>A rebuild of the home room in the game Kantai Collection.</li>
        <li>Developed using Vuejs to manage components and HTML5 Canvas to replicate the animations.</li>
        <li>Character handling has been modularized to allow for easy expansion and adding of new characters.</li>
      </ul>
    </Section>
  </div>
</template>

<script>
import Section from './Section.vue'
import SectionedLine from './SectionedLine.vue'

export default {
  name: 'Body',
  components: {
    Section,
    SectionedLine,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  margin: 40px 0 0;
}

ul {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 0.95em;
}

table {
  font-size: 0.95em;
  width: 100%;
}
</style>
