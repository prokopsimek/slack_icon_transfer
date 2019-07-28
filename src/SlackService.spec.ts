import { SlackService } from './SlackService';
import { listIconResponseMock } from './__MOCKS__';
import { nockSlackApi } from './testHelpers';

describe('SlackService', () => {
  let service: SlackService;

  beforeAll(() => {
    service = new SlackService('anyToken');
  });

  it('works', async () => {
    nockSlackApi.post('/emoji.list').reply(200, listIconResponseMock);
    const emojis = await service.listIcons();
    expect(emojis).toEqual(listIconResponseMock);
  });
});
