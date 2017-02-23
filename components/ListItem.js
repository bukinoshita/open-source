import react from 'react';
import Truncate from 'react-truncate'

const ListItem = (props) => (
  <li className="list-item">
  <a className="list-item-link" href={props.html_url}>
    <h3 className="list-item__title">
      <Truncate lines={2}>{props.title}</Truncate>
    </h3>
    <p className="list-item__description">
      <Truncate lines={3}>{props.body || 'No description on this issue'}</Truncate>
    </p>
  </a>
</li>
)

export default ListItem;
