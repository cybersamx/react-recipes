import {MouseEvent, MouseEventHandler, PropsWithChildren} from 'react';

type ModalProps = PropsWithChildren & {
  title?: string;
  onClose?: MouseEventHandler;
}

import styles from '@/styles/modal.module.css';

export default function Modal({title, onClose, children}: ModalProps) {
  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClose && onClose(e);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <a href="#" onClick={onClick}>
              X
            </a>
          </div>
          {
            title && <h1>{title}</h1>
          }
          <div className={styles.modalBody}>{children}</div>
        </div>
      </div>
    </div>
  );
}
