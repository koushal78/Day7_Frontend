import React from 'react';
import axios from 'axios';

const Register = () => {
  const handleregister = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      age: e.target.age.value,
    };
    await axios.post('http://localhost:9000/users', user);
    alert('User Registered Successfully');
    e.target.reset();
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #fdfbfb, #ebedee)',
      fontFamily: 'Segoe UI, sans-serif',
    }}>
      <form onSubmit={handleregister} style={{
        background: '#fff',
        padding: '20px 25px',
        borderRadius: '15px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '250px',
        fontSize: '0.9rem',
      }}>
        <h3 style={{
          margin: '0 0 10px 0',
          fontSize: '1.3rem',
          background: 'linear-gradient(to right, #f857a6, #ff5858)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          textAlign: 'center',
        }}>
          Register User
        </h3>

        <label>Name</label>
        <input type='text' name='name' required style={{
          padding: '8px 12px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          outline: 'none',
        }} />

        <label>Age</label>
        <input type='text' name='age' required style={{
          padding: '8px 12px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          outline: 'none',
        }} />

        <button type='submit' style={{
          marginTop: '10px',
          padding: '10px',
          border: 'none',
          borderRadius: '20px',
          background: 'linear-gradient(to right, #36d1dc, #5b86e5)',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
