const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
}, {
    collection: 'blogs'
  });

module.exports = mongoose.model('blogs', userSchema)