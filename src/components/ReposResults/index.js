import PropTypes from 'prop-types';
import './styles.scss';
import Repo from './repo';

function ReposResults({ items }) {
  return (
    <div className="all-results">
      {items.map((item) => (
        <Repo
          key={item.id}
          img={item.owner.avatar_url}
          title={item.name}
          owner={item.owner.login}
          desc={item.description}
        />
      ))}
    </div>
  );
}

ReposResults.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ReposResults;
