import { useState, useEffect } from 'react';
import { getUnits } from '../services';

export function useUnits() {
  const [units, setUnits] = useState([]);
  const [unitsError, setUnitsError] = useState(null);

  useEffect(() => {
    getUnits()
      .then((data) => setUnits(data))
      .catch((err) => setUnitsError(err));
  }, []);

  return { units, unitsError };
}
