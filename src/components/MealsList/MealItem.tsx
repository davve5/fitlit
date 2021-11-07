import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';

import IconButton from '@/components/Buttons/IconButton';
import Macronutrients from '@/components/Macronutrients/Macronutrients';
import Modal from '@/components/Modal/Modal';

interface MealItemProps {
		title: string;
		quantity: number;
}

const MealItem = ({ title, quantity }: MealItemProps) => {
		const [isOpen, setIsOpen] = useState<boolean>(false);

		return (
				<>
						<Modal isOpen={isOpen} setIsOpen={setIsOpen} />
						<li className='bg-white rounded-lg p-4 cursor-pointer' onClick={() => setIsOpen(true)}>
								<header className='mb-2 font-bold flex text-lg items-center justify-between'>
										<div className='flex items-center'>
												<span className='bg-orange-400 rounded-full w-2 h-2' />
												<h5>{quantity}x {title}</h5>
										</div>
										<IconButton><BiTrash /></IconButton>
								</header>
								<div className='flex items-center mb-2'>
										<Macronutrients color='kcal' unit='kcal' quantity={564} />
										<Macronutrients color='proteins' unit='g' quantity={123} />
										<Macronutrients color='fats' unit='g' quantity={32} />
										<Macronutrients color='carbs' unit='g' quantity={54} />
								</div>
						</li>
				</>
		);
}

export default MealItem;
