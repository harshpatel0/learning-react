import PropTypes from "prop-types";

function List(props) {
  const itemList = props.items;
  const category = props.category;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <strong>{item.calories}</strong>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items"> {listItems} </ul>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "List",
  items: [],
};

export default List;
