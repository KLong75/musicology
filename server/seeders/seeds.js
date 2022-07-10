// const faker = require('faker');
// const faker = require('@faker-js/faker');

const userSeeds = require('./userSeed.json');
const postSeeds = require('./postSeed.json');

const db = require('../config/connection');
const { User, Post } = require('../models');

db.once('open', async () => {
  try {
    await Post.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postAuthor } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: postAuthor },
        {
          $addToSet: {
            posts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});













































//   const userData = [];

//   for (let i = 0; i < 50; i += 1) {
//     const username = faker.internet.userName();
//     const email = faker.internet.email(username);
//     const password = faker.internet.password();
//     const age = faker.datatype.number({ min: 18, max: 100 });
//     const instrument = faker.lorem.word();
//     const profileImage = faker.image.avatar();
//     const description = faker.lorem.sentences(3);   
//     const genres = faker.music.genre();
//     const influences = faker.lorem.words(4);
//     const currentProjects = faker.lorem.words(3);
//     const pastProjects = faker.lorem.words(3);
//     const videoLink = faker.internet.url();
//     const audioLink = faker.internet.url();

//     userData.push({ 
//       username, 
//       email, 
//       password,
//       age,
//       instrument,
//       profileImage,
//       description,
//       genres,
//       influences,
//       currentProjects,
//       pastProjects,
//       videoLink,
//       audioLink
//     });
//   }

//   const createdUsers = await User.collection.insertMany(userData);

//   // create posts
//   let createdPosts = [];
//   for (let i = 0; i < 100; i += 1) {
//     const postText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

//     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//     const { username, _id: userId } = createdUsers.ops[randomUserIndex];

//     const createdPost = await Post.create({ postText, username });

//     const updatedUser = await User.updateOne(
//       { _id: userId },
//       { $push: { posts: createdPost._id } }
//     );

//     createdPosts.push(createdPost);
//   }

//   // create responses
//   for (let i = 0; i < 100; i += 1) {
//     const responseText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

//     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//     const { username } = createdUsers.ops[randomUserIndex];

//     const randomPostIndex = Math.floor(Math.random() * createdPosts.length);
//     const { _id: postId } = createdPosts[randomPostIndex];

//     await Post.updateOne(
//       { _id: postId },
//       { $push: { responses: { responseText, username } } },
//       { runValidators: true }
//     );
//   }