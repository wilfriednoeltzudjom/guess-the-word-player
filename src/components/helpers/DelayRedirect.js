import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default function DelayRedirect({ to, delay = 100, renderBeforeRedirect }) {
  const [redirectEnabled, setRedirectEnabled] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRedirectEnabled(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return redirectEnabled ? <Redirect to={to} /> : renderBeforeRedirect();
}
DelayRedirect.propTypes = {
  to: PropTypes.string.isRequired,
  delay: PropTypes.number,
  renderBeforeRedirect: PropTypes.func,
};
