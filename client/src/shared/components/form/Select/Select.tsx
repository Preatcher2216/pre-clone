import classNames from 'classnames';
import {FC, useEffect, useState} from 'react';

import {ReactComponent as AngleIcon} from 'assets/icons/angle-down.svg';
import {ReactComponent as CloseIcon} from 'assets/icons/close.svg';
import {bem} from 'shared/utils';

import styles from './Select.module.scss';

const sn = bem('select', styles);

export type SelectOption = {
  value: string | number;
  label: string;
};

interface SelectProps {
  placeholder?: string;
  options: SelectOption[];
  value: SelectOption['value'];
  onChange: (...event: any[]) => void;
  className?: string;
}

export const Select: FC<SelectProps> = ({options, value, placeholder, onChange, className}) => {
  const [label, setLabel] = useState<SelectOption['label']>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isSearchFocused, setSearchFocused] = useState<boolean>(false);
  const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>(options);

  useEffect(() => {
    if (value) {
      const label = options.find((el) => el.value === value)?.label;
      if (label) setLabel(label);
    }
  }, []);

  useEffect(() => {
    if (searchQuery.length) {
      setFilteredOptions(options.filter((el) => el.label.includes(searchQuery)));
    } else {
      setFilteredOptions(options);
    }
  }, [searchQuery]);

  const handleSelect = (el: SelectOption) => {
    setLabel(el.label);
    onChange(el.value);
    setSearchQuery('');
    setMenuOpen(false);
  };

  return (
    <div className={classNames(styles.select, className)}>
      <div className={sn('selected', {['selected_opened']: isMenuOpen})} onClick={() => setMenuOpen((p) => !p)}>
        <div className={sn('value')}>{value ? label : placeholder}</div>
        <div className={sn('arrow', {['arrow_opened']: isMenuOpen})}>
          <AngleIcon />
        </div>
      </div>
      {isMenuOpen ? (
        <div className={sn('menu')}>
          <div className={sn('search', {['search_focused']: isSearchFocused})}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <CloseIcon className={sn('reset')} onClick={() => setSearchQuery('')} />
          </div>
          <div className={sn('options')}>
            {filteredOptions?.length ? (
              filteredOptions.map((el) => (
                <div className={sn('option')} key={el.value} onClick={() => handleSelect(el)}>
                  {el.label}
                </div>
              ))
            ) : (
              <div className={sn('option')}>Not found...</div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
