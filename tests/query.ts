import gql from 'graphql-tag';

export const getAllCarsQuery = gql`
    query allCars {
        allCars {
            brand
            model
        }
    }
`;
