import {graphQLClient} from './client';
import {getAllCarsQuery} from './query';

export async function getAllCars(): Promise<Array<object>> {
  const {data: {allCars}} = <any> await graphQLClient.query({
    query: getAllCarsQuery,
  });
  return allCars;
}
