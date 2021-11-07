import React from 'react';

import { IoMdArrowDropdown } from 'react-icons/io';
import clsx from 'clsx';

interface CalendarProps {}

const dates: number[] = [...Array(50)];


const Calendar = ({  }: CalendarProps) => (
		<div className='flex items-center flex-col justify-center w-screen'>
				<div className='text-blue-600 text-3xl w-10 h-10 flex items-center justify-center'>
						<IoMdArrowDropdown />
				</div>
				<div
						className='flex flex-row align-center overflow-x-hidden w-screen'
				>
						{
								dates.map((_, index) => (
										<span
												className={clsx(
														'w-10 h-10 mx-2',
														'select-none cursor-pointer rounded-full',
														'bg-blue-100 text-blue-600',
														'flex items-center justify-center font-semibold',
												)}
												key={index}
										>
												{index % 31 + 1}
										</span>
								))
						}
				</div>
		</div>
);

export default Calendar;
