import React, { useState } from 'react';

import IconButton from '@/components/Buttons/IconButton';
import Macronutrients from '@/components/Macronutrients/Macronutrients';
import Modal from '@/components/Modal/Modal';

import TrashIcon from '@/icons/TrashIcon';
import { Macronutrient } from '@/pages/components';

const MealItem: React.FC<{
  label: string;
  quantity: number;
  unit: 'g' | 'ml';
  macronutrients: Macronutrient[];
}> = ({ label, quantity, unit, macronutrients }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <li
        className='bg-white rounded-lg p-4 cursor-pointer bg-gray-100'
        onClick={() => setIsOpen(true)}
      >
        <header className='mb-2 flex items-center justify-between'>
          <div className='ml-1'>
            <h5 className='font-bold text-lg'>{label}</h5>
            <span className='text-sm'>
              {quantity} {unit}
            </span>
          </div>
          <IconButton>
            <TrashIcon />
          </IconButton>
        </header>
        <div className='flex items-center mb-2'>
          {macronutrients.map(({ type, unit, quantity }) => (
            <Macronutrients
              key={type}
              color={type}
              unit={unit}
              quantity={quantity}
            />
          ))}
        </div>
      </li>
    </>
  );
};

export default MealItem;
