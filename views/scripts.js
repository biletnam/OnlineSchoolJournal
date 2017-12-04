window.onload = () => {
  document.querySelectorAll(".delete-button").forEach( button => {
    button.onclick = function() {
      axios.delete(this.getAttribute('forUrl'))
      button.parentElement.parentElement.remove()
    }
  })
}