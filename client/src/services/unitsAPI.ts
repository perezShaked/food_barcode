export const fetchUnits = async () => {
  const response = await fetch('http://localhost:3000/units');
  if (!response.ok) {
    throw new Error('Failed to fetch units');
  }
  return response.json();
};
