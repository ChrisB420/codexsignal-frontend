import React, { useEffect, useState } from 'react';
import Peer from 'peerjs';

const Connect = () => {
  const [peerId, setPeerId] = useState('');
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on('open', (id) => {
      setPeerId(id);
      console.log('My peer ID is: ' + id);
    });

    peer.on('connection', (conn) => {
      setConnection(conn);
      conn.on('data', (data) => {
        console.log('Received:', data);
      });
    });
  }, []);

  return (
    <div>
      <p>Your Peer ID: {peerId}</p>
    </div>
  );
};

export default Connect;