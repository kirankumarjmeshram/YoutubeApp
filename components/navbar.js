function navbar(){
    return `<div>
    <span class="material-icons iconsize"> list </span>
  </div>
  <div>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
    />
  </div>
  <div>
    <input type="text" oninput="debounce(searchList,2000)" id="search_bar" placeholder="Search" />
  </div>
  <div>
    <button><span class="material-icons"> search </span></button>
  </div>
  <div>
    <span class="material-icons iconsize"> mic </span>
  </div>
  <div>
    <span class="material-icons iconsize"> notifications </span>
  </div>
  <div id="change-div">
    <a href="Login.html"><button><span class="material-icons"> account_circle </span><span id="sign1">SIGN IN</span></button></a>
  </div>`
}

export default navbar