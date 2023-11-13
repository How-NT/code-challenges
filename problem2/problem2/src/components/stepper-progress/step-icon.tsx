import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTheme } from '@mui/material';
import clsx from 'clsx';
import React from 'react';

const StepIcon: React.FC<{
  label: string;
  active: boolean;
  completed: boolean;
}> = ({ label, active, completed }) => {
  const theme = useTheme();

  return (
    <svg
      className={clsx({
        'MuiSvgIcon-root MuiStepIcon-root': true,
        'MuiStepIcon-active': active,
        'MuiStepIcon-completed': completed,
      })}
      width={40}
      height={40}
      viewBox="0 0 24 24">
      {completed ? (
        <>
          <circle cx="12" cy="12" r="12" color="primary" />

          <CheckCircleOutlineIcon
            viewBox="-8 -8 40 40"
            htmlColor={theme.palette.primary.contrastText}
            style={{ width: 18, height: 18 }}
          />
        </>
      ) : (
        <>
          <circle cx="12" cy="12" r="12" />

          <text
            className="MuiStepIcon-text"
            x="12"
            y="16"
            textAnchor="middle"
            fill="white">
            {label}
          </text>
        </>
      )}
    </svg>
  );
};

export default StepIcon;
