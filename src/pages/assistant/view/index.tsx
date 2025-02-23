import { useEffect, useState } from 'react';
import { message, Modal } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import Chart from "../components/charts";
import Income from "../components/Income";
import { useAcceptTerm } from '../../../react-query/mutation/assistant';

const Assistant = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate: acceptTerm } = useAcceptTerm();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isAccepted = localStorage.getItem("assistantAccepted");

    if (location.pathname === '/assistant' && !isAccepted) {
      setIsModalOpen(true);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setIsModalOpen(false);
    navigate("/home");
  };

  const handleSubmit = () => {
    acceptTerm(undefined, {
      onSuccess: () => {
        message.success("წარმატებით გააქტიურდა ასისტენტი");
        localStorage.setItem("assistantAccepted", "true"); 
        setIsModalOpen(false);
      },
      onError: () => {
        message.error("დაფიქსირდა შეცდომა");
      },
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Chart /> 
      <Income />
     
      <Modal
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleClose}
        okText="ვეთანხმები"
        cancelText="გაუქმება"
        destroyOnClose
        width={500}
      >
        <p>
          თქვენი პერსონალური მონაცემების დამუშავება 
          მოხდება მესამე მხარის მიერ. 
          თანხმობის შემთხვევაში, მოხდება ასისტენტის
          ფუნქციონალის გააქტიურება.
        </p>
      </Modal>
    </div>
  );
};

export default Assistant;
