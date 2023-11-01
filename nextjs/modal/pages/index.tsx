import {useState} from "react";
import Head from 'next/head';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

import CustomModal from '@/components/custom-modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // Use a set of helper functions from nextui to manage the state of modal.
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const toggleDialog = (val: boolean) => {
    return () => setShowModal(val);
  }

  return (
    <>
      <Head>
        <title>React Recipes - Next.js Modal</title>
      </Head>
      <div>
        <button onClick={toggleDialog(true)}>Custom modal</button>
        {
          showModal && (
            <CustomModal onClose={toggleDialog(false)} title="Modal Title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
              venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
            </CustomModal>
          )
        }
      </div>
      <div>
        <button onClick={onOpen}>Nextui modal</button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {
              (onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                    venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )
            }
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
