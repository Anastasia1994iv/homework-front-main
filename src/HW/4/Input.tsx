import { ChangeEvent } from 'react';

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (value: string)=>void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = ({currentText, setCurrentText}: InputPropsType) => {

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentText(event.currentTarget.value)// НУЖНО ДОПИСАТЬ
	};

	return (
	  <input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler} />
	);
};
