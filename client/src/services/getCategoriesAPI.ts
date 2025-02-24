export const getCategoriesAPI = async () => {
  const response = await fetch(`http://${window.location.hostname}:3000/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  return response.json();
};
