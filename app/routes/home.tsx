import { Button } from 'antd';
import { useAtom } from 'jotai';
import { Link } from 'react-router';

import type { Route } from './+types/home';

import { sessionAtom } from '~/states/session';

export function clientLoader() {
  return { title: 'Home Page' };
}

export const meta: Route.MetaFunction = ({ data }) => {
  return [
    { title: data?.title ?? 'Loading...' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
};

export default function Home({ loaderData }: Route.ComponentProps) {
  const [session, setSession] = useAtom(sessionAtom);
  return (
    <main>
      <h1>{loaderData.title}</h1>
      <h5>hello: {session?.name}</h5>
      <div>
        <Link to="/sign/sign-in">
          <Button type="primary">Sign in</Button>
        </Link>
        <Button onClick={() => setSession(null)}>Sign out</Button>
      </div>
      <ul>
        <li>
          <a href="https://reactrouter.com/docs" target="_blank" rel="noreferrer">React Router Docs</a>
        </li>
        <li>
          <a href="https://rmx.as/discord" target="_blank" rel="noreferrer">Join Discord</a>
        </li>
      </ul>
    </main>
  );
}
