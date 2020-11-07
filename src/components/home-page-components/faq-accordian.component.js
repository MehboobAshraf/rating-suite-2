import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';

const FAQAccordianComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`mt-4 ${isOpen ? '' : 'border-bottom'}`}>
      <div className="faq-que-div" onClick={toggle}>
        <h4 className="mb-0 faq-que">{props.question}</h4>
        <span className={`ti-plus ${isOpen ? 'span-rotate' : null}`}></span>
      </div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <div className="faq-ans">
              <p className="text-muted">{props.answer}</p>
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default FAQAccordianComponent;
