import { FormEvent, useState } from "react";
import { Form, Input, Button, Checkbox, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axiox from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/custom-hooks/useAuth";

const { Title } = Typography;

interface Values {
  email: string;
  password: string;
  remember: boolean;
}

export default function Login() {
  const [form] = Form.useForm();
  const [error, setError] = useState("");
  //let history = useHistory();
  let navigate = useNavigate();

  const { setAuthentication } = useAuth();


  const onFinish = (values: Values) => {
    let item: { email: string, password: string } = {
      email: values.email,
      password: values.password,
    }

    // e.preventDefault();
    axiox
      .post("http://localhost:5000/api/auth/login", item)
      .then((response) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setAuthentication(true); // Update the authentication status
        navigate("/user");
      })
      .catch((error) => setError(error.response.data.message));
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    console.log("Handle registration logic here");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ width: 500 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Title level={2}>Training App</Title>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Form
          name="normal_login"
          className="login-form"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="password"
              type="password"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
            Don't have an account{" "}
            <a href="" onClick={handleRegister}>
              sign up
            </a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};