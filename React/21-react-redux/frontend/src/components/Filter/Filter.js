import { useDispatch, useSelector } from 'react-redux';
import {
    setTitleFilter,
    selectTitleFilter,
    resetFilters,
} from '../../redux/slices/filterSlice';
import './Filter.css';
const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);

    const handleTitleFilter = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleResetFilter = () => {
        dispatch(resetFilters());
    };

    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        value={titleFilter}
                        type="text"
                        placeholder="Filter by title..."
                        onChange={handleTitleFilter}
                    />
                </div>
                <button type="button" onClick={handleResetFilter}>
                    Reset
                </button>
            </div>
        </div>
    );
};
export default Filter;
