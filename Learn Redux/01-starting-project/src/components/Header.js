import classes from './Header.module.css';
import {useSelector, useDispatch} from 'react-redux'
import {authActions} from '../store/index'

const Header = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector(state=>state.auth.isAuthenticated)

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth ? <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={()=>dispatch(authActions.logout())}>Logout</button>
          </li>
        </ul> : null}
      </nav>
    </header>
  );
};

export default Header;