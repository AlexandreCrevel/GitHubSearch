import './styles.scss';
import { Button } from 'semantic-ui-react';

function MenuBar() {
  return (
    <div className="menubar">
      <Button.Group>
        <Button href="/">Search</Button>
        <Button href="/faq">FAQ</Button>
      </Button.Group>
    </div>
  );
}

MenuBar.propTypes = {};

export default MenuBar;
