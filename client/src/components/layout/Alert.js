import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    alerts !== null &&
    alerts.length > 0 && (
      <div
        style={{
          position: 'fixed',
          top: '56px', // ajuste si ta navbar est plus grande
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '10px',
          textAlign: 'center',
        }}
      >
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`alert alert-${alert.alertType}`}
            style={{
              display: 'inline-block',
              margin: '0 auto',
              minWidth: '300px',
              maxWidth: '600px',
            }}
          >
            {alert.msg}
          </div>
        ))}
      </div>
    )
  );
};

export default Alert;

