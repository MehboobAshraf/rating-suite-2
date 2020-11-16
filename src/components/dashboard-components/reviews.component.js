import React, { useState } from 'react';
import { Row, Card, Form, Select, Col, Checkbox } from 'antd';
import SingleReview from './sinleReview.component';

const ReviewsComponent = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col text-left">
          <h5>Reviews</h5>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Card>
                <Col sm={24} md={24} lg={24}>
                  <Form
                    layout="vertical"
                    form={form}
                    initialValues={{
                      layout: formLayout
                    }}
                  >
                    <Row>
                      <Col xs={24} sm={24} lg={4} className="mr-2">
                        <Form.Item label="Product">
                          <Select placeholder="Select Product">
                            <Select.Option value="p1">Product 1</Select.Option>
                            <Select.Option value="p2">Product 2</Select.Option>
                            <Select.Option value="p3">Product 3</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} lg={4} className="mr-2">
                        <Form.Item label="Channel">
                          <Select placeholder="Select Channel">
                            <Select.Option value="c1">Channel 1</Select.Option>
                            <Select.Option value="c2">Channel 2</Select.Option>
                            <Select.Option value="c3">Channel 3</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} lg={4} className="mr-2">
                        <Form.Item label="Time">
                          <Select placeholder="Time">
                            <Select.Option value="30_days">Last 30 days</Select.Option>
                            <Select.Option value="15_days">Last 15 days</Select.Option>
                            <Select.Option value="10_days">Last 10 days</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} lg={4} className="mr-2">
                        <Form.Item label="Rating">
                          <Select placeholder="Select Channel">
                            <Select.Option value="all">All</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} lg={4} className="mr-2">
                        <Form.Item label="Sentiment">
                          <Select placeholder="Select Sentiment">
                            <Select.Option value="all">All</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Card className="search-card">
                      <Row>
                        <Col xs={24} sm={24} lg={19} className="ml-2">
                          <Form.Item name="agreement" valuePropName="checked">
                            <Checkbox>All</Checkbox>
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} lg={4} className="ml-lg-4">
                          {/* label="Sort by" */}
                          <Form.Item>
                            <Select placeholder="Sort by">
                              <Select.Option value="date">Search</Select.Option>
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Card>
                  </Form>
                </Col>

                <p className="mt-5">Showing 1-20 reviews</p>

                <SingleReview
                  detail="5* on amazon.com by Adam Singer, Oct 10, 2019, Boston, MA, USA"
                  title="Great product!!!"
                  body="Product works like magic"
                />
                <SingleReview
                  detail="4* on ebay.com by Roy James, Oct 10, 2019, New York, NYC, USA"
                  title="Good product!!!"
                  body="Product is good"
                />
                <SingleReview
                  detail="5* on amazon.com by Adam Singer, Oct 10, 2019, Boston, MA, USA"
                  title="Great product!!!"
                  body="Product works like magic"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ReviewsComponent;
