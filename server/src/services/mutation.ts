export const ADD_NEW_CATEGORY = `
INSERT INTO public.categories(
	category_name, unitId, reorder_quantity_level, reorder_count_level)
	VALUES ($1, $2, $3, $4);`;
