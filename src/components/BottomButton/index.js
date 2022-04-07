import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function BottomButton({ launchSmallSearch }) {
  return (
    <div className="bottom-button">
      <Button.Group>
        <Button labelPosition="right" icon="right chevron" content="Résultats suivants" onClick={launchSmallSearch} />
      </Button.Group>
    </div>
  );
}

BottomButton.propTypes = {
  launchSmallSearch: PropTypes.func.isRequired,
};

export default BottomButton;
