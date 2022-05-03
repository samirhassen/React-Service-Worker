// const arr = [1,2,4]
// if(1 in arr)
// {}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    navigator.serviceWorker
    .register(swUrl)
    .then(console.log("Registrerad"))
    .catch(err => console.error("Ej reggad: " + err))
  })
}
else {}
