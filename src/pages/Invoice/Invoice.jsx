import React from "react";
import Inputs, { LabelInputs } from "@components/Inputs/Inputs";
import FileInput from "@components/FileInput/FileInput";
import { useDispatch, useSelector } from "react-redux";
import {
  setDate,
  setDateLabel,
  setInvoiceName,
  setInvoiceNumber,
  setPaymentTerms,
  setPaymentTermsLabel,
  setInvoiceDueDate,
  setInvoiceDueDateLabel,
  setPoNumber,
  setPoNumberLabel,
} from "@store/slices/invoice";
import InvoiceDetails from "@components/InvoiceDetails/InvoiceDetails";
import ItemList from "@components/ItemList/ItemList";
import InvoiceDescription from "@components/InvoiceDescription/InvoiceDescription";
import Billing from "@components/Billing/Billing";
import SideBar from "@components/SideBar/SideBar";

const Invoice = () => {
  const dispatch = useDispatch();
  const {
    invoiceName,
    invoiceNumber,
    invoiceDate,
    invoiceDateLabel,
    paymentTerms,
    paymentTermsLabel,
    invoiceDueDate,
    invoiceDueDateLabel,
    poNumber,
    poNumberLabel,
  } = useSelector((state) => state.invoice);
  return (
    <div className="grid-row-2 grid grid-cols-12 md:gap-4  lg:mt-6 lg:p-4  ">
      <div className="col-span-12 lg:col-span-10 md:shadow-lg rounded p-4 md:border">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7">
            <FileInput />
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between items-end">
            <div className="flex flex-col md:flex-row md:gap-4 lg:flex-col items-center lg:items-end w-full justify-between">
              <input
                type="text"
                className="text-gray-600 border border-transparent hover:border-gray-200 w-full text-4xl lg:text-right py-1 px-2 focus:outline-gray-200 focus:outline-1 mb-2"
                onChange={(e) => dispatch(setInvoiceName(e.target.value))}
                value={invoiceName}
              />
              <div className="border w-full lg:w-[50%] flex items-center rounded">
                <span className="py-1 px-3 bg-gray-100">#</span>
                <input
                  type="text"
                  className="text-gray-600 w-full  text-right focus:outline-none px-2"
                  onChange={(e) => dispatch(setInvoiceNumber(e.target.value))}
                  value={invoiceNumber}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <InvoiceDetails />
          </div>

          <div className="col-span-12 lg:col-span-5  w-full">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <LabelInputs
                className="lg:text-right"
                value={invoiceDateLabel}
                onChange={(e) => dispatch(setDateLabel(e.target.value))}
              />
              <Inputs
                type={"date"}
                value={invoiceDate}
                onChange={(e) => dispatch(setDate(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <LabelInputs
                className="lg:text-right"
                value={paymentTermsLabel}
                onChange={(e) => dispatch(setPaymentTermsLabel(e.target.value))}
              />
              <Inputs
                type={"text"}
                value={paymentTerms}
                onChange={(e) => dispatch(setPaymentTerms(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <LabelInputs
                className="lg:text-right"
                value={invoiceDueDateLabel}
                onChange={(e) => setInvoiceDueDateLabel(e.target.value)}
              />
              <Inputs
                type={"date"}
                value={invoiceDueDate}
                onChange={(e) => dispatch(setInvoiceDueDate(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <LabelInputs
                className="lg:text-right"
                value={poNumberLabel}
                onChange={(e) => dispatch(setPoNumberLabel(e.target.value))}
              />
              <Inputs
                type={"text"}
                value={poNumber}
                onChange={(e) => dispatch(setPoNumber(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div>
          <ItemList />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 py-4 ">
          <div className="flex flex-col gap-4">
            <InvoiceDescription />
          </div>
          <div className="">
            <Billing />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-2  rounded p-4">
        <SideBar />
        {/* <button
          className="border-none"
          onClick={() => dispatch(resetInvoice())}
        >
          Reset
        </button> */}
      </div>
    </div>
  );
};

export default Invoice;
