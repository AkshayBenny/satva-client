import {useEffect, useState} from 'react';
import {Participant} from '../api/api';

interface ParticipantsProps {
  participants: Participant[];
  id: number;
}
const Participants = ({participants, id}: ParticipantsProps) => {
  const [username, setUsername] = useState('');
  const [sem, setSem] = useState('');
  const [registernumber, setRegisternumber] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentDone, setPaymentDone] = useState('yes');

  useEffect(() => {
    setUsername(participants[id].username);
    setSem(String(participants[id].sem));
    setRegisternumber(participants[id].registernumber);
    setPhone(participants[id].phone);
    setEmail(participants[id].email);
    setPaymentDone(participants[id].paymentDone ? 'yes' : 'no');
  }, [participants, id]);

  useEffect(() => {
    participants[id].username = username;
    participants[id].sem = Number(sem);
    participants[id].registernumber = registernumber;
    participants[id].phone = phone;
    participants[id].email = email;
    participants[id].paymentDone = paymentDone == 'yes' ? true : false;
  }, [username, sem, registernumber, phone, email, paymentDone]);

  return (
    <div>
      <input
        placeholder="Name"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <input
        placeholder="registernumber"
        value={registernumber}
        onChange={e => setRegisternumber(e.target.value)}
      />

      <input
        placeholder="sem"
        value={sem}
        onChange={e => setSem(e.target.value)}
      />

      <input
        placeholder="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />

      <input
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <select
        value={paymentDone}
        onChange={e => setPaymentDone(e.target.value)}>
        <option value="yes">YES</option>
        <option value="no">No</option>
      </select>
    </div>
  );
};

export default Participants;
