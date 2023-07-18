import { useMemo } from 'react';
import { Country } from '../types/country';
import { Regions } from '../types/global';

export const useFilterCountriesByQuery = (
  countries: Country[],
  query: string
) =>
  useMemo(() => {
    return countries.filter((country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, countries]);

export const useFilterCountriesByRegions = (
  countries: Country[],
  regions: Regions[]
) =>
  useMemo(() => {
    if (regions.length > 0) {
      return countries.filter((country) =>
        regions.some((reg) => country.region.toLowerCase() === reg)
      );
    }
    return countries;
  }, [regions, countries]);

export const useFilterCountriesByPopulation = (
  countries: Country[],
  populationValues: { min: number; max: number }
) =>
  useMemo(
    () =>
      countries.filter(
        ({ population }) =>
          population >= populationValues.min &&
          population <= populationValues.max
      ),
    [countries, populationValues]
  );

export const useFilterCountries = function (
  countries: Country[],
  query: string,
  regions: Regions[],
  population: { min: number; max: number }
) {
  const filteredByQuery = useFilterCountriesByQuery(countries, query);
  const filteredByQueryAndRegions = useFilterCountriesByRegions(
    filteredByQuery,
    regions
  );
  const filteredByQueryRegionsAndPopulation = useFilterCountriesByPopulation(
    filteredByQueryAndRegions,
    population
  );

  return filteredByQueryRegionsAndPopulation;
};
