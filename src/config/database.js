module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: 'secret',
  database: 'fastfeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
