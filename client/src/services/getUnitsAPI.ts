export const getUnitsAPI = async () => {
  const response = await fetch(`http://${window.location.hostname}:3000/units`);
  if (!response.ok) {
    throw new Error('Failed to fetch units');
  }
  return response.json();
};
