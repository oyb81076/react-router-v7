import { Button, Form, Input } from 'antd';
import { useSubmit } from 'react-router';

import { Route } from './+types/sign-in';

import sleep from '~/utils/sleep';

export async function clientAction({ request }: Route.ActionArgs) {
  console.log('run in client');
  console.log(request.url);
  const json = await request.json();
  console.log('do json', json);
  await sleep();
  return { done: 'just do it' };
}

export default function SignIn({ actionData }: Route.ComponentProps) {
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
      {actionData && actionData.done}
    </div>
  );
}
