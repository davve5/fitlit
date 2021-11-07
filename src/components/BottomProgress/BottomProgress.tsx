import clsx from 'clsx';
import React from 'react';

import Progress from '@/components/Progress/Progress';

const BottomProgress: React.FC = () => (
  <section
    className={clsx('fixed bottom-0 left-0 w-full bg-gray-100 p-2 space-y-2')}
  >
    <Progress color='kcal' current={3000 * 2} max={3000} />
    <div className='grid grid-cols-3 gap-3'>
      <Progress color='proteins' current={321 / 3} max={321} />
      <Progress color='fats' current={321 / 4} max={321} />
      <Progress color='carbs' current={123 / 2} max={123} />
    </div>
  </section>
);

export default BottomProgress;
