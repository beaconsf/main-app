import React from 'react';

const Filter = props => {
  return (
    <div>
      <form>
        <select name='' id='' onChange={props.handlers.onChange}>
          <option value='shelter'>Shelter</option>
          <option value='food'>Food</option>
          <option value='medical'>Medical</option>
          <option value='dental'>Dental</option>
          <option value='self-care'>Self Care</option>
          <option value='community'>Community</option>
        </select>

        <select name='' id=''>
          <option value='san-francisco'>San Francisco</option>
        </select>

        <input type='date' name='somedate' onChange={props.handlers.onSelect} />

        <input
          type='submit'
          value='Submit'
          onSubmit={props.handlers.onSubmit}
        />
      </form>
    </div>
  );
};

export default Filter;
