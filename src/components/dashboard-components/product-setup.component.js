// import { Row, Col, Form } from "reactstrap";
import { Row, Col, Card, Form, Input, Button, Space, Select, Collapse, message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import ProductService from '../../services/product.service';
import { useContext, useEffect, useState } from 'react';
import ProductFormComponent from './product-form.component';
import { Spinner } from 'reactstrap';

import { AuthContext } from '../../context/AuthContext';
import productService from '../../services/product.service';
const { Panel } = Collapse;

const ProductSetupComponent = () => {
  const { amplifyUser } = useContext(AuthContext);
  const [form] = Form.useForm();
  const [channels, setChannels] = useState([]);
  const [subscription, setSubscription] = useState([]);
  const [isLoading, setIsLoading] = useState({
    product: false,
    sandox: false
  });
  useEffect(() => {
    getChannels();
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const product = await ProductService.get();
      console.log(product);
      setSubscription(product);
    } catch (e) {
      console.log(e.Error);
    }
  };

  // get list of channels
  const getChannels = async () => {
    try {
      let channels = await productService.getChannels();
      setChannels(channels);
    } catch (e) {
      console.log('error', e);
    }
  };
  const layout = {
    labelCol: { span: 24, breakpoint: 'xs' },
    wrapperCol: { span: 24, breakpoint: 'xs' }
  };

  const createSandbox = async () => {
    setIsLoading({...isLoading, sandox: true});
    try {
      const sandox = await ProductService.createSandbox();
      setIsLoading({...isLoading, sandox: false});
      console.log('sandox', sandox);
    } catch (e) {
      console.log('e.response', e.response);
      if (e.response && e.response.data) message.error(e.response.data);
      setIsLoading({...isLoading, sandox: false});
    }
  };

  // const deleteSandbox = async () => {
  //   setIsLoading({...isLoading, sandox: true});
  //   try {
  //     const sandox = await ProductService.deleteSandbox();
  //     setIsLoading({...isLoading, sandox: false});
  //     message.success('You have successfully unsubscribed from sandox');
  //     console.log('sandox', sandox);
  //   } catch (e) {
  //     console.log('e.response', e.response);
  //     if (e.response && e.response.data) message.error(e.response.data);
  //     setIsLoading({...isLoading, sandox: false});
  //   }
  // };

  const onFinish = async values => {
    setIsLoading({...isLoading, product: true});
    try {
      await ProductService.create(values.product);
      setIsLoading({...isLoading, product: false});
      message.success('Product added successfully');
      form.resetFields();
      getProducts();
    } catch (e) {
      setIsLoading({...isLoading, product: false});
      message.error('Something went wrong');
      console.log(e)
    }
  };

  // let data = [
  //   {
  //     channels: [
  //       { channel: 'testt', productUrl: 'https://test.com' },
  //       { channel: 'testing', productUrl: 'https://testing.com' }
  //     ],
  //     product: 'test'
  //   },
  //   {
  //     channels: [
  //       { channel: 'testt', productUrl: 'https://test.com' },
  //       { channel: 'testing', productUrl: 'https://testing.com' }
  //     ],
  //     product: 'test'
  //   },
  //   {
  //     channels: [
  //       { channel: 'testt', productUrl: 'https://test.com' },
  //       { channel: 'testing', productUrl: 'https://testing.com' }
  //     ],
  //     product: 'test'
  //   }
  // ];

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
                    <Form {...layout} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" layout="vertical" form={form}>
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
                                          {channels.map(({ channelName }, idx) => (
                                            <Select.Option key={idx} value={channelName}>
                                              {channelName}
                                            </Select.Option>
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
                          {isLoading.product ? <Spinner size="sm" type="grow" color="light" className="mr-2" /> : ''}
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
      <div className="row">
        <div className="col text-left mt-5">
          <h5>Your Products</h5>
          <Collapse accordion defaultActiveKey={['1']} onChange={() => {}}>
            {subscription.length > 0
              ? subscription.map((product, idx) => {
                  return (
                    <Panel header={product.productAlias ? product.productAlias : 'Product ' + (idx + 1) } key={idx + 1}>
                      <div className="px-3 mb-3">
                        <span>Plan: {product.plan}</span>
                        <span className="ml-2">Subscription status: <span className={product.subscriptionStatus === 'Active' ? 'text-success': 'text-danger'}>{product.subscriptionStatus}</span></span>
                        <span className="ml-2">Expired on: {product.endDt}</span>
                      </div>
                      <ProductFormComponent channels={channels} product={product} />
                    </Panel>
                  );
                })
              : null}
          </Collapse>
        </div>
      </div>
      <div className="text-left">
        {amplifyUser && amplifyUser.userStatus === 'NEW' ? (
          <>
            <h5 className="mt-5">Subscribe to sandbox</h5>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card>
                  <p>Sandbox has pre-loaded product reviews for you to explore Ratingsuite features. Try it free for 14 days</p>
                  <button type="btn" className="btn btn-custom btn-dashboard" onClick={createSandbox}>
                    {isLoading.sandox ? <Spinner size="sm" type="grow" color="light" className="mr-2" /> : ''}
                    Subscribe
                  </button>
                </Card>
              </Col>
            </Row>{' '}
          </>
        ) : (
          ''
        )}
      </div>
      {/* <div className="text-left">
        {amplifyUser && amplifyUser.userStatus === 'NEW' ? (
          <>
            <h5 className="mt-5">Unsubscribe to sandbox</h5>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card>
                  <p>Sandbox has pre-loaded product reviews for you to explore Ratingsuite features.</p>
                  <button type="btn" className="btn btn-custom btn-dashboard" onClick={deleteSandbox}>
                    {isLoading.sandox ? <Spinner size="sm" type="grow" color="light" className="mr-2" /> : ''}
                    Unubscribe
                  </button>
                </Card>
              </Col>
            </Row>{' '}
          </>
        ) : (
          ''
        )}
      </div> */}
    </div>
  );
};

export default ProductSetupComponent;
