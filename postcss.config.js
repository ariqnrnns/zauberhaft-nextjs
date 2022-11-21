module.exports = {
  plugins: {
		"autoprefixer":{},
    "postcss-mixins":{},
    "postcss-import":{},
    "postcss-nested":{},
		"cssnano": {
			preset: [
				"default",
				{
					cssDeclarationSorter: true,
					discardEmpty: true,
					discardOverridden: true,
					discardDuplicates: true,
					discardComments: true,
					mergeIdents: true,
					mergeLonghand: true,
					mergeRules: false,
					minifySelectors: true,
					minifyParams: true,
					minifyGradients: true,
					minifyFontValues: true,
					normalizeWhitespace: true,
					normalizePositions: true,
					normalizeUrl: true,
					normalizeDisplayValues: true,
					reducetransforms: true,
					reduceIdents: true,
					uniqueSelectors: true,
				},
			],
		},
    '@fullhuman/postcss-purgecss':
      process.env.NODE_ENV === 'production' ? {
				content: [
					"./pages/**/*.{js,jsx,ts,tsx}",
					"./components/**/*.{js,jsx,ts,tsx}",
				],
				defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
				safelist: { greedy: [/^dark/, /dark^/, /^html/] },
				keyframes: true,
				variables: true,
				rejected: true,
      } : false

	}
}