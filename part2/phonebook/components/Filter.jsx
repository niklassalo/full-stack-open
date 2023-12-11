const Filter = ({ searchInput, handleSearchChange }) => {
    return (
        <div>
            search: <input
                value={searchInput}
                onChange={handleSearchChange}
            />
        </div>
    )
}

export default Filter