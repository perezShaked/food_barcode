export const ADD_NEW_CATEGORY = `
INSERT INTO public.categories(
	category_name, unit_id, reorder_quantity_level, reorder_count_level)
	VALUES ($1, $2, $3, $4);`;

export const ADD_NEW_PRODUCT = `
INSERT INTO public.products(
	barcode, company, product_name, quantity, category_id )
	VALUES($1, $2, $3, $4, $5)`;
