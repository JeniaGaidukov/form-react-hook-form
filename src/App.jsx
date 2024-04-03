import { useForm } from 'react-hook-form';
function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title">Create Account</h1>
        <div className="form__field">
          <label className="from__label" for="username">
            Username:
          </label>
          <input
            {...register('username', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Minimum number of symbols 3',
              },
            })}
            id="username"
            type="text"
            placeholder="Enter your Name"
            className="form__input"
          />
          <div className="error">
            {errors.username && <>{errors.username.message}</>}
          </div>
        </div>
        <div className="form__field">
          <label className="from__label" for="surname">
            Surname:
          </label>
          <input
            id="surname"
            type="text"
            placeholder="Enter your Surname"
            className="form__input"
          />
        </div>
        <div className="form__field">
          <label className="from__label" for="phone">
            Phone number:
          </label>
          <input
            {...register('phone', {
              required: 'This field is required',
              pattern: {
                value: /(?:\+38)?0\d{9}/,
                message: 'The phone number must start with 0 or +380',
              },
            })}
            id="phone"
            type="tel"
            placeholder="Enter phone number"
            className="form__input"
          />
          <div className="error">
            {errors.phone && <>{errors.phone.message}</>}
          </div>
        </div>
        <div className="form__field">
          <label className="from__label" for="email">
            Email:
          </label>
          <input
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email is invalid',
              },
            })}
            id="email"
            type="text"
            placeholder="Enter email"
            className="form__input"
          />
          <div className="error">
            {errors.email && <>{errors.email.message}</>}
          </div>
        </div>
        <div className="form__field">
          <label className="from__label" for="password">
            Password:
          </label>
          <input
            {...register('password', {
              required: 'This field is required',
              pattern: {
                value: /^(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
                message:
                  'Password must contain at least 8 symbols and one digit',
              },
            })}
            id="password"
            type="password"
            placeholder="Your password"
            className="form__input"
          />
          <div className="error">
            {errors.password && <>{errors.password.message}</>}
          </div>
        </div>
        <div className="form__field">
          <button className="form__button" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
