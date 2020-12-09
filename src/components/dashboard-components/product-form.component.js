import { Row, Col, Card, Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useEffect, useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

const ProductFormComponent = () => {
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 }
  };
  let data = [
    {
      name: [
        "product"
      ],
      value: "Ant Design",
      channels: [
        {name: 'channel', value: 'ebay'}
      ]
    //   name: ['channels'],
    //   value: [
    //     name =  [
    //         'channel'
    //     ],
    //     value = 'ebay',
    //     name = ['productUrl'],
    //     value = 'https://test.cmo'
    //   ]
    }
  ]

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-left">
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card>
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Form fields={data} {...layout} name="test_form" onFinish={() => {}} autoComplete="off" layout="vertical">
                        <Row>
                          <Col xs={24} sm={24} lg={8}>
                            <Form.Item
                              label="Product"
                              name="product"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input your product!'
                                }
                              ]}
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Form.List name="channels">
                          {(fields, { add, remove }) => {
                            return (
                              <>
                                <Row>
                                  <Col xs={24} sm={24} lg={8}>
                                    {fields.map((field, index) => (
                                      <Space
                                        key={field.key}
                                        style={{
                                          display: 'flex',
                                          marginBottom: 8
                                        }}
                                        align="start"
                                      >
                                        <Form.Item
                                          {...field}
                                          name={[field.name, 'channel']}
                                          fieldKey={[field.fieldKey, 'channel']}
                                          label={`Channel ${index + 1}`}
                                          rules={[
                                            {
                                              required: true,
                                              message: 'Missing Channel'
                                            }
                                          ]}
                                        >
                                          <Select placeholder="Select Channel" allowClear>
                                            <Select.Option value="ebay">ebay</Select.Option>
                                            <Select.Option value="amazon">Amazon</Select.Option>
                                            <Select.Option value="wallmart">Wallmart</Select.Option>
                                          </Select>
                                        </Form.Item>
                                        <Form.Item
                                          {...field}
                                          name={[field.name, 'productUrl']}
                                          fieldKey={[field.fieldKey, 'productUrl']}
                                          label="Product URL"
                                          rules={[
                                            {
                                              required: true,
                                              message: 'Missing Product Url',
                                              type: 'url'
                                            }
                                          ]}
                                        >
                                          <Input placeholder="Product URL" />
                                        </Form.Item>

                                        <MinusCircleOutlined
                                          onClick={() => {
                                            console.log('field', fields);
                                            remove(field.name);
                                          }}
                                        />
                                      </Space>
                                    ))}
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={24} sm={24} lg={8}>
                                    <Form.Item>
                                      <Button
                                        type="dashed"
                                        onClick={() => {
                                          add();
                                        }}
                                        block
                                      >
                                        <PlusOutlined /> Add Channel
                                      </Button>
                                    </Form.Item>
                                  </Col>
                                </Row>
                              </>
                            );
                          }}
                        </Form.List>

                        <Form.Item>
                          <button type="submit" className="btn btn-custom btn-dashboard">
                            Add Product
                          </button>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFormComponent;
