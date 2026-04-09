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
          <div className={styles['section-content']}>
            <div className={styles['section-content-left']}>
              <div className={styles['sub-header']}>UBS AG</div>
              <div className={styles['note']}>Associate Director</div>
            </div>
            <div className={styles['section-content-right']}>
              <span className={styles['duration']}>02/2025 – Present</span>
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