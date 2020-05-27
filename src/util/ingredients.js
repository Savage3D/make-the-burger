const ingredients = [
	{
		name: 'White bun bottom',
		category: 'No category',
		image: 'white-bun-bottom.png',
	},
	{
		name: 'White bun top',
		category: 'No category',
		image: 'white-bun-top.png',
	},
	{
		name: 'White bun',
		category: 'No category',
		image: 'white-bun-bottom.png',
	},
	{
		name: 'Mini plain naan',
		category: 'Bread',
		image: 'mini-plain-naan.png',
	},
	{
		name: 'Wrap',
		category: 'Bread',
		image: 'wrap.png',
	},
	{
		name: 'Ground-beef patty',
		category: 'Patties & Bacon',
		image: 'ground-beef-patty.png',
	},
	{
		name: 'Lean grilled bacon',
		category: 'Patties & Bacon',
		image: 'lean-grilled-bacon.png',
	},
	{
		name: 'Sliced tomato',
		category: 'Salad',
		image: 'sliced-tomato.png',
	},
	{
		name: 'Mixed lettuce',
		category: 'Salad',
		image: 'mixed-lettuce.png',
	},
	{
		name: 'Sliced celery',
		category: 'Salad',
		image: 'sliced-celery.png',
	},
	{
		name: 'Sliced onion',
		category: 'Salad',
		image: 'sliced-onion.png',
	},
	{
		name: 'Sliced cucumber',
		category: 'Salad',
		image: 'sliced-cucumber.png',
	},
	{
		name: 'Sliced cheese Cheddar',
		category: 'Cheese',
		image: 'sliced-cheese-cheddar.png',
	},
	{
		name: 'Sliced cheese Feta',
		category: 'Cheese',
		image: 'sliced-cheese-feta.png',
	},
	{
		name: 'Crumbled cheese Stilton',
		category: 'Cheese',
		image: 'crumbled-cheese-stilton.png',
	},
	{
		name: 'Mayonnaise',
		category: 'Sauces',
		image: 'mayonnaise.png',
	},
];

const webpackContext = require.context('../assets/ingredients/', false, /\.png/);
ingredients.forEach((ing) => {
	const imgKey = webpackContext.keys().find((k) => k.includes(ing.image));
	if (imgKey) {
		// eslint-disable-next-line no-param-reassign
		ing.imageSrc = webpackContext(imgKey);
	}
});

function getCategories(ingredients) {
	const result = [...new Set(ingredients.map((ing) => ing.category))]
		.filter((cat) => cat !== 'No category');
	result.unshift('All');
	return result;
}

function getCategoryMap(ingredients, categoryList) {
	const result = new Map();
	categoryList.forEach((cat) => result.set(
		cat,
		ingredients.filter((ing) => ing.category === cat),
	));
	result.set(
		'All',
		ingredients.filter((ing) => ing.category !== 'No category'),
	);
	return result;
}

export const categories = getCategories(ingredients);
const categoryMap = getCategoryMap(ingredients, categories);

export function getItemInfo(name) {
	return ingredients.find((ing) => ing.name === name);
}

export function getItemsInfo(category) {
	return categoryMap.get(category);
}
