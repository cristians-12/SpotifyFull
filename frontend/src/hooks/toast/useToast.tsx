import toast from "react-hot-toast";

const useToast = () => {
  const successToast = (message: string) => toast.success(message);

  return {
    successToast,
  };
};

export default useToast;
