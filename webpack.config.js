const socketUrl = process.env.REACT_APP_SOCKET_URL;

module.exports = {
  devServer: {
    proxy: {
      "/ws": {
        target: socketUrl,
        ws: true,
      },
    },
  },
};
