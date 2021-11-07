import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

import Button from '@/components/Buttons/Button';
import MealItem from '@/components/MealsList/MealItem';

import { categories } from '@/pages/components';

const MealsList: React.FC<{
  categories: typeof categories;
}> = ({ categories }) => (
  <Tab.Group>
    <Tab.List className='flex p-1 space-x-1 bg-accent-900/20 rounded-xl'>
      {Object.keys(categories).map((category) => (
        <Tab
          key={category}
          className={({ selected }) =>
            clsx(
              'w-full py-2.5 text-sm leading-5 capitalize font-medium text-accent-700 rounded-lg',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-accent-400 ring-white ring-opacity-60',
              selected
                ? 'bg-white'
                : 'text-accent-100 hover:bg-white/[0.12] hover:text-white'
            )
          }
        >
          {category}
        </Tab>
      ))}
    </Tab.List>
    <Tab.Panels className='mt-2'>
      {Object.values(categories).map((meals, idx) => (
        <Tab.Panel key={idx}>
          <Button variant='secondary' className='w-full' icon={<FiPlus />} />
          <ul className='space-y-4 rounded-lg'>
            {meals.map(({ id, label, quantity, macronutrients }) => (
              <MealItem
                label={label}
                quantity={quantity}
                macronutrients={macronutrients}
                key={id}
              />
            ))}
          </ul>
        </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
);

export default MealsList;
