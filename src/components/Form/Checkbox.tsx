import React from 'react';

interface CheckboxProps {
		id: string;
		name: string;
		children: React.ReactNode;
		disabled?: boolean;
}

const Checkbox = ({ id, name, children, disabled = false }: CheckboxProps) => (
		<div className="flex items-center">
				<input id={id} name={name} type="checkbox" disabled={disabled} />
				<label htmlFor={id} className="ml-2 block text-sm text-gray-900"
				>
						{children}
				</label>
		</div>
);

export default Checkbox;
