'use client';

import { useSelector } from 'react-redux';

import { toastsState } from 'src/store';
import Toast from './Toast';

const Toasts = () => {
  const toasts = useSelector(toastsState);

  return (
    <>
      <div className="fixed right-2 top-2 z-[100]">
        {toasts.map((toast) => (
          <Toast toast={toast} key={toast.id} />
        ))}
      </div>
    </>
  );
};

export default Toasts;
