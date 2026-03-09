import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import nprogress from 'nprogress';
import '../css/nprogress.css';

nprogress.configure({ showSpinner: false, minimum: 0.1 });

export default (function () {
    if (!ExecutionEnvironment.canUseDOM) {
        return null;
    }

    return {
        onRouteUpdate({ location, previousLocation }) {
            if (previousLocation && location.pathname !== previousLocation.pathname) {
                nprogress.start();
            }
        },
        onRouteDidUpdate({ location, previousLocation }) {
            if (previousLocation && location.pathname !== previousLocation.pathname) {
                nprogress.done();
            }
        },
    };
})();
