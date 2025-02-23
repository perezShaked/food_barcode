export const GET_UNITS = `
SELECT 
	unit_id, unit_name
	FROM public.product_unit;`;

export const GET_UNIT_BY_ID = `
SELECT 
	unit_id
	FROM public.product_unit
	WHERE unit_id = $1;`;

export const GET_CATEGORY_BY_NAME = `
SELECT 
	category_id
	FROM public.categories
	WHERE category_name = $1`;

export const GET_CATEGORIES = `
SELECT 
	category_id, category_name, unit_id
	FROM public.categories`;
