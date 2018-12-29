var ui = {};

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> 
	
	<!NavBar as a Header with an image>
  
  <!-- Image and text -->
<nav class="navbar navbar-expand-md navbar-dark  bg-dark">
  <img class= "img-responsive" src="bank_inv.png" width="30" height="30" alt="Bank">
  <a class="navbar-brand" href="#" onclick="defaultModule()">  Bad Bank </a> 


<!<ul class="nav nav-tabs" role="tablist">>
<ul class="navbar-nav mr-auto">
  <li class="nav-item">
    <a class="nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
  </li>
  
    <li class="nav-item">
    <a class="nav-link" href="#"  onclick="loadLogin()">Login</a>
  </li>
  
    <li class="nav-item">
    <a class="nav-link" href="#"onclick="loadDeposit()">Deposit</a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link" href="#"onclick="loadWithdraw()">Withdraw</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#"onclick="loadTransactions()">Transactions</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#"onclick="loadBalance()">Balance</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#"onclick="loadAllData()">All Data</a>
  </li>
</ul>
</nav>

 

`;

ui.createAccount = `
   
 <!-- ------------- CREATE ACCOUNT CODE ------------- --> 
  <div class="card border-dark mb-3" style="width: 24rem;">
  <div class="card-body">
    <h5 class="card-title">BadBank Account Creation</h5>
    <p class="card-text">Create an account</p>
  
  
    <form>
      <div class="form-group">
      <label for="NameField">Name</label>
      <input type="input" class="form-control" id="NameField" placeholder="Enter name">
      </div>
  
      <div class="form-group">
      <label for="EmailField">Email</label>
      <input type="email" class="form-control" id="EmailField" aria-describedby="EmailHelp" placeholder="Enter email">
      <small id="EmailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
  
      <div class="form-group">
      <label for="PasswordField">Password</label>
      <input type="password" class="form-control" id="PasswordField" placeholder="Password">
      </div>
 
      <button type="submit" class="btn btn-dark" onclick="create()">Create Account</button>
    </form>
    <br>
      <div id="status">
      </div>
 
  </div>
  </div>


<footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">Andrés Sala 2019.</span>
  </div>
</footer>

 <!-- ------------- CREATE ACCOUNT CODE END ------------- --> 
	
	
`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- --> 
    <div class="card border-dark mb-3" style="width: 24rem;">
    <div class="card-body">
      <h5 class="card-title">BadBank Account Login</h5>
      <p class="card-text">Access to your account</p>
  
  
      <form>
  
       <div class="form-group">
          <label for="EmailField">Email</label>
          <input type="email" class="form-control" id="EmailField" aria-describedby="EmailHelp" placeholder="Enter email">
         <small id="EmailHelp" class="form-text text-muted">Account email.</small>
       </div>
  
       <div class="form-group">
         <label for="PasswordField">Password</label>
         <input type="password" class="form-control" id="PasswordField" placeholder="Password">
       </div>
 
        <button type="submit" class="btn btn-dark" onclick="login()">Login</button>
      </form>
      <br>
      <div id="status">
      </div>


    </div>
    </div>

<footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">Andrés Sala 2019.</span>
  </div>
</footer>

 <!-- ------------- LOGIN CODE END ------------- --> 
`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> 
   <div class="card border-dark mb-3" style="width: 24rem;">
  <div class="card-body">
    <h5 class="card-title">BadBank Deposit</h5>
    <p class="card-text">Deposit funds</p>
  
  
  <form>
  
   <div class="form-group">
    <label for="EmailField">Email</label>
    <input type="email" class="form-control" id="EmailField" aria-describedby="EmailHelp" placeholder="Enter email">
    <small id="EmailHelp" class="form-text text-muted">Account email.</small>
  </div>
  
  <div class="form-group">
    <label for="DepositField">Deposit</label>
    <input type="number" min="0" class="form-control" id="DepositField" aria-describedby="DepositHelp" placeholder="Deposit">
    <small id="DepositHelp" class="form-text text-muted">Deposit amount.</small>
  </div>
 
     <button type="submit" class="btn btn-dark" onclick="deposit()">Deposit</button>
