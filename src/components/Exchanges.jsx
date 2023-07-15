import React from "react";
import { Row, Typography } from "antd";

import ExchangeCS from "../images/ExchangesCS.png";


const Exchanges = () => {
  return (
    <Row gutter={[32, 32]} className="exchanges-card-container">
      <img src={ExchangeCS} alt="Coming Soon" className="exchanges-image" loading="lazy" />
      <Typography.Title level={1} className="exchanges-heading">
        Coming Soon
      </Typography.Title>
    </Row>
  );
};

export default Exchanges;