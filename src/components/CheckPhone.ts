
export const validatePhone = ({value}:any) =>{
  const phone = value;

  const phoneRegex = /^\+?[0-9]{7,15}$/;

  if (!phoneRegex.test(phone)) {
    return false;
  }

  return true;
}
