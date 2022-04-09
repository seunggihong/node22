async function getUser() {
  // user infomation load function
  try {
    const res = await axios.get("/user");
    const users = res.data;
    const list = document.getElementById("list");
    list.innerHTML = "";
    // user by user show screen and event connect
    Object.keys(users).map((key) => {
      const userDiv = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = users[key];
      const edit = document.createElement("button");
      edit.textContent = "revision";
      edit.addEventListener("click", async () => {
        const name = prompt("input the change name");
        if (!name) {
          return alert("input name!");
        }
        try {
          await axios.put("/user/" + key, { name });
          getUser();
        } catch (err) {
          console.error(err);
        }
      });
      const remove = document.createElement("button");
      remove.textContent = "remove";
      remove.addEventListener("click", async () => {
        // click remove button
        try {
          await axios.delete("/user/" + key);
          getUser();
        } catch (err) {
          console.error(err);
        }
      });
      userDiv.appendChild(span);
      userDiv.appendChild(edit);
      userDiv.appendChild(remove);
      list.appendChild(userDiv);
      console.log(res.data);
    });
  } catch (err) {
    console.error(err);
  }
}

// getUser function call at screen loading
window.onload = getUser;
// call at submit from
document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = e.target.username.value;
  if (!name) {
    return alert("input name");
  }
  try {
    await axios.post("/user", { name });
    getUser();
  } catch (err) {
    console.error(err);
  }
  e.target.username.value;
});
