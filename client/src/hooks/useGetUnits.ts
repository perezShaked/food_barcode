import { useState, useEffect } from 'react';
import { getUnitsAPI } from '../services';

export function useGetUnits() {
  const [units, setUnits] = useState([]);
  const [unitsError, setUnitsError] = useState(null);

  useEffect(() => {
    getUnitsAPI()
      .then((data) => setUnits(data))
      .catch((err) => setUnitsError(err));
  }, []);

  return { units, unitsError };
}
