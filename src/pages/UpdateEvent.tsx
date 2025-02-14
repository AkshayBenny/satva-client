import {format} from 'date-fns';
import {useState} from 'react';
import {api_updateEvent} from '../api/api';

const UpdateEvent = () => {
  const [eventname, setEventname] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [minUsersPerTeam, setMinUsersPerTeam] = useState<string>('1');
  const [maxUsersPerTeam, setMaxUsersPerTeam] = useState<string>('1');
  const [status, setStatus] = useState('started');

  const handleSubmit = async () => {
    const response = await api_updateEvent(
      eventname,
      startTime,
      endTime,
      Number(minUsersPerTeam),
      Number(maxUsersPerTeam),
      status,
    );
    if (response.status) {
      console.log('success');
    } else {
      console.log('Error', response.message);
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h2>Update Event</h2>

      <input
        placeholder="eventname"
        value={eventname}
        onChange={e => setEventname(e.target.value)}
      />

      <input
        placeholder="startTime"
        type="date"
        value={format(startTime, 'yyyy-MM-dd')}
        onChange={e => setStartTime(new Date(e.target.value))}
      />

      <input
        placeholder="endTime"
        value={format(endTime, 'yyyy-MM-dd')}
        onChange={e => setEndTime(new Date(e.target.value))}
      />

      <input
        placeholder="minUsersPerTeam"
        value={minUsersPerTeam}
        onChange={e => setMinUsersPerTeam(e.target.value)}
      />

      <input
        placeholder="maxUsersPerTeam"
        value={maxUsersPerTeam}
        onChange={e => setMaxUsersPerTeam(e.target.value)}
      />

      <input
        placeholder="Status"
        value={status}
        onChange={e => setStatus(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UpdateEvent;
