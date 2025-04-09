import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    viewdata();
  }, []);

  const viewdata = async () => {
    const res = await axios.get('http://localhost:9000/users');
    setUsers(res.data);
  };

  const styles = {
    container: {
      padding: '40px',
      fontFamily: 'Segoe UI, sans-serif',
      background: 'linear-gradient(to bottom right, #ffe9ec, #e0f7fa)',
      minHeight: '100vh',
      textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      background: 'linear-gradient(to right, #ff6ec4, #7873f5)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      marginBottom: '30px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      background: 'white',
      marginTop: '20px',
    },
    th: {
      padding: '15px',
      background: '#f5f5ff',
      color: '#333',
      border: '1px solid #f0f0f0',
    },
    td: {
      padding: '15px',
      border: '1px solid #f0f0f0',
    },
    trEven: {
      backgroundColor: '#f9f9ff',
    },
    trHover: {
      transition: '0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Registered Users List</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              style={index % 2 === 0 ? styles.trEven : null}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#f0faff')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  index % 2 === 0 ? '#f9f9ff' : 'white')
              }
            >
              <td style={styles.td}>{user.id}</td>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
