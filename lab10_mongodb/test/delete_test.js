const assert = require("assert");
const Student = require("../src/students");
const { describe, beforeEach,then } = require("mocha");
describe("Delete the records", function () {
  let student1;
  beforeEach(function (done) {
    student1 = new Student({ name: "Peter" });
    student1.save()
    .then(function () {
      done();
    });
  })
  it("delete by id", function (done) {
    Student.findByIdAndDelete(student1._id) 
    .then(function () {
        Student.findOne({ name: "Peter" });
    })
    .then(function () {
        assert(student === null);
        done();
    });




  });
});
