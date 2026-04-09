import styles from './index.module.css';

import { SkillIcon } from './SkillIcon';
import { Skills, type SkillType } from './SkillType';

interface IProps {
  skill: SkillType;
  proficiency?: 'Novice' | 'Intermediate' | 'Proficient' | 'Expert';
}

export function SkillWithIcon ({ skill, proficiency }: IProps) {
  return (
    <div className={styles['skill-with-icon']}>
      <div className={styles['icon-container']}>
        <SkillIcon skill={skill} />
      </div>
      <div className={styles['skill-description']}>
        <div className={styles['skill-name']}>{Skills[skill]}</div>
        {proficiency && <div className={styles['skill-proficiency']}>{proficiency}</div>}
      </div>
    </div>
  );
}