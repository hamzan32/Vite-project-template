import { RootState } from '@/redux';
import { decrement, increment } from '@/redux/CounterSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import chatSocketService from '@/services/chat-socket.service';
import { api } from '@/redux/socketMutation';
function LandingPage() {
  useEffect(() => {
    chatSocketService.listen(`user-joined`).subscribe((response) => {
      console.log(response);
    });
  }, []);
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  return <h1>sarwar</h1>;
}

export default LandingPage;
