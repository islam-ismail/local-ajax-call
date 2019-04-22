const btn = document.querySelector(".btn");
const info = document.querySelector(".info");

function getData(url) {
  const ajax = new XMLHttpRequest();
  console.log(ajax);

  // open method
  ajax.open("GET", url, true);

  // // Using onreadystatechange method

  //   ajax.onreadystatechange = function() {
  //     if (this.status === 200 && this.readyState === 4) {
  //       info.textContent = this.responseText;
  //     }
  //   };

  // Using onload method

  ajax.onload = function() {
    if (this.status === 200) {
      info.textContent = this.responseText;
    } else {
      console.log(this.statusText);
    }
  };

  // using onerror method
  ajax.onerror = function() {
    console.log("there is an error");
  };

  // send method
  ajax.send();
}

btn.addEventListener("click", () => {
  getData("info.txt");
});
