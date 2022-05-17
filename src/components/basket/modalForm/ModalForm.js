import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";
import { colRef } from "../../../firebase";
import { addDoc } from "firebase/firestore";
import ButtonMain from "../../reusedComponent/buttonMain/ButtonMain";

import "./modalForm.scss";

const ModalForm = ({ setOpen, setSuccess }) => {
  const { cart } = useSelector((state) => state.catalog);
  const { t, i18n } = useTranslation();

  const addOrderToFirebase = async (values, resetForm) => {
    const orderData = [];
    const ownData = [
      {
        name: values.name,
        phone: values.phone,
        orderData,
      },
    ];
    const newOrder = { ownData };
    await cart.map((item) => {
      orderData.push({
        title: item.title,
        size: item.size,
        color: item.color,
        id: item.id,
      });
    });

    addDoc(colRef, newOrder);
    resetForm({ name: "", phone: "" });
    setSuccess(true);
    setTimeout(() => {
      setOpen(false);
      setSuccess(false);
    }, [2000]);
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", phone: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = t("validate.required");
          }
          if (!values.phone) {
            errors.phone = t("validate.required");
          } else if (values.phone.length < 10) {
            errors.phone = t("validate.phone");
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) =>
          addOrderToFirebase(values, resetForm)
        }
      >
        <Form className="modal__form">
          <Field
            type="name"
            name="name"
            className="form__input"
            placeholder="Name"
          />
          <ErrorMessage name="name" component="div" className="form__error" />
          <Field
            type="tel"
            name="phone"
            className="form__input"
            placeholder="Phone"
          />
          <ErrorMessage name="phone" component="div" className="form__error" />
          <ButtonMain text={t("to order")} />
        </Form>
      </Formik>
    </div>
  );
};

export default ModalForm;
