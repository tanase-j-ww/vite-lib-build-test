import { ButtonProps, Button as MuiButton } from "@mui/material";
import "./button.css";

export interface CustomButtonProps {
	hoge: string;
}

export const Button = ({ hoge, ...props }: CustomButtonProps & ButtonProps) => {
	console.log(hoge);
	return (
		<MuiButton
			{...props}
			className="custom-button"
			style={{ backgroundColor: "green", ...props.style }}
		></MuiButton>
	);
};
