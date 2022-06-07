import React from 'react';
import { useLogin } from '@pankod/refine-core';
import { Row, Col, AntdLayout, Card, Typography, Form, Input, Button } from '@pankod/refine-antd';

const { Title } = Typography;

export interface ILoginForm {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const [form] = Form.useForm<ILoginForm>();

  const { mutate: login } = useLogin<ILoginForm>();

  const CardTitle = (
    <Title level={3} className="title">
      Sign in your account
    </Title>
  );

  return (
    <AntdLayout
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #63386a 0%, #310438 100%)',
        backgroundSize: 'cover',
      }}
    >
      <Row
        justify="center"
        align="middle"
        style={{
          height: '100vh',
        }}
      >
        <Col xs={22}>
          <div
            className="container"
            style={{
              maxWidth: '408px',
              margin: 'auto',
            }}
          >
            {/* <div
              className="imageContainer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <img src="./logo.svg" alt="Logo" />
            </div> */}
            <Card
              title={CardTitle}
              headStyle={{ borderBottom: 0 }}
              style={{
                textAlign: 'center',
                color: '#626262',
                fontSize: '30px',
                letterSpacing: '-0.04em',
              }}
            >
              <Form<ILoginForm>
                layout="vertical"
                form={form}
                onFinish={(values) => {
                  login(values);
                }}
                requiredMark={false}
              >
                <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                  <Input size="large" placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true }]}
                  style={{ marginBottom: '12px' }}
                >
                  <Input type="password" placeholder="●●●●●●●●" size="large" />
                </Form.Item>
                <Button type="primary" size="large" htmlType="submit" block>
                  Sign in
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </AntdLayout>
  );
};
