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
      background: '#fff',
      padding: '30px 25px',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      width: '280px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h3 style={{
        marginBottom: '15px',
        fontSize: '1.4rem',
        background: 'linear-gradient(to right, #f857a6, #ff5858)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}>
        Register User
      </h3>

      <form onSubmit={handleregister} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
        alignItems: 'center',
      }}>
        <input type='text' name='name' placeholder='Name' required style={{
          padding: '10px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          width: '100%',
          textAlign: 'center',
        }} />

        <input type='text' name='age' placeholder='Age' required style={{
          padding: '10px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          width: '100%',
          textAlign: 'center',
        }} />

        <button type='submit' style={{
          padding: '10px',
          borderRadius: '20px',
          border: 'none',
          background: 'linear-gradient(to right, #36d1dc, #5b86e5)',
          color: '#fff',
          fontWeight: 'bold',
          width: '100%',
          cursor: 'pointer',
        }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
