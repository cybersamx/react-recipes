import {useState} from "react";
import Head from 'next/head';

import Modal from '@/components/modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleDialog = (val: boolean) => {
    return (e) => setShowModal(val);
  }

  return (
    <>
      <Head>
        <title>React Recipes - Next.js Modal</title>
      </Head>
      <div>
        <button onClick={toggleDialog(true)}>Pop modal</button>
        {
          showModal && (
            <Modal onClose={toggleDialog(false)}>
              Howdy
            </Modal>
          )
        }
      </div>
    </>
  );
}
