import {API_URL} from '../../constants/config';
import {delay, timeoutPromise} from '../../util/generic';
import axios from 'axios';

export async function getUser(token) {
  try {
    const response = await timeoutPromise(
      8000,
      axios(`${API_URL}/api/users/me/`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${token}`,
        },
      }),
    );

    return response;
  } catch (exception) {
    throw exception;
  }
}

export default {
  getUser: getUser,
};
