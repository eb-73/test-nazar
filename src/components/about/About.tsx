import { ArrowBack } from "@mui/icons-material";
import { Button, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const About = () => {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setTimeout(() => {
				setLoaded(true);
			}, 2000);
		}
	}, []);
	return (
		<div>
			<div className="flex flex-col items-center p-20 my-5 bg-white gap-28 rounded-3xl dark:bg-primary-dark ">
				<div className="grid grid-cols-2 gap-4">
					{loaded && (
						<div className="relative w-full overflow-hidden rounded-[98px] aspect-w-1 aspect-h-1">
							<Image
								className="relative"
								src={"https://picsum.photos/id/237/600/500"}
								priority={true}
								layout="fill"
								objectFit="cover"
							/>
						</div>
					)}
					{!loaded && (
						<div className="flex justify-center w-full aspect-w-1 aspect-h-1 rounded-[98px] overflow-hidden">
							<Skeleton
								variant="rectangular"
								className="!h-full dark:bg-white"
							/>
						</div>
					)}
					<div className="flex flex-col items-center self-end gap-4">
						<h2 className="text-3xl font-bold text-typo-main dark:text-white">
							درباره ما
						</h2>
						<p className="text-xl font-medium leading-[48px] text-justify text-typo-main dark:text-white">
							نکته مهمی که در بیشتر سایتهای ایرانی توجهی به آن
							نمیشود طراحی صفحه درباره ما یا همان About Us است.
							اکثر افراد در این بخش مطالبی طولانی و خسته کننده
							برای کاربر و یا نوشته ای کوتاه و ناقص قرار میدهند که
							میتواند اعتبار سایت یا شرکت شما را زیر سوال ببرد.
						</p>
					</div>
				</div>

				<Link href="/">
					<a>
						<Button
							variant="outlined"
							endIcon={<ArrowBack />}
							sx={{ width: "172px", height: "42px" }}
						>
							صفحه اصلی
						</Button>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default About;
