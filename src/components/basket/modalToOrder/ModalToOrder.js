import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ModalForm from "../modalForm/ModalForm";
import { BsCheckLg } from "react-icons/bs";

import "./modalToOrder.scss";

const ModalToOrder = ({ isOpen, setOpen }) => {
  const [success, setSuccess] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <div
      onClick={() => setOpen(false)}
      className={isOpen ? "modal__open" : "modal__close"}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {success ? (
          <div className="modal__success">
            <BsCheckLg color="green" className="modal__icon" />
            {t("order successfully")}
          </div>
        ) : (
          <ModalForm setOpen={setOpen} setSuccess={setSuccess} />
        )}
      </div>
    </div>
  );
};

export default ModalToOrder;
