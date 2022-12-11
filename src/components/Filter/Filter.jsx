import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/slice/filterSlice';
import { getFilterValue } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const onChange = e => dispatch(setFilterValue(e.target.value));

  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
