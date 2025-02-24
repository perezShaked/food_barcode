export const addNewProductAPI = async (
  barcode: number,
  productName: string,
  categoryId: number,
  company: string,
  quantity: number
) => {
  try {
    const response = await fetch(`http://${window.location.hostname}:3000/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        barcode,
        product_name: productName,
        category_id: categoryId,
        company,
        quantity,
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
