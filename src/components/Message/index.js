import PropTypes from 'prop-types';
import './styles.scss';
import { Segment } from 'semantic-ui-react';

function Message({ counterResults }) {
  return (
    <Segment>La recherche à donné {counterResults} résultats</Segment>
  );
}

Message.propTypes = {
  counterResults: PropTypes.number.isRequired,
};

export default Message;
