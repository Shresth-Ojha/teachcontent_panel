import { useEffect, useState } from 'react';
import LoadingIcon from './loading-purple.svg';


const LoadAndRender = ({ promise, children }:any) => {
	console.log(promise)
	useEffect(() => {
		promise().then((data:any) => {
			set_loading(false);
		}); // eslint-disable-next-line
	}, []);

	const [loading, set_loading] = useState(true);

	return (
		<div className='load-and-render w-100 min-vh-100 d-flex'>
			{loading ? (
				<div className='d-flex mx-auto my-auto loading'>
					<img src={LoadingIcon} alt='' srcSet='' />
				</div>
			) : (
				children
			)}
		</div>
	);
};

export default LoadAndRender;
