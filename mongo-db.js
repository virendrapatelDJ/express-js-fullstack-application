const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/expressjs-demo-live", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MOngo Db connected....");
  });

const courseSchema = {
  title: mongoose.Schema.Types.String,
  author: mongoose.Schema.Types.String,
  price: mongoose.Schema.Types.Number,
};

const Course = mongoose.model("Course", courseSchema);

// Course.find().then((courses) => {
//   console.log(courses);
// });

// Course.find({ price: 299, title: "Node Course" }).then((courses) => {
//   console.log(courses);
// });

// Course.findById("614f593c30c2f9b912695a4a").then((course) => {
//   console.log(course);
// });

// Course.count().then((count) => {
//   console.log({ count });
// });

function createCourse(title, author, price) {
  const course = new Course({
    title,
    author,
    price,
  });

  course.save().then((course) => {
    console.log({ course });
  });
}

// createCourse("Angular Course", "Virendra", 199);
// createCourse("Node Course", "Virendra", 299);
// createCourse("Express Course", "Virendra", 300);
// createCourse("Java Course", "Virendra", 123);

// Course.updateOne(
//   { _id: "614f593c30c2f9b911695a4a" },
//   {
//     $set: {
//       author: "Sandeep",
//     },
//   }
// ).then((result) => {
//   console.log(result);
// });

// Course.deleteOne({ _id: "614f593c30c2f9b911695a4a" }).then((result) => {
//   console.log(result);
// });

Course.create({
  title: "Hibernate Course",
  author: "Glen",
  price: 999,
}).then((course) => {
  console.log(course);
});
