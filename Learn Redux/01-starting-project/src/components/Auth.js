import classes from './Auth.module.css';
import {useDispatch} from 'react-redux'
import {authActions} from '../store/index'

const Auth = () => {

  const dispatch = useDispatch()

  const authHandler = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={authHandler}>
          <div className={classes.control}>
            <label htmlFor='text'>Username</label>
            <input type='text' id='text' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
