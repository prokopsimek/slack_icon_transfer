import { WebClient } from '@slack/web-api';

export class SlackService {
  private client: WebClient;

  constructor(slackToken: string) {
    this.client = new WebClient(slackToken);
  }

  listIcons = async () => {
    return this.client.emoji.list();
  };

  addIcon = () => {
    return this.client.emoji.add();
  };
}
