import classNames, {Argument} from 'classnames';

type Styles = {
  readonly [key: string]: string;
};

export const bem = (block: string, styles: Styles) => {
  return (...args: Argument[]) => {
    return classNames(args)
      .split(' ')
      .map((s) => styles[`${block}__${s}`])
      .join(' ');
  };
};
