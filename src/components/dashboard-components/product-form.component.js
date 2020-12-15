import { Row, Col, Card, Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const ProductFormComponent = ({channels}) => {
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 }
  };

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
                      <Form initialValues={{ product: 'testing',channels: [{channel: 'Ebay (USA)', productUrl: 'https://url.com'},{channel: 'Ebay (USA)', productUrl: 'https://url.com'},{channel: 'Ebay (USA)', productUrl: 'https://url.com'}] }} {...layout} name="test_form" onFinish={(data) => {console.log('form', data)}} autoComplete="off" layout="vertical">
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
                                          {channels.map(({channelName}, idx) => (
                                            <Select.Option key={idx} value={channelName}>{channelName}</Select.Option>
                                          ))}
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
