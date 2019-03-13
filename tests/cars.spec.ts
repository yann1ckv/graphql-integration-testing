import * as helper from './helper'

describe('Configurator checkout', () => {

  test('Retrieve all cars', async () => {
    const carList = await helper.getAllCars();
    console.log(carList)
    expect(carList.length).toEqual(4);
  });
});
