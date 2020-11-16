// import { Row, Col, Form } from "reactstrap";
import { Row, Col, Card, Form, Input, Button, Space, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const ProductSetupComponent = () => {
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col  text-left">
          <h5>Product Setup</h5>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Card>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form
                      {...layout}
                      name="dynamic_form_nest_item"
                      onFinish={onFinish}
                      autoComplete="off"
                      layout="vertical"
                    >
                      <Form.List name="product">
                        {(fields, { add, remove }) => {
                          return (
                            <>
                              <Row>
                                <Col xs={24} sm={24} lg={8}>
                                  <Form.Item
                                    label="Product"
                                    name="product"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please input your product!",
                                      },
                                    ]}
                                  >
                                    <Input />
                                  </Form.Item>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={24} sm={24} lg={8}>
                                  {fields.map((field) => (
                                    <Space
                                      key={field.key}
                                      style={{
                                        display: "flex",
                                        marginBottom: 8,
                                      }}
                                      align="start"
                                    >
                                      <Form.Item
                                        {...field}
                                        name={[field.name, "channel"]}
                                        fieldKey={[field.fieldKey, "channel"]}
                                        label={`Channel ${field.key + 1}`}
                                        rules={[
                                          {
                                            required: true,
                                            message: "Missing Channel",
                                          },
                                        ]}
                                      >
                                        <Select
                                          placeholder="Select Channel"
                                          allowClear
                                        >
                                          <Select.Option value="ebay">
                                            ebay
                                          </Select.Option>
                                          <Select.Option value="amazon">
                                            Amazon
                                          </Select.Option>
                                          <Select.Option value="wallmart">
                                            Wallmart
                                          </Select.Option>
                                        </Select>
                                      </Form.Item>
                                      <Form.Item
                                        {...field}
                                        name={[field.name, "productUrl"]}
                                        fieldKey={[
                                          field.fieldKey,
                                          "productUrl",
                                        ]}
                                        label="Product URL"
                                        rules={[
                                          {
                                            required: true,
                                            message: "Missing Product Url",
                                            type: "url",
                                          },
                                        ]}
                                      >
                                        <Input placeholder="Product URL" />
                                      </Form.Item>

                                      <MinusCircleOutlined
                                        onClick={() => {
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
                        <button
                          type="submit"
                          className="btn btn-custom btn-dashboard"
                        >
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
  );
};

export default ProductSetupComponent;
