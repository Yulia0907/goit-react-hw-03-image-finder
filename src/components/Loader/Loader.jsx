import { Vortex } from 'react-loader-spinner';
import '../../styles.css';

export const Loader = () => {
  return (
    <div className="loaderWrapper">
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};
