import React from 'react';

const Main = () => (
  <div style={{ marginTop: 35 }}>
    <div
      style={{
        width: '100%',
        height: '100vh', //Por que nã0 100%???
        backgroundColor: '#000',
      }}
    >
      <div
        style={{
          width: '100%',
          height: 250,
          background: 'radial-gradient(circle,#886aff 0,#6949e3 100%)',
        }}
      />
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          position: 'absolute',
          transform: 'translateY(-50%)',
        }}
      >
        <button
          style={{
            width: 186,
            height: 70,
            outline: 'none',
            background: '#fff',
            boxShadow: '0 1.875rem 3.75rem -1.25rem rgba(0,0,0,.15)',
            border: 'none',
            transition: '1s',
            '&:hover': {
              backgroundColor: '#322e46',
            },
          }}
          onClick={() => alert('Clique')}
        >
          Contact Us ->
        </button>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#f7f7f8',
        }}
      />
    </div>
  </div>
);
export default Main;
