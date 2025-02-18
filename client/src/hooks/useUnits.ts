import { useState, useEffect } from 'react';
import { fetchUnits } from '../services';

export function useUnits() {
  const [units, setUnits] = useState([]);
  const [unitsError, setUnitsError] = useState(null);

  useEffect(() => {
    fetchUnits()
      .then((data) => setUnits(data))
      .catch((err) => setUnitsError(err));
  }, []);

  return { units, unitsError };
}
