import { Section } from '@/components/Section';
import styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { SkillWithIcon } from '@/components/SkillWithIcon';
import { LinkComponent } from '@/components/Link';

export function Content () {
  return (
    <div className={styles['content-container']}>
      <div className={styles['content']}>
        <div className={styles['contact-header']}>
          <div className={styles['header-details-container']}>
            {/* Mobile */}
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faPhone} />
              <span className="select-all-on-click">+65 9326 1198</span>
            </div>
            {/* Email */}
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faEnvelope} />
              <a target="_blank" href="mailto:lzh.darryl@gmail.com">lzh.darryl@gmail.com</a>
            </div>
            {/* Github */}
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faGithub} />
              <span>
                <a target="_blank" href="https://github.com/Vylantze">https://github.com/Vylantze</a>
              </span>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>
                <a target="_blank" href="https://www.linkedin.com/in/darryl-lai">https://www.linkedin.com/in/darryl-lai</a>
              </span>
            </div>
          </div>
        </div>

        <Section title="Technical Skills">
          <div className={styles['skills-content']}>
            <div className={styles['skills-left']}>
              Programming Languages
            </div>
            <div className={styles['skills-right']}>
              <SkillWithIcon skill="Typescript" proficiency='Expert' />
              <SkillWithIcon skill="HTML5" proficiency='Expert' />
              <SkillWithIcon skill="Java" proficiency='Expert' />
              <SkillWithIcon skill="CSharp" proficiency='Proficient' />
              <SkillWithIcon skill="Golang" proficiency='Proficient' />
            </div>
          </div>
          
          <div className={styles['skills-content']}>
            <div className={styles['skills-left']}>
              Frameworks
            </div>
            <div className={styles['skills-right']}>
              <SkillWithIcon skill="React" proficiency='Expert' />
              <SkillWithIcon skill="SpringBoot" proficiency='Expert' />
              <SkillWithIcon skill="Vuejs" proficiency='Proficient' />
              <SkillWithIcon skill="Jira" proficiency='Intermediate' />
              <SkillWithIcon skill="Unity" proficiency='Intermediate' />
            </div>
          </div>

          <div className={styles['skills-content']}>
            <div className={styles['skills-left']}>
              Developer Tools
            </div>
            <div className={styles['skills-right']}>
              <SkillWithIcon skill="Git" proficiency='Proficient' />
              <SkillWithIcon skill="MySQL" proficiency='Proficient' />
              <SkillWithIcon skill="Docker" proficiency='Intermediate' />
              <SkillWithIcon skill="MongoDB" proficiency='Intermediate' />
              <SkillWithIcon skill="AWS" proficiency='Intermediate' />
            </div>
          </div>
        </Section>

        <Section title="Experience">
          <div className={styles['section-experience']}>
            <div className={styles['section-content']}>
              <div className={styles['section-content-left']}>
                <div className={styles['sub-header']}>
                  <LinkComponent href="https://www.ubs.com/sg/en.html">
                    UBS AG
                  </LinkComponent>
                </div>
                <div className={styles['note']}>Associate Director</div>
              </div>
              <div className={styles['section-content-right']}>
                <span className={styles['duration']}>02/2025 – Present</span>
              </div>
            </div>
            <div className={styles['section-content-description']}>
              <ul className="list-disc pl-4">
                <li>Streamlining an automated transaction system that fully processes transactions without human input, allowing man-hours to only be spent on new cases or errors.</li>
                <li>Implemented an internal full stack system for access to information about transaction flows, allowing users to view the state of any transaction at any time without the need for developers aid.</li>
                <li>Introduced and implemented a timeline for the transactions similar to parcel tracking, enabling external parties or new users to easily understand the process transactions go through in the system.</li>
                <li>Standardized reusable templates for the UI and its backend that allows for easy integration of new transaction flows, reducing the time taken to 1 day.</li>
              </ul>
            </div>
          </div>

          <div className={styles['section-experience']}>
            <div className={styles['section-content']}>
              <div className={styles['section-content-left']}>
                <div className={styles['sub-header']}>Credit Suisse AG</div>
                <div className={styles['note']}>Software Developer & Engine Staff</div>
              </div>
              <div className={styles['section-content-right']}>
                <span className={styles['duration']}>04/2022 – 01/2025</span>
              </div>
            </div>
            <div className={styles['section-content-description']}>
              <ul className="list-disc pl-4">
                <li>Led backend optimizations to legacy UI, significantly increasing the initial loading speeds of the pages while minimizing user flow disruption.</li>
                <li>Improved legacy UI's implementation with no visible difference to users, allowing for easier maintainability and maximizing efficiency when fixing bugs.</li>
              </ul>
            </div>
          </div>

          <div className={styles['section-experience']}>
            <div className={styles['section-content']}>
              <div className={styles['section-content-left']}>
                <div className={styles['sub-header']}>
                  <LinkComponent href="https://infr.ai">
                    INFR AI (VRcollab)
                  </LinkComponent>
                </div>
                <div className={styles['note']}>Senior Developer</div>
              </div>
              <div className={styles['section-content-right']}>
                <span className={styles['duration']}>08/2018 – 03/2022</span>
              </div>
            </div>
            <div className={styles['section-content-description']}>
              <ul className="list-disc pl-4">
                <li>Co-created a full electron app for project management including token-based authentication and conversions to a proprietary file format, providing increased security for users and from competitors.</li>
                <li>Developed and implemented plugins to retrieve and compile project data from external model viewing applications, enabling the users to easily convert any model to the proprietary format for viewing without needing to go through the development team.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Projects">
          <div className={styles['sub-header']}>
            <LinkComponent href="https://vylantze.github.io/resume">
              Resume
            </LinkComponent>
          </div>
          <div className={styles['note']}>
            <LinkComponent href="https://github.com/Vylantze/resume">
              https://github.com/Vylantze/resume
            </LinkComponent>
          </div>
          <div className={styles['section-content-description']}>
            <ul className="list-disc pl-4">
              <li>Uses React, Typescript and Vite.</li>
              <li>An online version of this resume, made using the latest technologies as both a testbed and a showcase of coding style.</li>
              <li>Simple and dynamic design with structured organization that is ready for expansion with minimal refactoring.</li>
              <li>Has simple QoL UI features to aid in the navigation and reading of the page, such as automatic resizing depending on screen size.</li>
            </ul>
          </div>

          <div className={styles['sub-header']}>
            <LinkComponent href="https://vylantze.github.io/KCS">
              KC Simulator
            </LinkComponent>
          </div>
          <div className={styles['note']}>
            <LinkComponent href="https://github.com/Vylantze/KCS">
              https://github.com/Vylantze/KCS
            </LinkComponent>
          </div>
          <div className={styles['section-content-description']}>
            <ul className="list-disc pl-4">
              <li>Uses Vuejs and Javascript.</li>
              <li>A recreation of the home room of the web browser game <a target="_blank" href="https://en.kancollewiki.net/Kancolle_Wiki">Kantai Collection</a>.</li>
              <li>The home room has an idling unit that says voiced lines when clicked or when the hour changes. Many of the home room features have been replicated to closely follow the original game.</li>
              <li>Additional features have been added; such as translated subtitles for the voiced lines and automatic resizing to fit on a phone screen.</li>
            </ul>
          </div>

          <div className={styles['sub-header']}>
            <LinkComponent href="https://play.google.com/store/apps/details?id=io.github.fate_grand_automata">
              Fate/Grand Automata
            </LinkComponent>
          </div>
          <div className={styles['note']}>
            <LinkComponent href="https://github.com/Fate-Grand-Automata/FGA/pull/2087">
              https://github.com/Fate-Grand-Automata/FGA/pull/2087
            </LinkComponent>
          </div>
          <div className={styles['section-content-description']}>
            <ul className="list-disc pl-4">
              <li>Uses Kotlin.</li>
              <li>A automated farming assistance application for the game <a target="_blank" href="https://fate-go.us/">Fate/Grand Order</a>.</li>
              <li>Spearheaded a major pull request to improve on the automated attack selection system, providing users with more specific choices and options for faster farming.</li>
              <li>Implemented with a full suite of unit tests handling and covering edge cases for the 4 modes of behavior for 3 attack cards out of a random 5 and special attacks when available.</li>
              <li>Documented the new features and provided flow-charts for easy understanding of what the system does.</li>
            </ul>
          </div>

          <div className={styles['sub-header']}>
            <LinkComponent href="https://stats.foundry-arc.uk/">
              FoundryVTT Stats
            </LinkComponent>
          </div>
          <div className={styles['note']}>
            <LinkComponent href="https://github.com/Vylantze/foundryvtt-stats">
              https://github.com/Vylantze/foundryvtt-stats
            </LinkComponent>
          </div>
          <div className={styles['section-content-description']}>
            <ul className="list-disc pl-4">
              <li>Uses React and Nextjs.</li>
              <li>A page showing the compiled statistics of dice rolls over a long tabletop RPG campaign hosted on <a target="_blank" href="https://foundryvtt.com">Foundry Virtual Tabletop</a>.</li>
              <li>Parsed the application's logs and transformed it to fetch the dice statistics of each player.</li>
              <li>Created a sorting system for the types of rolls done and compiled them into easy to understand statistics, allowing users to see at a glance what their performance had been like and to easily view the breakdown of each aggregation if they so wish.</li>
            </ul>
          </div>

        </Section>

        <Section title="Education">
          <div className={styles['section-content']}>
            <div className={styles['section-content-left']}>
              <div>National University of Singapore</div>
              <div className={styles['note']}>Bachelor of Computing in Computer Science (Honours)</div>
            </div>
            <div className={styles['section-content-right']}>
              <span className={styles['duration']}>08/2014 – 05/2018</span>
            </div>
          </div>

          <div className={styles['section-content']}>
            <div className={styles['section-content-left']}>
              <div>Saint Andrew's Junior College</div>
              <div className={styles['note']}>GCE 'A' Levels - H2 Computing, H2 Maths, H2 Physics</div>
            </div>
            <div className={styles['section-content-right']}>
              <span className={styles['duration']}>01/2010 – 12/2011</span>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Content;