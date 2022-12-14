import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Home from "@/components/home/Home";
import { Fragment } from "react";
import { getLayout } from "@/components/layout/PageLayout";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
	const translations = await serverSideTranslations(locale as string, [
		"common",
	]);
	return {
		props: {
			...translations,
		},
		revalidate: 60,
	};
};

type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const IndexPage = (props: IndexPageProps) => {
	return (
		<Fragment>
			<Home />
		</Fragment>
	);
};
IndexPage.getLayout = getLayout;
export default IndexPage;
