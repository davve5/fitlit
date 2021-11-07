import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';

import IconButton from '@/components/Buttons/IconButton';
import Macronutrients from '@/components/Macronutrients/Macronutrients';
import Modal from '@/components/Modal/Modal';

import { Macronutrient } from '@/pages/components';

const MealItem: React.FC<{
  label: string;
  quantity: number;
  macronutrients: Macronutrient[];
}> = ({ label, quantity, macronutrients }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <li
        className='bg-white rounded-lg p-4 cursor-pointer bg-gray-100'
        onClick={() => setIsOpen(true)}
      >
        <header className='mb-2 font-bold flex text-lg items-center justify-between'>
          <div className='flex items-center'>
            <span className='bg-orange-400 rounded-full w-2 h-2' />
            <h5>
              {quantity}x {label}
            </h5>
          </div>
          <IconButton>
            <BiTrash />
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
