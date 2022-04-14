import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// prettier-ignore
import {
  faBars,
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

//prettier-ignore
import {
  faFacebookF as fabFacebookF,
} from '@fortawesome/free-brands-svg-icons';

// prettier-ignore
library.add(
  faBars,
  faAngleLeft,
  faAngleRight
);

const Icon = ({ icon, ...rest }) => (
  <FontAwesomeIcon className='icon' icon={icon} {...rest} />
);

export default Icon;
