import { Divider, Typography } from 'antd';

const SingleReview = ({ detail, title, body }) => (
  <div className="review">
    <Divider />
    <Typography.Text type="secondary" className="mb-4">
      <p>{detail}</p>
    </Typography.Text>
    <h5>Title: {title}</h5>
    <p>Review Body: {body}</p>
  </div>
);

export default SingleReview;
