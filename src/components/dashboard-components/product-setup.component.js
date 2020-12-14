// import { Row, Col, Form } from "reactstrap";
import { Row, Col, Card, Form, Input, Button, Space, Select, Collapse } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import ProductService from '../../services/product.service';
import { useContext } from "react";
import ProductFormComponent from './product-form.component';

import { AuthContext } from '../../context/AuthContext';
const { Panel } = Collapse;

const ProductSetupComponent = () => {
  const { amplifyUser } = useContext(AuthContext);
  // useEffect(() =>{
  //   getProducts()
  // },[])

  // const getProducts = async() => {
  //   try{
  //     const product = await ProductService.get()
  //     console.log('products', product)
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }
  const layout = {
    labelCol: { span: 24, breakpoint: 'xs' },
    wrapperCol: { span: 24, breakpoint: 'xs' },
    
  };

  const createSandbox = async () => {
    try{
      const sandox = await ProductService.createSandbox()
      console.log('sandox', sandox)
    } catch (e) {
      console.log('e', e)
    }
  }

  const onFinish = async(values) => {
    console.log("Received values of form:1", values);
    // const res = await ProductService.create(values.product.product)
    // console.log('resposnse', res)
  };

  let data = [
    {
      channels: [
        {channel: 'testt', productUrl: 'https://test.com'},
        {channel: 'testing', productUrl: 'https://testing.com'}
      ],
      product: "test"
    },
    {
      channels: [
        {channel: 'testt', productUrl: 'https://test.com'},
        {channel: 'testing', productUrl: 'https://testing.com'}
      ],
      product: "test"
    },
    {
      channels: [
        {channel: 'testt', productUrl: 'https://test.com'},
        {channel: 'testing', productUrl: 'https://testing.com'}
      ],
      product: "test"
    }
  ]

  const genExtra = () => (
    <PlusOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col text-left">
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
                      <Form.List name="channels">
                        {(fields, { add, remove }) => {
                          return (
                            <>
                              <Row>
                                <Col xs={24} sm={24} lg={24}>
                                  {fields.map((field, index) => (
                                    <Space
                                      key={field.key}
                                      style={{
                                        display: "flex",
                                        marginBottom: 8,
                                      }}
                                      align="start"
                                    >
                                      <Row gutter={8}>
                                        <Col xs={24} sm={24} lg={8}>
                                          <Form.Item
                                            {...field}
                                            name={[field.name, "channel"]}
                                            fieldKey={[field.fieldKey, "channel"]}
                                            label={`Channel ${index + 1}`}
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
                                        </Col>
                                        <Col xs={24} sm={24} lg={8}>
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
                                        </Col>
                                          <MinusCircleOutlined
                                            onClick={() => {
                                              console.log('field', fields)
                                              remove(field.name);
                                            }}
                                          />
                                      </Row>
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

          { amplifyUser && amplifyUser.userStatus === 'NEW' ? <><h5 className="mt-5">Subscribe to sandbox</h5>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Card>
                <p>Sandbox has pre-loaded product reviews for you to explore Ratingsuite features. Try it free for 14 days</p>
                <button
                  type="btn"
                  className="btn btn-custom btn-dashboard"
                  onClick={createSandbox}
                >
                  Subscribe
                </button>
              </Card>
            </Col>
          </Row> </>: ''}
        
        </div>
        {/* <ProductTestComponent></ProductTestComponent> */}
      </div>
      <div className="row">
        <div className="col text-left mt-5">
        <h5>Your Products</h5>
        <Collapse
          accordion
          defaultActiveKey={['1']}
          onChange={() =>{console.log('happ')}}
        >
          {data.map((product,idx) =>{
            return(<Panel header={"Product " + (idx + 1 )} key={idx + 1} extra={genExtra()}>
              <ProductFormComponent></ProductFormComponent>
            </Panel>)
          })}
        </Collapse>
        </div>
      </div>
    </div>
  );
};

export default ProductSetupComponent;
