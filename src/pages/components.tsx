import clsx from 'clsx';
import React from 'react';

import Layout from '@/components/Layouts/Layout';
import MealsList from '@/components/MealsList/MealsList';
import Progress from '@/components/Progress/Progress';

export type Macronutrient = {
  type: 'kcal' | 'proteins' | 'fats' | 'carbs';
  unit: 'kcal' | 'g' | 'ml';
  quantity: number;
};

export type Meal = {
  id: number | string;
  label: string;
  quantity: number;
  macronutrients: Macronutrient[];
};
export type Category = {
  [key: string]: Meal[];
};

export const categories = {
  breakfast: [
    {
      id: 1,
      label: 'Chips',
      quantity: 1,
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 435 },
        { type: 'proteins', unit: 'g', quantity: 34 },
        { type: 'fats', unit: 'g', quantity: 86 },
        { type: 'carbs', unit: 'g', quantity: 56 },
      ],
    },
    {
      id: 2,
      label: 'Pancakes',
      quantity: 3,
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 543 },
        { type: 'proteins', unit: 'g', quantity: 132 },
        { type: 'fats', unit: 'g', quantity: 32 },
        { type: 'carbs', unit: 'g', quantity: 54 },
      ],
    },
  ],
  lunch: [
    {
      id: 1,
      label: 'Coffe',
      quantity: 1,
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 13 },
        { type: 'proteins', unit: 'g', quantity: 23 },
        { type: 'fats', unit: 'g', quantity: 32 },
        { type: 'carbs', unit: 'g', quantity: 52 },
      ],
    },
    {
      id: 2,
      label: 'Sandwich',
      quantity: 3,
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 658 },
        { type: 'proteins', unit: 'g', quantity: 214 },
        { type: 'fats', unit: 'g', quantity: 43 },
        { type: 'carbs', unit: 'g', quantity: 5485 },
      ],
    },
  ],
  dinner: [
    {
      id: 1,
      label: 'Soup',
      quantity: 1,
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 253 },
        { type: 'proteins', unit: 'g', quantity: 20 },
        { type: 'fats', unit: 'g', quantity: 65 },
        { type: 'carbs', unit: 'g', quantity: 12 },
      ],
    },
    {
      id: 2,
      label: 'Chicken',
      quantity: 1,
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 254 },
        { type: 'proteins', unit: 'g', quantity: 23 },
        { type: 'fats', unit: 'g', quantity: 12 },
        { type: 'carbs', unit: 'g', quantity: 54 },
      ],
    },
  ],
  supper: [
    {
      id: 1,
      label: 'Sandwich',
      quantity: 2,
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 321 },
        { type: 'proteins', unit: 'g', quantity: 4 },
        { type: 'fats', unit: 'g', quantity: 32.3 },
        { type: 'carbs', unit: 'g', quantity: 23 },
      ],
    },
    {
      id: 2,
      label: 'Milk',
      quantity: 1,
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 125 },
        { type: 'proteins', unit: 'g', quantity: 32 },
        { type: 'fats', unit: 'g', quantity: 12 },
        { type: 'carbs', unit: 'g', quantity: 21 },
      ],
    },
  ],
} as const;

const Components: React.FC = () => {
  return (
    <Layout>
      <div className='w-full max-w-md px-2 py-16 sm:px-0'>
        <MealsList categories={categories} />
      </div>
      <section
        className={clsx(
          'fixed bottom-0 left-0 w-full bg-gray-100 p-2 space-y-2'
        )}
      >
        <Progress color='kcal' current={0} max={3000} />
        <div className='grid grid-cols-3 gap-3'>
          <Progress color='proteins' current={123} max={321} />
          <Progress color='fats' current={152} max={321} />
          <Progress color='carbs' current={32} max={123} />
        </div>
      </section>
    </Layout>
  );
};

export default Components;
