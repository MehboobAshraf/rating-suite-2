import { Row, Col, Card, Form, Input, Button, Space, Select, message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import productService from '../../services/product.service';

const ProductFormComponent = ({channels, product}) => {
  const [isLoading, setIsLoading] = useState(false)
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 }
  };

  const handleSubmit = async(values) => {
    setIsLoading(true)
    try{
      if(product.productAlias !== values.product){
        const body = {
          plan: product.plan,
          updateType: 'Product',
          upid: product.upid,
          productAlias: values.product
        }
        const result = await productService.updateProduct(body)
        message.success('Product name updated');
        console.log('response', result)
      }else {
        console.log(values)
        const body = {
          upid: product.upid,
          channelName: values.channels[0].channel,
          channelURL: values.channels[0].productUrl
        }
        await productService.addChannel(body)
        message.success('channel added successfully');
      }
      setIsLoading(false)
    }catch(error){
      console.log(error)
      setIsLoading(false)
      message.error('Product updat failed');
    }
  }

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
                      {/* channels: [{channel: 'Ebay (USA)', productUrl: 'https://url.com'},{channel: 'Ebay (USA)', productUrl: 'https://url.com'},{channel: 'Ebay (USA)', productUrl: 'https://url.com'}] */}
                      <Form initialValues={{ product: product.productAlias, channels: [product.channelName ? { channel: product.channelName, productUrl: product.upcURL } : null]}} {...layout} name="test_form" onFinish={handleSubmit} autoComplete="off" layout="vertical">
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
                          {isLoading ? <Spinner size="sm" type="grow" color="light" className="mr-2" /> : ''}
                            Update Product
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
