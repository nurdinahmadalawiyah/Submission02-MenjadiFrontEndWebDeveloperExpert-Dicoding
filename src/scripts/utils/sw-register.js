import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = () => {
  runtime.register();
};

export default swRegister;
