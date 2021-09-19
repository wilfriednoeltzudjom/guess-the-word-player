import { useEffect } from 'react';

export default function (id, callback) {
  useEffect(() => {
    function handleOutsideClick(evt) {
      const element = document.getElementById(id);
      if (element) {
        let { target } = evt;
        do {
          if (target.id === element.id) return;
          target = target.parentNode;
        } while (target);
        callback();
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
}
