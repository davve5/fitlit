import React from 'react';

import BarcodeScanner from '@/components/BarcodeScanner/BarcodeScanner';
import Layout from '@/components/Layouts/Layout';


interface ComponentsProps {
}

const Components = ({  }: ComponentsProps) => {

		return (
				<Layout>
					<BarcodeScanner />
				</Layout>
		)
};

export default Components;
