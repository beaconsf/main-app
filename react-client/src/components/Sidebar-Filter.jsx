import React from 'react';

const Filter = props => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  return (
    <div>
      <form>
        <select name='' id=''>
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

        <input type='date' name='' value='' />

        <input type='submit' />
      </form>
    </div>
  );
};

export default Filter;
