// Function for deleting file
function deleteFile(id) {
  //   console.log(id);
  const result = confirm("Are you sure you want to delete this CSV File?");
  if (result) {
    fetch("/delete?id=" + id, {
      method: "POST",
    })
      .then((res) => {
        if (res.ok) {
          location.reload();
        }
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    window.alert("Process request has been reverted");
  }
}
