import { toast } from "react-toastify";


export default function handleErrors(error) {
    let errorData = error?.response?.data;

    if (errorData) {
        if (Array.isArray(errorData?.errors)) {
            errorData?.errors?.map((data) => {
                toast.error(data?.message)
                console.log(data?.message)
                throw data?.message;
            });
        } else {
            toast.error(errorData?.message);
            console.log(errorData?.message)
            throw errorData?.message;
        }
    } else {
        // error.message
        toast.error(error?.message);
        console.log(error?.message)
        throw error?.message;
    }
}