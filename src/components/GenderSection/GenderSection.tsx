import { RadioGroup } from '@headlessui/react';
import React, { useState } from 'react';

import CheckIcon from '@/icons/CheckIcon';

const genders = [
  {
    name: 'Male',
  },
  {
    name: 'Female',
  },
];

const GenderSection: React.FC = ({}) => {
  const [selected, setSelected] = useState(genders[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className='block mb-5'>Gender</RadioGroup.Label>
      <div className='space-y-2'>
        {genders.map((gender) => (
          <RadioGroup.Option
            key={gender.name}
            value={gender}
            className={({ active, checked }) =>
              `${
                active
                  ? 'ring-2 ring-offset-2 ring-offset-accent-300 ring-white ring-opacity-60'
                  : ''
              }
                  ${
                    checked
                      ? 'bg-accent-900 bg-opacity-75 text-white'
                      : 'bg-white'
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
            }
          >
            {({ checked }) => (
              <>
                <div className='flex items-center justify-between w-full'>
                  <div className='flex items-center text-sm'>
                    <RadioGroup.Label
                      as='p'
                      className={`font-medium  ${
                        checked ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {gender.name}
                    </RadioGroup.Label>
                  </div>
                  <div className='flex-shrink-0 text-white'>
                    <CheckIcon className='w-6 h-6' />
                  </div>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default GenderSection;
