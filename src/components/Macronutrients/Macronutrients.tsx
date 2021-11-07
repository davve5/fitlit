import React from 'react';

import Chip from '@/components/Chip/Chip';

const macronutrientsColors = {
  carbs: 'bg-carbs-200 text-carbs-800',
  fats: 'bg-fats-200 text-fats-800',
  kcal: 'bg-kcal-200 text-kcal-800',
  proteins: 'bg-proteins-200 text-proteins-800',
} as const;

enum MacronutrientsUnits {
  'g',
  'kcal',
  'ml',
}

interface MacronutrientsProps {
  unit: keyof typeof MacronutrientsUnits;
  quantity: number;
  color: keyof typeof macronutrientsColors;
}

const Macronutrients = ({ color, unit, quantity }: MacronutrientsProps) => (
  <Chip className='mr-2 last:mr-0' color={macronutrientsColors[color]}>
    {quantity} {unit}
  </Chip>
);

export default Macronutrients;
