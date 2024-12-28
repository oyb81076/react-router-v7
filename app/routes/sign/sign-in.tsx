import { Button, Form, Input } from 'antd';
import { getDefaultStore } from 'jotai';
import { redirect, useSubmit } from 'react-router';

import { Route } from './+types/sign-in';

import { UserSession } from '~/apis/sessionApi';
import { sessionAtom } from '~/states/session';
import sleep from '~/utils/sleep';

export async function clientAction({ request }: Route.ActionArgs) {
  console.log('run in client');
  console.log(request.url);
  const json = await request.json() as { username: string };
  console.log('do json', json);
  await sleep();
  const output: UserSession = { id: 'newid', name: json.username, root: true };
  getDefaultStore().set(sessionAtom, output);
  return redirect('/');
}

export default function SignIn({ }: Route.ComponentProps) {
  const submit = useSubmit();
  return (
    <div style={{ width: 300 }}>
      <Form
        method="POST"
        onFinish={(json) => {
          submit(json, { action: '?type=1', method: 'POST', encType: 'application/json' });
        }}
      >
        <Form.Item name="username" label="用户名">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password autoComplete="current-password" />
        </Form.Item>
        <Button htmlType="submit">提交</Button>
      </Form>
    </div>
  );
}
