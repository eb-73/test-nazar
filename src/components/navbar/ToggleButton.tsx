import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";
import clsx from "clsx";
const ToggleButton = () => {
	const { theme, setTheme } = useTheme();
	const [check, setCheck] = useState(false);
	useEffect(() => {
		const themeCash = localStorage.getItem("theme");
		if (themeCash === "dark") {
			setCheck(true);
		}
	}, []);
	const onChangeHandler = () => {
		setTheme(theme === "dark" ? "light" : "dark");
		setCheck((prevState) => !prevState);
	};
	return (
		<div className="flex items-center gap-2 ">
			<MoonIcon
				className={clsx(
					"w-4",
					check ? "text-[#FFB320]" : "text-typo-main"
				)}
			/>
			<label className="switch">
				<input
					type="checkbox"
					onClick={onChangeHandler}
					checked={check}
				/>
				<span className="slider round"></span>
			</label>
			<SunIcon
				className={clsx("w-5", check ? "text-white" : "text-[#FFB320]")}
			/>
		</div>
	);
};

export default ToggleButton;
