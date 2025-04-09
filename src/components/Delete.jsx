import React from 'react';
import axios from 'axios';

const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    await axios.delete(`http://localhost:9000/users/${id}`);
    alert('Product deleted');
    e.target.reset();
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #ffe9ec, #e0f7fa)',
      fontFamily: 'Segoe UI, sans-serif',
    }}>
      <form onSubmit={handleDelete} style={{
        background: '#fff',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        width: '280px',
        textAlign: 'center',
      }}>
        <h2 style={{
          margin: 0,
          background: 'linear-gradient(to right, #ff758c, #7873f5)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontSize: '1.5rem',
        }}>
          Delete User
        </h2>
        <input
          type="text"
          name="id"
          placeholder="Enter ID"
          required
          style={{
            padding: '10px',
            borderRadius: '25px',
            border: '1px solid #ccc',
            outline: 'none',
            textAlign: 'center',
          }}
        />
        <button type="submit" style={{
          padding: '10px',
          borderRadius: '25px',
          border: 'none',
          background: 'linear-gradient(to right, #ff5858, #f857a6)',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default Delete;
