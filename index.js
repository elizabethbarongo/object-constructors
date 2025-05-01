

// QUESTION 1
// Define the bankAccount with userName and balance
// Define the method ddeposit that takes in amount
// Add amount to balance and print the new balance
// Define the method withdraw
// check if the amount is less than the balance that was initially deposited
// if amount is less than the balance subtract amount from the balance to know the money that was withdrawn
// print the new balance
// if not print not enough money
// crete 3 users with different account balances
// for each perform deposit and withdrawal



function BankAccount(name, balance) {
    this.name = name;
    this.balance = balance;
  
    this.deposit = function(amount) {
      this.balance += amount;
      console.log(this.name + " new balance: $" + this.balance);
    };
  
    this.withdraw = function(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(this.name + " withdrew $" + amount + ". New balance: $" + this.balance);
      } else {
        console.log("Not enough money for " + this.name);
      }
    };
  }
  
  let user1 = new BankAccount("Peter", 1500);
  let user2 = new BankAccount("Kamau", 300);
  let user3 = new BankAccount("Wambui", 10000);
  
  user1.deposit(20000);
  user1.withdraw(3000);
  
  user2.deposit(5000);
  user2.withdraw(700); 
  
  user3.deposit(1000)
  user3.withdraw(1700);




//  QUESTION 2
//   Create taskList object with empty task list
//   Define method addTask(task)
//   Add task to the list
// Define method completeTask(task)
//   Remove task from the list
// Define method listTasks()
//   Print all current tasks
// Add 4–5 tasks
// Complete one task
// Print remaining tasks


 const taskList = {
    tasks: [],
  
    addTask: function(task) {
      this.tasks.push(task);
      console.log("Added task: " + task);
    },
  
    completeTask: function(task) {
      let index = this.tasks.indexOf(task);
      if (index > -1) {
        this.tasks.splice(index, 1);
        console.log("Completed task: " + task);
      }
    },
  
    listTasks: function() {
      console.log("Tasks left:", this.tasks);
    }
  };
  
  taskList.addTask("Buy groceries");
  taskList.addTask("Clean room");
  taskList.addTask("Read a book");
  taskList.addTask("Finish homework");
  
  taskList.completeTask("Clean room");
  
  taskList.listTasks();


//   QUESTION THREE

// Define Student with name and scores list
// Define method getAverage()
//   Calculate and return average score
// Define method hasPassed()
//   If average >= 50 return true
//   Else return false
// Create 2 students and test both methods


function Student(name, scores) {
    this.name = name;
    this.scores = scores;
  
    this.getAverage = function() {
      let total = 0;
      for (let i = 0; i < this.scores.length; i++) {
        total += this.scores[i];
      }
      return total / this.scores.length;
    };
  
    this.hasPassed = function() {
      
    };
  }
  


//   QUESTION FOUR


// Create ShoppingCart object with empty items list
//   Define method addItem(item)
    // Add item to the list
//   Define method getTotal()
    // Return total price of all items
//   Add 3 items to the cart
//   Print the total price




const ShoppingCart = {
    items: [],
  
    addItem: function(item) {
      this.items.push(item);
      console.log("Added item: " + item.name + " ($" + item.price + ")");
    },
  
    getTotal: function() {
      let total = 0;
      for (let i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  };
  
  ShoppingCart.addItem({ name: "Shirt", price: 20 });
  ShoppingCart.addItem({ name: "Pants", price: 30 });
  ShoppingCart.addItem({ name: "Shoes", price: 50 });
  
  console.log("Total cost: $" + ShoppingCart.getTotal());



    // QUESTION FIVE

    // Define Movie with title, year, and rating
    // Define method isClassic()
    //   Return true if year < 2000
    // Define method recommend()
    //   If rating > 8 return "Highly recommended!"
    //   Else return "Not bad"
    // Create 3 movies and test methods


    function Movie(title, year, rating) {
        this.title = title;
        this.year = year;
        this.rating = rating;
      
        this.isClassic = function() {
          return this.year < 2000;
        };
      
        this.recommend = function() {
            if (rating >=8){
                return "Highly recommended!"
            }

            else{
                return "Not bad"
            }

        }

 
  
    }
 
let movie1 = new Movie("Machachari", 2015, 8);
let movie2 = new Movie("Maria", 2020, 6);
let movie3 = new Movie("Black panther", 2018, 7);
           
 console.log(`"${movie1.title}" is classic movie: ${movie1.isClassic()}`);
console.log(`Recommendation: ${movie1.recommend()}`);

        
console.log(`"${movie2.title}" is classic movie: ${movie2.isClassic()}`);
console.log(`Recommendation: ${movie1.recommend()}`);

        
console.log(`"${movie3.title}" is classic movie: ${movie3.isClassic()}`);
console.log(`Recommendation: ${movie1.recommend()}`);
  
  
  