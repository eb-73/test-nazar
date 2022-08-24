import { Button } from "@mui/material";
import { Person } from "@mui/icons-material";
import Link from "next/link";
import ToggleButton from "@/components/navbar/ToggleButton";
const Header = () => {
	return (
		<div className="sticky top-0 w-full text-black bg-white shadow-sm rounded-3xl dark:bg-primary-dark dark:text-white ">
			<div className="container flex items-center justify-between p-4">
				<div className="flex gap-4">
					<Link href="/">
						<a>
							<h1 className="text-xl ">صفحه نخست</h1>
						</a>
					</Link>
					<Link href="/about">
						<a>
							<h1 className="text-xl">درباره ما</h1>
						</a>
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<ToggleButton />
					<Button
						variant="contained"
						endIcon={<Person />}
						sx={{ width: "172px", height: "42px" }}
					>
						ثبت نام
					</Button>
					<Button
						variant="outlined"
						sx={{ width: "172px", height: "42px" }}
					>
						ورود
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
