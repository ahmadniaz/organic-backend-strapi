module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
<<<<<<< HEAD
  url:'https://strapi-backend-organic.herokuapp.com',
=======
>>>>>>> 1c5e86b (ReUploading to git repo)
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4a65c6638e6407fe514ef593c73d3d4c'),
    },
  },
});
