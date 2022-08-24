import { ReactNode } from "react";
import Header from "@/components/navbar/Header";

interface PageLayoutProps {
	children?: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<div className="">
			<Header />
			<main>{children}</main>
		</div>
	);
};

export const getLayout = (page: ReactNode) => {
	return <PageLayout>{page}</PageLayout>;
};

export default PageLayout;
