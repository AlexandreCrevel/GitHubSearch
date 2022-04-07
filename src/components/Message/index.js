import PropTypes from 'prop-types';
import './style.scss';
import { Segment } from 'semantic-ui-react';

function Message({ counterResults }) {
  return (
    <Segment>La recherche à donné {counterResults} résultats</Segment>
  );
}

export default Message;
