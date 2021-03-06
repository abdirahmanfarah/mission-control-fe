import React from 'react';
import getColor from '../../../utils/getColorFromCCGrade';

import {
  gradeCont,
  gradeBox,
  scsssux,
  PulseBoy,
  Tip,
} from './Grade.module.scss';

import RePulse from '../rePulse/Pulse';
import getMessage from '../../../utils/getMessageForCCGrade';

import DeleteRepo from './DeleteRepo';

const Grade = ({ ghrepos, executeQuery }) => {
  if (!ghrepos || !ghrepos.length) return null;

  return (
    <div className={gradeCont}>
      {ghrepos.map(repo => {
        const color = getColor(repo.grade);
        return (
          <div key={repo.name} className={scsssux}>
            <DeleteRepo id={repo.GHRepoId} name={repo.name} executeQuery={executeQuery} />
            <h3>
              {repo.name}:{' '}
              <a
                href={repo.link}
                className={gradeBox}
                style={{
                  backgroundColor: color,
                  padding: '0px 6px',
                  borderRadius: '3px',
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                {repo.grade}
                <span className={Tip}>{getMessage(repo.grade)}</span>
              </a>
            </h3>
            <a href={repo.link} target="_blank" rel="noopener noreferrer">
              Go to Analysis
            </a>
            <div className={PulseBoy}>
              <RePulse owner="Lambda-School-Labs" name={repo.name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grade;