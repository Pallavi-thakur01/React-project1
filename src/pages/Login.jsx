import { Form, Row, Col } from "antd";
import TestButton from "../components/Button";
import InputField from "../components/Input";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const Wrappe = styled.div`
margin-top: 180px;
margin-left:400px;
 `;

 const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



function Login () {
  const navigate = useNavigate();
  const goToregister = () => {
    navigate("/Register");
  };
  const [email,setEmail]= useState("");
  const submit = (e) => {
 e.preventDefault();
 
};
let obj={

 email:email
};
console.log(obj);

  return (
    <Wrappe className="App">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col span={11} push={2}>
            <h1>Login </h1>
          </Col>
        </Row>

        <Row>
          <Col span={22} push={2}>
            <p style={{ fontWeight: "bold", color: "gray" }}>
              Please Enter your email address and password to login.{" "}
            </p>
          </Col>
        </Row>

        <Form.Item
          type="email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <InputField type="text" placeholder="Email" required   />
        </Form.Item>

        <Form.Item
          type="password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <InputField placeholder="Password" type="password" />
          <Link to="/Forget"> Forget your Password?</Link>
          <br />
        </Form.Item>

        <Row style={{ marginTop: "22px", marginLeft: "22%" }}>
          <Col span={16}>
            <Form.Item>
              <TestButton
                value={"Login"}
                type={"submit"}
                onclick={goToregister}
              ></TestButton>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Wrappe>
  );
}

export default Login;
