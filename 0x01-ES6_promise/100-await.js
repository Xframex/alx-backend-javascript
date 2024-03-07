import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let status= {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    status= { photo, user };
  } catch (err) {
    status= { photo: null, user: null };
  }
  return status;
}
