import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((stat) => {
      console.log(`${stat[0].body} ${stat[1].firstName} ${stat[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
