<ion-header>
  <ion-navbar>
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
<div class="container">
  <form action="index.html" method="post">
    <h1>
      Sign in
    </h1>
    <div class="form-content">
      <input id="user-name" name="user-name" placeholder="user name" type="text" /><input id="password" name="password" placeholder="password" type="password" /><br />
      <div class="button">
        Log in
      </div>
      <br />
      <div class="signup-message">
        <a href="#">Forgot your password?</a>
      </div>
    </div>
  </form>
</div>
</ion-content>

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #FAFAFA;

}

body {
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

h1 {
  font-weight: 700;
  color: #384047;
  text-align: center;
  line-height: 1.5em;
  margin-bottom: 1.2em;
  margin-top: 0.2em;
}

a {
  font-size: 0.98em;
  color: #8a97a0;
  text-decoration: none;
}
a:hover {
  color: #3F51B5;
}

.container {
  display: flex;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 6%;
  margin: 0;
}

form {
  background-color: #FFF;
  padding: 2em;
  padding-bottom: 3em;
  border-radius: 8px;
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
form input {
  color: #384047;
  background-color: #e8eeef;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  border: none;
  border-radius: 4px;
  padding: 1.5em;
  margin-bottom: 1.2em;
  width: 100%;
  font-family: monospace;
  font-size: 12px
  
  }
form input:focus {
  outline: none;
}

.button {
  font-weight: 600;
  text-align: center;
  font-size: 19px;
  color: #FFF;
  background-image: linear-gradient(to right, #2c2f3c , #3F51B5);
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 0.8em;
  margin-top: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
}
.button:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  transform: translateY(-4px);
}
.button span {
  position: relative;
  z-index: 1;
}


