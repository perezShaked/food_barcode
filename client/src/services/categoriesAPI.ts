export const addNewCategoryAPI = async (
  categoryName: string,
  unitId: number,
  reorderQuantityLevel: number | '',
  reorderCountLevel: number | ''
) => {
  try {
    const response = await fetch(`http://${window.location.hostname}:3000/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category_name: categoryName,
        unit_id: unitId,
        reorder_quantity_level: reorderQuantityLevel ? reorderQuantityLevel : 0,
        reorder_count_level: reorderCountLevel ? reorderQuantityLevel : 0,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('אירעה שגיאה לא ידועה');
    }
  }
};