</form>
 
   <div id="status">
   </div>

  </div>
  </div>

<footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">Andrés Sala 2019.</span>
  </div>
</footer>

 <!-- ------------- DEPOSIT CODE END ------------- --> 


`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- --> 

   <div class="card border-dark mb-3" style="width: 24rem;">
  <div class="card-body">
    <h5 class="card-title">BadBank Withdraw</h5>
    <p class="card-text">Withdraw funds</p>
  
  
  <form>
  
   <div class="form-group">
    <label for="EmailField">Email</label>
    <input type="email" class="form-control" id="EmailField" aria-describedby="EmailHelp" placeholder="Enter email">
    <small id="EmailHelp" class="form-text text-muted">Account email.</small>
  </div>
  
  <div class="form-group">
    <label for="WithdrawField">Withdraw</label>
    <input type="text" class="form-control" id="WithdrawField" aria-describedby="WithdrawHelp" placeholder="Withdraw">
    <small id="WithdrawHelp" class="form-text text-muted">Withdraw amount.</small>
  </div>
 
     <button type="submit" class="btn btn-dark" onclick="withdraw()">Withdraw</button>
</form>
 
  </div>
</div>

<footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">Andrés Sala 2019.</span>
  </div>
</footer>

 <!-- ------------- WITHDRAW CODE END ------------- --> 


`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
   <div class="card border-dark mb-3" style="width: 24rem;">
  <div class="card-body">
    <h5 class="card-title">BadBank Account Transactions</h5>
    <p class="card-text">Check Account Transactions</p>
  
  
  <form>
  
   <div class="form-group">
    <label for="EmailField">Email</label>
    <input type="email" class="form-control" id="EmailField" aria-describedby="EmailHelp" placeholder="Enter email">
    <small id="EmailHelp" class="form-text text-muted">Account email.</small>
  </div>
 
     <button type="submit" class="btn btn-dark" onclick="transactions()">Show Transactions</button>
</form>
 
  </div>
</div>

<footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">Andrés Sala 2019.</span>
  </div>
</footer>

 <!-- ------------- TRANSACTION CODE END ------------- --> 

`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 

   <div class="card border-dark mb-3" style="width: 24rem;">
  <div class="card-body">
    <h5 class="card-title">BadBank Account Balance</h5>
    <p class="card-text">Check Account Balance</p>
  
  
  <form>
  
   <div class="form-group">
    <label for="EmailField">Email</label>
    <input type="email" class="form-control" id="EmailField" aria-describedby="EmailHelp" placeholder="Enter email">
    <small id="EmailHelp" class="form-text text-muted">Account email.</small>
  </div>
 
     <button type="submit" class="btn btn-dark" onclick="balance()">Show Balance</button>
</form>
 
  </div>
</div>

<footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">Andrés Sala 2019.</span>
  </div>
</footer>

 <!-- ------------- BALANCE CODE END ------------- --> 



`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
    <div class="card" style="width: 24rem;">
  <div class="card-body">
    <h5 class="card-title">BadBank Website</h5>
    <p class="card-text">Welcome to BadBank Website</p>
  <img class= "img-responsive" src="bank.png" width="300" height="300" alt="Bank">

  </div>
</div>

<footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">Andrés Sala 2019.</span>
  </div>
</footer>

`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
  <div class="card border-dark mb-3" style="width: 24rem;">
  <div class="card-body">
    <h5 class="card-title">BadBank Database</h5>
    <p class="card-text">Show Database Information</p>
  
  <form>   
     <button type="submit" class="btn btn-dark" onclick="allData()">Show All Data</button>
  </form>
 </div>
 </div>

<div class="card border-danger mb-3" style="max-width: 80rem;">
    <div class="card-header">Bank Accounts Information </div>
    <div class="card-body text-danger">
    <h5 class="card-title">(Confidential)</h5>
    </div>
    <div class="card-body">
        <form>
             <div id="status">
            </div>
        </form>
    </div>
</div>


<footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">Andrés Sala 2019.</span>
  </div>
</footer>

 <!-- ------------- BALANCE CODE END ------------- --> 




`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;


var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
