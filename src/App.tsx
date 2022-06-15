import './App.scss';
import { useState } from 'react';
import { Button, DatePicker, Modal } from 'antd';
import SiderNav from '@/components/shell/Navbar/Navbar';
function App() {
  const [count, setCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <SiderNav />
    </div>
  );
}

export default App;
