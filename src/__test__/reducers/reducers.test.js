import reducer from '../../reducers/index';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar initial State', () => {
    expect(reducer({}, '')).toEqual({});
  });
  // test('ADD_TO_CART', () => {
  //   const initialState = {
  //     cart: [],
  //   };
  //   const payLoad = ProductMock;
  //   const action = {
  //     type: 'ADD_TO_CART',
  //     payLoad,
  //   };
  //   const expected = {
  //     cart: [ProductMock],
  //   };
  //   expect(reducer(initialState, action)).toEqual(expected);
  // });
});
