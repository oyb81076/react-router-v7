import sleep from '~/utils/sleep';

export interface UserSession {
  id: string;
  name: string;
  root: boolean;
}

export async function getUserSession(): Promise<UserSession> {
  await sleep();
  return {
    id: '591132597044641866',
    name: 'ouyangbin81076@gmail.com',
    root: false,
  };
}
