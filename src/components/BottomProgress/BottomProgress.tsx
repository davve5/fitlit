import clsx from 'clsx';
import React from 'react';

import Progress from '@/components/Progress/Progress';

const BottomProgress: React.FC<{
  className?: string;
}> = ({ className }) => (
  <section className={clsx('bg-gray-100 p-2 space-y-2', className)}>
    <Progress label='calories' color='kcal' current={3000 * 2} max={3000} />
    <div className='grid grid-cols-3 gap-3'>
      <Progress label='proteins' color='proteins' current={320} max={321} />
      <Progress label='fats' color='fats' current={32.32} max={321} />
      <Progress label='carbs' color='carbs' current={12.23} max={123} />
    </div>
  </section>
);

export default BottomProgress;
