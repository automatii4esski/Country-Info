import { useMemo } from 'react';
import { Country } from '../types/country';
import { Regions } from '../types/global';

export const useFilterCountries = function (
  countries: Country[],
  query: string,
  regions: Regions[]
) {
  const filterByQueryCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, countries]);

  const filterByQueryAndRegionsCountries = useMemo(() => {
    if (regions.length > 0) {
      return filterByQueryCountries.filter((country) =>
        regions.some((reg) => country.region.toLowerCase() === reg)
      );
    }
    return filterByQueryCountries;
  }, [regions, filterByQueryCountries]);

  return filterByQueryAndRegionsCountries;
};
