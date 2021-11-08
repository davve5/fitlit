import clsx from 'clsx';
import React from 'react';

export const progressColors = {
  carbs: {
    empty: 'bg-carbs-200',
    filled: 'bg-carbs-400',
    text: 'text-carbs-800',
  },
  fats: {
    empty: 'bg-fats-200',
    filled: 'bg-fats-400',
    text: 'text-fats-800',
  },
  kcal: {
    empty: 'bg-kcal-200',
    filled: 'bg-kcal-400',
    text: 'text-kcal-800',
  },
  proteins: {
    empty: 'bg-proteins-200',
    filled: 'bg-proteins-400',
    text: 'text-proteins-800',
  },
} as const;

const Progress: React.FC<{
  current: number;
  max: number;
  color: keyof typeof progressColors;
  label?: string;
  className?: string;
}> = ({ current, max, color, label, className }) => {
  const { empty, filled, text } = progressColors[color];

  const percentage = ((current / max) * 100).toFixed(0);
  const progress = Math.max(Math.min(current / max, 1) * 100, 0);

  return (
    <div className={className}>
      {label && (
        <div
          className={clsx(
            'flex items-center justify-between',
            'font-semibold capitalize text-xs',
            'px-1',
            text
          )}
        >
          <span>{label}</span>
          <span>
            {current}/{max}
          </span>
        </div>
      )}
      <span className={clsx('flex h-3.5 md:h-4 rounded relative', empty)}>
        <span
          style={{
            width: `${progress}%`,
          }}
          className={clsx('rounded', filled)}
        />
        <span
          className={clsx('absolute right-1 top-0 font-semibold text-xs', text)}
        >
          {percentage}%
        </span>
      </span>
    </div>
  );
};

export default Progress;
