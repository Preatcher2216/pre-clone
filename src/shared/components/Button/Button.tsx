import classNames from 'classnames';
import {FC, HTMLProps, PropsWithChildren} from 'react';

import styles from './Button.module.scss';

export type ButtonVariant = 'blue-rounded' | 'green' | 'blue-light' | 'gray-outline' | 'purple' | 'orange' | 'blue';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: ButtonVariant;
  onClick?: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({variant, children, onClick, ...buttonProps}) => {
  return (
    <button
      {...buttonProps}
      type="button"
      className={classNames(styles.button, styles[`button_${variant}`])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
