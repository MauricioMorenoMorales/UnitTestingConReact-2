import getData from '../../utils/getData';

describe('Fetch Api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Llamar una api y retornar los datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com').then(response => {
      expect(response.data).toEqual('12345');
    });
  });
});
