import { Spinner } from 'reactstrap';

const LoaderComponent = () => {
  return (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status"></Spinner>
    </div>
  );
};

export default LoaderComponent;
