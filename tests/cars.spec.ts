import * as helper from './helper'

describe('Configurator checkout', () => {

  test('Retrieve all cars', async () => {
    const carList = await helper.getAllCars();
    expect(carList.length).toEqual(4);
    expect(carList.find(car => car.model === "Model Y")).toEqual(expect.anything())
  });
});
