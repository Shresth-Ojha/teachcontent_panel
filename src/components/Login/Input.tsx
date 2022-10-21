import { useState } from 'react';
import ts, { JsxElement } from 'typescript';
import './Input.css';

type InputProps = {
	placeholder :string,
	icon: any,
	type: string,
	onChange: (e:any) => void,
	onKeyUp: (e:any) => void,
}

const Input = ({ placeholder, icon, type, onChange, onKeyUp }:InputProps) => {
	const [show_pass, set_show_pass] = useState(false);
	return (
		<div className=' w-100 input d-flex flex-column w-100'>
			<div className='d-flex'>
				<div className=' d-inline input-icon'>{icon}</div>
				<input
					type={show_pass ? 'text' : type || 'text'}
					onKeyUp={onKeyUp}
					onChange={onChange || (() => {})}
					required
					className='input-field w-100'
					placeholder={placeholder}
				/>
				{type === 'password' && (
					<span
						className='purple-link d-flex my-auto cursor-pointer w-100px'
						onClick={() => {
							set_show_pass(!show_pass);
						}}
						
					>
						{show_pass ? 'hide': 'show'}
					</span>
				)}
			</div>
			<div className='purple-line w-100 mt-2'></div>
		</div>
	);
};

export default Input;
