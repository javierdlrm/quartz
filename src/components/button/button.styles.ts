import { SxStyleProp } from 'rebass';
import buttonsStyles from '../../theme/buttons';

export default {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  py: '8px',
  px: '15px',

  borderRadius: 0,
  boxSizing: 'border-box',

  fontFamily: 'label',
  fontWeight: 'label',
  fontSize: 'label',

  cursor: 'pointer',

  transition: ({ transitions }) => transitions.button,

  ':disabled': {
    cursor: 'default',
  },

  '> span': {
    mr: '8px',
  },
} as SxStyleProp;

export const spinnerColor = (intent: string): string => {
  const disabledStyles = buttonsStyles[intent][':disabled'];
  return disabledStyles.color;
};
