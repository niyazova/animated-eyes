const job = document.getElementById('job');
const dob = document.getElementById('dob');
const userName = document.getElementById('name');
const userLocation = document.getElementById('location');

function updateInfo() {
  const nameInput = document.getElementsByName('name')[0];
  const jobInput = document.querySelector('[name="job"]');
  const locationInput = document.querySelector('[name="location"]');
  const dobInput = document.querySelector('[name="dob"]');

  userName.innerHTML = nameInput.value;
  job.innerHTML = jobInput.value;
  dob.innerHTML = dobInput.value;
  userLocation.innerHTML = locationInput.value;
}