<template>
  <div class="body">
    <Section
      title="Education"
    >
      <Subsection>
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
      </Subsection>

      <Subsection>
        <SectionedLine>
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
      </Subsection>
    </Section>

    <Section
      title="Skills"
    >
      <Subsection>
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
              <td>Git, Docker, AWS, MySQL, MongoDB</td>
            </tr>
          </tbody>
        </table>
      </Subsection>
    </Section>

    <Section
      title="Experience"
    >
      <Subsection>
        <SectionedLine>
          <div slot="left">
            <b>Credit Suisse AG</b>
          </div>
          <div slot="right">
            04/2022 – Present
          </div>
        </SectionedLine>
        <div class="italics note">
          Software Developer & Engine Staff
        </div>
        <ul>
          <li>Updated and maintained automated booking system for transactions.</li>
          <li>Updated and maintained UI.</li>
          <li>Developing and creating a new UI framework for new system.</li>
        </ul>
      </Subsection>

      <Subsection>
        <SectionedLine>
          <div slot="left">
            <b>VRcollab Pte. Ltd.</b>
          </div>
          <div slot="right">
            08/2018 – 03/2022
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
      </Subsection>

      <Subsection>
        <SectionedLine>
          <div slot="left">
            <b>Landshark Games</b>
          </div>
          <div slot="right">
            05/2017 – 10/2017
          </div>
        </SectionedLine>
        <div class="italics note">
          Intern
        </div>
        <ul>
          <li>Recreated one of the company's Facebook flash games, Bad Candy, in Unity, using C#.</li>
          <li>Developed the entire system that supports the game from scratch, which includes the mechanics of the puzzles, menu handling, user input, etc.</li>
        </ul>
      </Subsection>
    </Section>

    <Section
      title="Personal Projects"
    >
      <Subsection>
        <SectionedLine>
          <div slot="left">
            <b>KC Simulator</b>
          </div>
        </SectionedLine>
        <div class="italics note">
          <a target="_blank" href="https://github.com/Vylantze/KCS">https://github.com/Vylantze/KCS</a>
        </div>
        <ul>
          <li>A rebuild of the home room of the game Kantai Collection.</li>
          <li>Solo project.</li>
          <li>Developed using Vuejs to manage components and HTML5 Canvas to replicate animations.</li>
          <li>Modularized character handling to allow for easy expansion and adding of new characters.</li>
        </ul>
      </Subsection>

      <!--
      <Subsection>
        <SectionedLine>
          <div slot="left">
            <b>Java CLI Canvas</b>
          </div>
        </SectionedLine>
        <div class="italics note">
          <a target="_blank" href="https://github.com/Vylantze/java-cli-canvas">https://github.com/Vylantze/java-cli-canvas</a>
        </div>
        <ul>
          <li>An application that takes in user input to create a canvas and draw in the command line interface.</li>
          <li>Solo project.</li>
          <li>Developed using Java and Docker was used for deployment.</li>
          <li>Implemented with test driven development practices and continuous integration for testing.</li>
        </ul>
      </Subsection>
      -->

      <Subsection>
        <SectionedLine>
          <div slot="left">
            <b>OraCle</b>
          </div>
        </SectionedLine>
        <div class="italics note">
          <a target="_blank" href="https://github.com/CS2103-Aug2015-w15-4j/main">https://github.com/CS2103-Aug2015-w15-4j/main</a>
        </div>
        <ul>
          <li>An application that allows for user to input and manage tasks.</li>
          <li>Made using a team of four.</li>
          <li>Developed using Java.</li>
          <li>Developer for user input and dynmically generated UI.</li>
        </ul>
      </Subsection>

      <Subsection>
        <SectionedLine>
          <div slot="left">
            <b>8th Sea</b>
          </div>
        </SectionedLine>
        <div class="italics note">
          <a target="_blank" href="https://github.com/Voxsam/8thsea">https://github.com/Voxsam/8thsea</a>
        </div>
        <ul>
          <li>A game that uses an underwater submarine to catch fish.</li>
          <li>Made using a team of five.</li>
          <li>Developed using Unity Engine.</li>
          <li>Developer for mechanics, as well as merging handler and main debugger.</li>
        </ul>
      </Subsection>

      <Subsection>
        <SectionedLine>
          <div slot="left">
            <b>Voxsam</b>
          </div>
        </SectionedLine>
        <div class="italics note">
          <a target="_blank" href="https://github.com/JeanKoh/Voxsam">https://github.com/JeanKoh/Voxsam</a>
        </div>
        <ul>
          <li>A game that lets you build towers to defend against viral blobs.</li>
          <li>Made using a team of six.</li>
          <li>Developed using Unreal Engine.</li>
          <li>Developer for mechanics.</li>
        </ul>
      </Subsection>

      <Subsection>
        <SectionedLine>
          <div slot="left">
            <b>Chaos Children</b>
          </div>
        </SectionedLine>
        <div class="italics note">
          <a target="_blank" href="https://github.com/Vylantze/Chaos-Children">https://github.com/Vylantze/Chaos-Children</a>
        </div>
        <ul>
          <li>A 2D side-scrolling game that involves fighting enemies and overcoming obstacles.</li>
          <li>Made using a team of two.</li>
          <li>Developed using Unity Engine.</li>
          <li>Developer for user input, character movement and enemy handling.</li>
        </ul>
      </Subsection>

      <Subsection>
        <SectionedLine>
          <div slot="left">
            <b>User balance API endpoint</b>
          </div>
        </SectionedLine>
        <div class="italics note">
          <a target="_blank" href="https://github.com/Vylantze/user-crypto-balance">https://github.com/Vylantze/user-crypto-balance</a>
        </div>
        <ul>
          <li>A programming challenge that involves the creation of an api endpoint that uses real cryptocurrency values to calculate a theoretical user's balance in USD.</li>
          <li>Developed using Node, Expresss, Mocha and Chai.</li>
          <li>Automated building and testing through CI has been implemented.</li>
        </ul>
      </Subsection>

      <Subsection>
        <SectionedLine>
          <div slot="left">
            <b>Resume</b>
          </div>
        </SectionedLine>
        <div class="italics note">
          <a target="_blank" href="https://github.com/Vylantze/resume">https://github.com/Vylantze/resume</a>
        </div>
        <ul>
          <li>An online version of this resume.</li>
          <li>Developed using Vuejs and GitHub pages.</li>
          <li>Automated building through CI has been implemented.</li>
        </ul>
      </Subsection>
    </Section>

    <!--
    <Section v-if="Boolean(lastDate)" class="date">
      <i>Last updated {{ formattedDate }}</i> 
    </Section>
    -->
  </div>
