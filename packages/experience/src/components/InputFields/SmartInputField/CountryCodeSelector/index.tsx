import classNames from 'classnames';
import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import styles from './index.module.scss';

// India country calling code — fixed, not user-changeable
const INDIA_CALLING_CODE = '91';

type Props = {
  readonly className?: string;
  readonly isVisible?: boolean;
};

/**
 * CountryCodeSelector is locked to India (+91).
 * The dropdown has been intentionally disabled — the country code is not user-selectable.
 */
const CountryCodeSelector = (
  { className, isVisible = true }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      ref={ref}
      className={classNames(styles.countryCodeSelector, isVisible && styles.visible, className)}
    >
      <span>{`+${INDIA_CALLING_CODE}`}</span>
    </div>
  );
};

export default forwardRef(CountryCodeSelector);
