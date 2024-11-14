import { useState } from "react";

export default function useForm(values) {
    const [formValues, setFormValues] = useState(values);

    const handleUpdate = (event) => {
        console.log(event)
        const { name, value } = event?.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues)
    }

    return {
        formValues,
        handleUpdate,
        handleSubmit
    };
};