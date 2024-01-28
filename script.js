/*A simple LMS or E-Learning service that let users(people) subscribe or be gifted a course prepared(uploaded, taught) by a tutor or a business*/

class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }
  
  class Tutor extends User {
    constructor(id, name, email, courses = []) {
      super(id, name, email);
      this.courses = courses;
    }
  
    createCourse(course) {
      this.courses.push(course);
    }
  }
  
  class Student extends User {
    constructor(id, name, email, subscriptions = []) {
      super(id, name, email);
      this.subscriptions = subscriptions;
    }
  
    subscribeToCourse(course) {
      this.subscriptions.push(new Subscription(this, course));
    }
  }
  
  class Admin extends User {
    constructor(id, name, email, courses = [], gifts = []) {
      super(id, name, email);
      this.courses = courses;
      this.gifts = gifts;
    }
  
    createCourse(course) {
      this.courses.push(course);
    }
  
    giftCourse(course, student) {
      this.gifts.push(new Gift(this, student, course));
    }
  }
  
  class Course {
    constructor(id, title, description, price) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.subscriptions = [];
    }
  
    subscribe(student) {
      return student.subscribeToCourse(this);
    }
  }
  
  class Subscription {
    constructor(student, course) {
      this.student = student;
      this.course = course;
    }
  }
  
  class Gift {
    constructor(gifter, giftee, course) {
      this.gifter = gifter;
      this.giftee = giftee;
      this.course = course;
    }
  }
  
// Example: User subscribing to a course
const user = new User("Chidiebube Onwugbufor", "chidichristopher0@gmail.com", "student");
const course = new Course("JavaScript Fundamentals", "Learn the basics of JavaScript", "tutor", 50);
user.subscribeToCourse(course);

// Example: Gifting a course
const recipientEmail = "emmanuel@gmail.com";
const gift = Gift.createGift(course, user, recipientEmail);
// Share the gift code with the recipient
