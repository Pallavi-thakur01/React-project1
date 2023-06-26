import React from "react";
import { Button, Row, Col } from "antd";
import "../App.css";
import PropTypes from 'prop-types';

const Buttons = ({ text, onClick, disabled, ...rest }) => {
    return (
      <Button onClick={onClick} disabled={disabled} {...rest}>
        {text}
      </Button>
    );
  };

  Buttons.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };
  

  export default Buttons;
