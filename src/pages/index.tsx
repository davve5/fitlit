import React from 'react';

import BottomProgress from '@/components/BottomProgress/BottomProgress';
import Header from '@/components/Layouts/Header';
import Layout from '@/components/Layouts/Layout.server';
import MealsList from '@/components/MealsList/MealsList';
import Seo from '@/components/Seo';

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
      unit: 'g',
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
      unit: 'g',
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
      unit: 'ml',
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
      unit: 'g',
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
      unit: 'ml',
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
      unit: 'g',
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
      unit: 'g',
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
      unit: 'ml',
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 125 },
        { type: 'proteins', unit: 'g', quantity: 32 },
        { type: 'fats', unit: 'g', quantity: 12 },
        { type: 'carbs', unit: 'g', quantity: 21 },
      ],
    },
    {
      id: 3,
      label: 'Sandwich',
      quantity: 2,
      unit: 'g',
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 321 },
        { type: 'proteins', unit: 'g', quantity: 4 },
        { type: 'fats', unit: 'g', quantity: 32.3 },
        { type: 'carbs', unit: 'g', quantity: 23 },
      ],
    },
    {
      id: 4,
      label: 'Milk',
      quantity: 1,
      unit: 'ml',
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 125 },
        { type: 'proteins', unit: 'g', quantity: 32 },
        { type: 'fats', unit: 'g', quantity: 12 },
        { type: 'carbs', unit: 'g', quantity: 21 },
      ],
    },
    {
      id: 5,
      label: 'Sandwich',
      quantity: 2,
      unit: 'g',
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 321 },
        { type: 'proteins', unit: 'g', quantity: 4 },
        { type: 'fats', unit: 'g', quantity: 32.3 },
        { type: 'carbs', unit: 'g', quantity: 23 },
      ],
    },
    {
      id: 6,
      label: 'Milk',
      quantity: 1,
      unit: 'ml',
      macronutrients: [
        { type: 'kcal', unit: 'kcal', quantity: 125 },
        { type: 'proteins', unit: 'g', quantity: 32 },
        { type: 'fats', unit: 'g', quantity: 12 },
        { type: 'carbs', unit: 'g', quantity: 21 },
      ],
    },
  ],
} as const;

const HomePage = () => {
  return (
    <Layout>
      <Seo title='Home' />
      <Header />

      <MealsList categories={categories} />
      <BottomProgress />
    </Layout>
  );
};

export default HomePage;

/**
 * Default info that you should change:
 * components/Seo.tsx
 * next-sitemap.js
 * public/favicon
 *
 * Please refer to the README.md
 */
