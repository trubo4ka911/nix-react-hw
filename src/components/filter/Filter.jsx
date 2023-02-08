import PropTypes from "prop-types";
import { FilterForm, FilterInput, FilterBtn } from "./Filter.styled";
import { MdSearch } from "react-icons/md";


const Filter = ({ value, onChange }) => {
  
  return (
    <>
      <FilterForm>
        <FilterInput
          type="text"
          name="filter"
          onChange={onChange}
          value={value}
          placeholder="Search name"
          autoComplete="off"
        />
        <FilterBtn className="filter-button" type="submit">
          <MdSearch />
        </FilterBtn>
      </FilterForm>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Filter;