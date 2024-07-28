import bioData from './BioData';
import { useForm } from "react-hook-form";


function PersonalPage() {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: { ...bioData },
    });
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bio-container">
            <img src={bioData.photo} alt="bio-photo" />
            <hr></hr>
            <div>
                <input {...register("name")} />
                <input {...register("surname")} /> name</div>
            <div><input {...register("phone")} /> phone</div>
            <div><input {...register("email")} /> email</div>
            <div><input {...register("residence")} /> residence</div>
            <div><input {...register("experience")} /> experience</div>
            <div><input {...register("skills")} /> skills</div>

            <div>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => reset(bioData)}>
                    Reset
                </button></div>
        </form>
    );
};

export default PersonalPage;