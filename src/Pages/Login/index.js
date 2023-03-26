import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                 <h1 className={cx('login-title')}>Login</h1>
                <h2 className={cx('login-description')}>Hi, welcome back!</h2>
                <input className={cx('input-name')} type={'text'}></input>
                <input className={cx('input-password')} type={'password'}></input>
                <button className="btn btn-primary btn-lg">Submit</button>
            </div>
        </div>
    )
}
export default Login;
