import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'plexavor ─ developer';
	const description = "Hey 👋 I'm Plexavor, a developer";

	return {
		title,
		description,
		canonical: `https://plexavor.eu.org/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'plexavor',
			url: `https://plexavor.eu.org/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://plexavor.eu.org/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@plexavor',
			site: '@plexavor',
		},
		...props,
	};
}
