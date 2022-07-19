import React from "react";
import {
  Modal,
  ModalOverlay,
  Button,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Badge,
} from "@chakra-ui/react";
import YoutubeVideo from "@components/youtube-video/YoutubeVideo";

const ModalRobot = ({ isOpen, onOpen, onClose }) => {
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={"2xl"}
        isCentered
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay zIndex={100} />
        <ModalContent>
          <ModalHeader>Makara Pumpkin X</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col items-center justify-center px-10 w-full">
              <div className="w-full mx-auto mb-5 text-left ">
                <h1
                  className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
                  itemProp="headline"
                  title="Rise of Tailwind - A Utility First CSS Framework"
                >
                  Rise of Tailwind - A Utility First CSS Framework
                </h1>
                <div className="flex mb-1 gap-1">
                  <Badge p={1}>SAUVC</Badge>
                  <Badge p={1}>Autonomous</Badge>
                </div>{" "}
              </div>
              <div className="flex flex-col mb-5 items-center justify-center">
                <YoutubeVideo
                  videoId={"U8GOqvt0ufw"}
                  width="400"
                  height="240"
                />
              </div>
              <article>
                <div>
                  <div className="w-full mx-auto prose text-justify ">
                    <p>
                      What if there is an easy way to achieve responsive UI
                      without using any UI kit? Can we create new and fresh
                      designs for every project with a CSS framework? Enter
                      Tailwind CSS, will this be the perfect CSS framework, well
                      let’s find out.
                    </p>
                    <p>
                      What if there is an easy way to achieve responsive UI
                      without using any UI kit? Can we create new and fresh
                      designs for every project with a CSS framework? Enter
                      Tailwind CSS, will this be the perfect CSS framework, well
                      let’s find out.
                    </p>{" "}
                    <p>
                      What if there is an easy way to achieve responsive UI
                      without using any UI kit? Can we create new and fresh
                      designs for every project with a CSS framework? Enter
                      Tailwind CSS, will this be the perfect CSS framework, well
                      let’s find out.
                    </p>{" "}
                    <p>
                      What if there is an easy way to achieve responsive UI
                      without using any UI kit? Can we create new and fresh
                      designs for every project with a CSS framework? Enter
                      Tailwind CSS, will this be the perfect CSS framework, well
                      let’s find out.
                    </p>{" "}
                    <p>
                      What if there is an easy way to achieve responsive UI
                      without using any UI kit? Can we create new and fresh
                      designs for every project with a CSS framework? Enter
                      Tailwind CSS, will this be the perfect CSS framework, well
                      let’s find out.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalRobot;
