import { Input, Form, Row, Col } from "antd";
import TestButton from "../components/Button";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
margin-left: 25%;
`;

const Title = styled.h1`
font-size: 30px;
`;

const validator = {
  require: {
    required: true,
    message: "Enter First Name",
  },
};

const validator1 = {
  require: {
    required: true,
     type: "email",
     message: "Enter a valid email address!",
  },
};

const validator2 = {
  require: {
    required: true,
    pattern: `[\+]?[(]?[0-9]{3}[)]?[-\s\]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`,
    message: "Enter valid Phone Number",
  },
  
};
const validator3 = {
  require: {
    required: true,
    message: "Please input your password!",
  },
};

function Register() {
  
  const [fname, setFirstName] = useState("");
  const [lname,setLastname]= useState("");
  const [email,setEmail]= useState("");
  
     const submit = (e) => {
    e.preventDefault();
    
  };
  let obj={
    fname:fname,
    lname:lname,
    email:email
  };
  console.log(obj);
  
  return (
    <Wrapper className="App">
      <Form onSubmit={submit} style={{ textAlign: "left", width: "800px" }}>
        <Row>
          <Col span={11} push={6}>
            <Title>Lets Create an account</Title>
          </Col>
        </Row>
        <Row>
          <Col span={5} push={5} offset={1}>
            <label style={{ fontWeight: "bold" }}>First Name</label>
            <Form.Item name="fname" value={fname} rules={[validator.require]} hasFeedback>
              <Input name="fname" onChange={(e)=> setFirstName(e.target.value)} />
            </Form.Item>
          </Col>

          <Col span={5} push={5} offset={1}>
            <label style={{ fontWeight: "bold" }}>Last Name</label>

            <Form.Item name="lname" value={lname} rules={[validator.require]} hasFeedback>
              <Input  name="lname" onChange={(e)=> setLastname(e.target.value)} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11} push={6}>
            <label style={{ fontWeight: "bold" }}>Email</label>
            <Form.Item name="email" value={email} rules={[validator1.require]} hasFeedback>
              <Input name="email" onChange={(e)=> setEmail(e.target.value)} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={11} push={6}>
            <label style={{ fontWeight: "bold" }}>Phone Number</label>
            <Form.Item
              name="phone number"
              rules={[validator2.require]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11} push={6}>
            <label style={{ fontWeight: "bold" }}>Password</label>

            <Form.Item
              type="password"
              name="password"
              rules={[validator3.require]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11} push={6}>
            By registering, you to Gaize
            <a href=""> Terms of use and Privacy Policy</a>
          </Col>
        </Row>
        <Row>
          <Col span={11} push={6}>
            <Form.Item>
            <TestButton value={"Register"} type={"submit"}></TestButton>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11} push={6}>
            <br />
            <br />
            Already have an account?<a href=""> Sign in</a>
          </Col>
        </Row>
      </Form>
    </Wrapper>
  );
}
export default Register;
