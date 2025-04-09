import React from 'react';
import axios from 'axios';

const Update = () => {
  const handleupdate = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const data = { name, age };
    await axios.put(`http://localhost:9000/users/${id}`, data);
    alert("User Updated Successfully");
    e.target.reset();
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #fff1eb, #ace0f9)',
      fontFamily: 'Segoe UI, sans-serif',
    }}>
      <form onSubmit={handleupdate} style={{
        background: '#ffffffdd',
        padding: '25px',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '260px',
      }}>
        <h3 style={{
          margin: '0 0 10px 0',
          fontSize: '1.4rem',
          background: 'linear-gradient(to right, #36d1dc, #5b86e5)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          textAlign: 'center',
        }}>
          Update User
        </h3>

        <input
          type="text"
          name="id"
          placeholder="Enter User ID"
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="name"
          placeholder="New Name"
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="age"
          placeholder="New Age"
          required
          style={inputStyle}
        />

        <button type="submit" style={{
          padding: '10px',
          border: 'none',
          borderRadius: '20px',
          background: 'linear-gradient(to right, #f857a6, #ff5858)',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '0.95rem',
        }}>
          Update
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: '10px 12px',
  borderRadius: '20px',
  border: '1px solid #ccc',
  outline: 'none',
  fontSize: '0.9rem',
};

export default Update;
