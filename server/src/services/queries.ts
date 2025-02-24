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
	WHERE category_name = $1
	LIMIT 1`;

export const GET_CATEGORY_BY_ID = `
SELECT 
	category_id
	FROM public.categories
	WHERE category_id = $1
	LIMIT 1`;

export const GET_CATEGORIES = `
SELECT 
	category_id, category_name, unit_id
	FROM public.categories`;

export const GET_PRODUCT_BY_BARCODE = `
SELECT 
	product_id
	FROM public.products
	WHERE barcode = $1`;
