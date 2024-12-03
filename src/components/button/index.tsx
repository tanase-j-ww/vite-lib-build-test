import { HTMLAttributes } from "react";
import "./button.css";

export interface CustomButtonProps {
	hoge: string;
}

export const Button = ({ hoge, ...props }: CustomButtonProps & HTMLAttributes<HTMLButtonElement>) => {
	console.log(hoge);
	return (
		<button
			{...props}
			className="custom-button"
			style={{ backgroundColor: "green", ...props.style }}
		></button>
	);
};