</template>

<script>
import Section from './Section.vue'
import SectionedLine from './SectionedLine.vue'
import Subsection from './Subsection.vue'

const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default {
  name: 'Body',
  components: {
    Section,
    SectionedLine,
    Subsection,
  },
  data() {
    return {
      lastDate: new Date(),
    }
  },
  computed: {
    formattedDate() {
      if (!this.lastDate) { return null; }
      let date = this.lastDate;
      if (typeof date == 'string') {
        date = new Date(date)
      }
      var month = monthArray[date.getMonth()]
      var day = date.getDate()
      var hour = (date.getHours() < 10 ? '0' : '') + date.getHours()
      var min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
      var year = date.getFullYear().toString() //.substring(2, 4)
      return `${day} ${month} ${year}, ${hour}:${min}`
    }
  },
  created() {
    this.get_latest_commits();
  },
  methods: {
    get_latest_commits: function() {
      var xhttp = new XMLHttpRequest();
      var component = this;
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let commits = JSON.parse(this.responseText);
          if (!commits) {
            return;
          }
          console.log("Commits", commits);
          try {
            component.lastDate = new Date(commits[0].commit.committer.date);
            console.log("Set last date", { date: component.lastDate });
          } catch (e) {
            console.log("Error", e);
          }
        }
      };
      xhttp.open("GET", "https://api.github.com/repos/Vylantze/resume/commits", true);
      xhttp.send();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  margin: 40px 0 0;
}

.body > .date {
  font-size: 0.7em;
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
