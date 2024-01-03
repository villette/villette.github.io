import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import {
  faCertificate,
  faCode,
  faTerminal,
  faDatabase,
  faCog,
  faSearch,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
import {
  faPhp,
  faJsSquare,
  faDocker,
  faLinkedinIn,
  faDrupal,
  faGithub,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

export default () => {
  library.add(
    faFlag,
    faCertificate,
    faCode,
    faTerminal,
    faDatabase,
    faCog,
    faSearch,
    faFilePdf,
    faPhp,
    faJsSquare,
    faDocker,
    faLinkedinIn,
    faDrupal,
    faGithub,
    faFacebookF,
  );

  dom.i2svg();
};
