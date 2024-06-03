import React, { useState } from 'react';
import './Messager.css'
import axios from "axios";

const Messager = () => {
  const [message, setMessage] = useState("")

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/sendMessage', {
        message
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.data.success) {
        setMessage('');
      } else {
        console.log("some err")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-3/5 m-auto gap-3">
        <h1>Выберите чат</h1>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-red-600 text-white hover:text-blue-500"
          onClick={sendMessage}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Messager;