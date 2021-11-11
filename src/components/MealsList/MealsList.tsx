import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';

import Button from '@/components/Buttons/Button';
import MealItem from '@/components/MealsList/MealItem';

import PlusIcon from '@/icons/PlusIcon';
import { categories } from '@/pages/components';

const MealsList: React.FC<{
  categories: typeof categories;
}> = ({ categories }) => (
  <Tab.Group
    as='div'
    className='flex flex-col h-full w-full max-w-md mx-auto p-2'
  >
    <Tab.List className='flex space-x-1 bg-accent-200 rounded-xl'>
      {Object.keys(categories).map((category) => (
        <Tab
          key={category}
          className={({ selected }) =>
            clsx(
              'w-full py-2.5 text-sm leading-5 capitalize font-medium text-accent-700 rounded-lg',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-accent-400 ring-white ring-opacity-60',
              selected
                ? 'bg-white'
                : 'ext-accent-100 hover:bg-white/[0.12] hover:text-white'
            )
          }
        >
          {category}
        </Tab>
      ))}
    </Tab.List>
    <Tab.Panels className='flex mt-2 h-full'>
      {Object.values(categories).map((meals, idx) => (
        <Tab.Panel key={idx} className='flex flex-col w-full'>
          <Button variant='primary' className='w-full' icon={<PlusIcon />} />
          <div className='flex flex-col flex-grow relative mt-2'>
            <div className='absolute top-0 left-0 right-0 bottom-0 overflow-y-auto hide-scrollbar'>
              <ul className='space-y-4 rounded-lg'>
                {meals.map(({ id, label, quantity, unit, macronutrients }) => (
                  <MealItem
                    key={id}
                    label={label}
                    quantity={quantity}
                    unit={unit}
                    macronutrients={macronutrients}
                  />
                ))}
              </ul>
            </div>
          </div>
        </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
);

export default MealsList;
