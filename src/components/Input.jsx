import React from "react";
import { Input,Row,Col} from "antd";
import "../App.css";

const InputField = ({ value, label, placeholder, type, onChange }) => {
   
  
    return (
      <div >
        <Row style={{ marginBottom: "2px" }}>
           <Col span={22} push={8}>
        {label && <label style={{ fontWeight: "bold" }} htmlFor="input-field">{label}</label>}
        <Input
          type={type}
          value={value}
          
          placeholder={placeholder}
          required
         >

         </Input>
         </Col>
         </Row>
      </div>
    );
  };
  
  export default InputField;