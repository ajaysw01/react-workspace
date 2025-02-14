import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input {...register("email", {})} />
        </div>
        <br />

        <div>
          <label>Password:</label>
          <input {...register("password")} />
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
