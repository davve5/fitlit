import React from 'react';
import { FiPlus } from 'react-icons/fi';

import Button from '@/components/Buttons/Button';
import MealItem from '@/components/MealsList/MealItem';

interface MealsListProps {}

const meals = [
		{
				title: `Cheese`,
				quantity: 2,
		}, {
				title: `Chicken's leg`,
				quantity: 3,
		}, {
				title: `Fish`,
				quantity: 1,
		}, {
				title: `Tomato`,
				quantity: 1,
		},
]

const MealsList = ({  }: MealsListProps) => (
		<section className='bg-gray-100 rounded-lg p-4 m-4'>
				<header className='text-lg font-semibold flex justify-between mb-2'>
						<h4>Breakfast</h4>
				</header>
				<Button
						variant='secondary'
						className='w-full'
						icon={<FiPlus />}
				/>
				<ul className='space-y-4'>
						{meals.map((meal, index) => (
								<MealItem {...meal} key={index} />
						))}
				</ul>
		</section>
);

export default MealsList;
