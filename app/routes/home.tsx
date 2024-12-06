import { useAtomValue } from 'jotai';
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
  const session = useAtomValue(sessionAtom);
  return (
    <main>
      <h1>{loaderData.title}</h1>
      <h5>hello: {session.name}</h5>
      <Link to="/sign/sign-in">Sign in</Link>
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
