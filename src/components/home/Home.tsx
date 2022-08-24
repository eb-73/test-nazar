import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
	return (
		<div className="flex flex-col items-center gap-20 p-20 my-5 bg-white dark:bg-primary-dark rounded-3xl">
			<div className="flex flex-col items-center gap-4 ">
				<div className="relative w-full overflow-hidden rounded-2xl aspect-w-16 aspect-h-7">
					<Image
						className="relative"
						src={"https://picsum.photos/id/237/600/500"}
						priority={true}
						layout={"fill"}
						objectFit="cover"
					/>
				</div>
				<div>
					<p className="text-xl font-medium leading-6 text-typo-main dark:text-white">
						شهر آرکوزلو یک حومه مسکونی ممتاز پورتو است که از بسیاری
						جهات دارای زمین گلف 9 سوراخ معروف ، ویلاهای مجلل و عمارت
						است. خود میرامار به عنوان مقصدی برای تعطیلات عمومی در
						نظر گرفته می شود که پرتغالی ها از مناطق همسایه آن را
						دوست دارند. با این حال ، این ساحل هنوز به عنوان یک مقصد
						گردشگری بین المللی چندان مشهور نشده است ، که به
						بازدیدکنندگانش مکانی برای لذت بردن می دهد.
					</p>
				</div>
			</div>
			<Link href="/about">
				<a>
					<Button
						variant="contained"
						endIcon={<ArrowBack />}
						sx={{ width: "172px", height: "42px" }}
					>
						درباره ما
					</Button>
				</a>
			</Link>
		</div>
	);
};

export default Home;
