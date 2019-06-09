import React from 'react';

const Filter = props => {
  return (
    <div>
      <form className='form'>
        <div className='form__upper'>
          <select
            name='services'
            id='services'
            onChange={props.handlers.onChange}
          >
            <option value='shelter'>Shelter</option>
            <option value='food'>Food</option>
            <option value='medical'>Medical</option>
            <option value='dental'>Dental</option>
            <option value='selfCare'>Self Care</option>
            <option value='community'>Community</option>
          </select>

          <select name='location' id='location'>
            <option value='sanFrancisco'>San Francisco</option>
          </select>
        </div>

        <div className='form__lower'>
          <input type='date' name='date' onChange={props.handlers.onSelect} />

          <input
            type='submit'
            value='Submit'
            onSubmit={props.handlers.onSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;
