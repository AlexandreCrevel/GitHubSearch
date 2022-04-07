import PropTypes from 'prop-types';

function Repo({
  img, title, owner, desc,
}) {
  return (
    <div className="single-repo">
      <img src={img} alt={title} className="single-repo--img" />
      <h2 className="single-repo--title">{title}</h2>
      <span className="single-repo--owner">{owner}</span>
      <p className="single-repo--desc">{desc}</p>
    </div>
  );
}

Repo.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Repo;
