import { Button, Form } from "react-bootstrap";

const Filters = () => {
  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
          inline
          Label='Acending'
          name='group1'
          type='radio'
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          Label='Descending'
          name='group1'
          type='radio'
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          Label='Include Out of Stock'
          name='group1'
          type='checkbox'
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          Label='FastDelivary Only'
          name='group1'
          type='checkbox'
          id={`inline-4`}
        />
      </span>
      {/* <span>
        <label style={{ paddingRight: 10 }}>Rating</label>
        <Rating rating={byRating} style={{ cursor: "pointer" }} />
      </span> */}
      <Button variant='light'>Clear Filters</Button>
    </div>
  );
};

export default Filters;
