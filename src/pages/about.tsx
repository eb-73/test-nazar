import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fragment } from "react";
import About from "@/components/about/About";
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

type AboutPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const AboutPage = (props: AboutPageProps) => {
	return (
		<Fragment>
			<About />
		</Fragment>
	);
};
AboutPage.getLayout = getLayout;

export default AboutPage;
