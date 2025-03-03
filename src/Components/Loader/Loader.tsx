import  s from './Loader.module.css'

const Loader = () => {
    return (
        <div className={s.loadingContainer}>
            <div className={s.loadingText}>
                Loading...
            </div>
        </div>
    );
};

export default Loader;