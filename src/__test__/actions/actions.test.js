import actions from '../../actions/index';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('addToCart Action', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
  // test('removeFromCart', () => {
  //   const payLoad = ProductMock;
  //   const expected = {
  //     type: 'REMOVE_FROM_CART',
  //     payLoad,
  //   };
  //   expect(actions.removeFromCart(payLoad)).toEqual(expected);
  // });
});
