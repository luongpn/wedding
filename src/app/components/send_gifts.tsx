"use client";
import { sectionTextColor } from "@/constants/constants";
import useUpdateActiveNav from "@/hooks/useUpdateActiveNav";
import clsx from "clsx";
import React from "react";
import { FaGift } from "react-icons/fa6";
import { motion } from "motion/react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { FaDownload } from "react-icons/fa";

const SendGifts = () => {
  const ref = React.useRef<any>(null);
  useUpdateActiveNav(ref);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const downloadImage = (url: string) => {
    if (typeof window !== "undefined") {
      let a = document.createElement("a");
      a.href = url;
      a.download = "output.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div ref={ref} id="send_gifts" className="py-[20px] bg-[#fb2c36]">
      <h2
        className={clsx(
          `font-[Imperial_Script] text-[55px] text-center text-white`
        )}
      >
        Gửi quà cho cô dâu chú rể
      </h2>

      <div className="flex justify-center">
        <hr className={clsx(`w-[200px] text-white`)} />
      </div>

      <div>
        <div className="flex justify-center py-10">
          <motion.div
            whileTap={{
              scale: 0.8,
            }}
            onClick={() => {
              setIsOpen(true);
            }}
            className="w-[40px] h-[40px] rounded-sm bg-[#f2aa0e] cursor-pointer flex items-center justify-center"
          >
            <FaGift className="text-white" />
          </motion.div>
        </div>
      </div>

      {/* <Dialog title={"title"} visible>
        <p>first dialog</p>
      </Dialog> */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end py-1">
          <motion.button
            whileTap={{
              scale: 0.8,
            }}
            className="w-[35px] h-[35px] bg-gray-300 rounded-sm flex items-center justify-center"
            onClick={closeModal}
          >
            <IoMdClose className="cursor-pointer text-[20px]" />
          </motion.button>
        </div>
        <div className="overflow-y-scroll h-[90%]">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              {
                id: 1,
                label: "QR Cô dâu",
              },
              {
                id: 2,
                label: "QR Chú rể",
              },
            ].map((i) => (
              <div key={i.id}>
                <p className="font-[520] ml-1 text-[13px]">{i.label}</p>
                <img src={"/qr.jpg"} className="max-sm:w-[100%] w-[300px]" />
                <motion.button
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() => {
                    downloadImage("/qr.jpg");
                  }}
                  className="cursor-pointer bg-gray-400 text-[13px] text-white py-1 flex items-center justify-center rounded-sm w-[100%] mt-1"
                >
                  <FaDownload />
                  <span>Tải QR</span>
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SendGifts;
