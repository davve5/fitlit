import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';

import useMobileDetect from '@/components/BarcodeScanner/useMobileDetect'

interface CameraDevice {
		id: string;
		label: string;
}

const getUserCamera = async () => {
		try {
				const devices: CameraDevice[] = await Html5Qrcode.getCameras();
				return devices[devices.length - 1];
		} catch {
				throw `Unable to find any cameras`;
		}
}

interface BarcodeScannerProps {}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({  }) => {
		const [barcode, setBarcode] = useState('');

		useEffect(() => {
				const config = { fps: 10, qrbox: { width: 250, height: 250 } };
				const scanner = new Html5Qrcode('reader', { verbose: false });

				const onScann = (decodedText: string) => {
						setBarcode(decodedText);
				};

				const turnOnScanner = async () => {
						const camera = await getUserCamera();
						// eslint-disable-next-line @typescript-eslint/no-empty-function
						await scanner.start(camera.id, config, onScann, () => {});
				}

				const turnOfScanner = async () => {
						await scanner.stop();
				}

				turnOnScanner();
				return (() => { turnOfScanner() });
		}, []);

		return (
				<div id='reader' className='h-screen' />
		);
}

export default BarcodeScanner;
