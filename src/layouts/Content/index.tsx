import { Section } from '@/components/Section';
import styles from './index.module.css';

import { SkillWithIcon } from '@/components/SkillWithIcon';

export function Content () {
  return (
    <div className={styles['content-container']}>
      <div className={styles['content']}>

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
              <SkillWithIcon skill="Unity" proficiency='Intermediate' />
              <SkillWithIcon skill="Unreal" proficiency='Intermediate' />
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
                <div className={styles['sub-header']}>UBS AG</div>
                <div className={styles['note']}>Associate Director</div>
              </div>
              <div className={styles['section-content-right']}>
                <span className={styles['duration']}>02/2025 – Present</span>
              </div>
            </div>
            <div className={styles['section-content-description']}>
              <ul className="list-disc pl-4">
                <li>Maintaining an automated transaction system that fully processes transactions without human input, allowing man-hours to only be spent on new cases or errors.</li>
                <li>Implemented an internal full stack system for access to information about transaction flows, allowing users to view the state of any transaction at any time without the need for developers aid.</li>
                <li>Introduced and implemented a timeline for the transactions similar to parcel tracking, allowing external parties or new users to easily understand the process transactions go through in the system.</li>
                <li>Created generic reusable templates for the UI and its backend that allows for easy integration of new transaction flows, reducing the time taken to 1 day.</li>
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
                <li>Introduced backend optimizations to legacy UI, significantly increasing the initial loading speeds of the pages while minimizing user flow disruption.</li>
                <li>Refactored legacy UI's implementation with no visible difference to users, allowing for easier maintainability and minimizing missed cases when fixing bugs.</li>
              </ul>
            </div>
          </div>

          <div className={styles['section-experience']}>
            <div className={styles['section-content']}>
              <div className={styles['section-content-left']}>
                <div className={styles['sub-header']}>INFR AI (VRcollab)</div>
                <div className={styles['note']}>Senior Developer</div>
              </div>
              <div className={styles['section-content-right']}>
                <span className={styles['duration']}>08/2018 – 03/2022</span>
              </div>
            </div>
            <div className={styles['section-content-description']}>
              <ul className="list-disc pl-4">
                <li>Co-created a full electron app for project management including token-based authentication and conversions to a proprietary file format, providing increased security for users and from competitors.</li>
                <li>Exposed to and took up many technologies, encouraging experimentation and cultivating good problem solving habits like breaking down large tasks into smaller sub tasks.</li>
              </ul>
            </div>
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