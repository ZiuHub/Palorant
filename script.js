function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade').forEach(el => {
    el.style.animationDelay = '0.3s';
    el.classList.add('visible');
  });
});

const agentDescriptions = {
  Omen: {
    title: "Oden (Controller)",
    desc: "Oden lurks in the shadows, blinding enemies and teleporting to strategic positions. He's the master of confusion and control.",
    colorClass: "oden-desc"
  },
  Cypher: {
    title: "Chyper (Sentinel)",
    desc: "Chyper is an intel-gathering expert. With traps and cameras, no one sneaks past his watchful eyes.",
    colorClass: "chyper-desc"
  },
  Skye: {
    title: "Skyle (Initiator)",
    desc: "Skyle heals allies and sends out beasts to clear the way. She's nature’s support and offense combined.",
    colorClass: "skyle-desc"
  },
  Jett: {
    title: "Jexx (Duelist)",
    desc: "Fast and agile, Jexx slices through battlefields with style and deadly precision.",
    colorClass: "jexx-desc"
  },
  Brimstone: {
    title: "Brewstone (Controller)",
    desc: "Brewstone delivers precise strikes from above and keeps his team organized with smokes and stim beacons.",
    colorClass: "brewstone-desc"
  }
};

const agentDescBox = document.querySelector('.agent-description-box');
const agentCards = document.querySelectorAll('.agent-card');

agentCards.forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.agent;
    const detail = agentDescriptions[key];
    agentDescBox.querySelector('h2').textContent = detail.title;
    agentDescBox.querySelector('p').textContent = detail.desc;
    agentDescBox.className = `agent-description-box ${detail.colorClass}`;
    agentDescBox.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelector('.close-desc').addEventListener('click', () => {
  agentDescBox.querySelector('h2').textContent = 'Select an Agent';
  agentDescBox.querySelector('p').textContent = 'Pick an agent, master their unique abilities, and prepare to lead your team to victory in the heat of battle.';
  agentDescBox.className = 'agent-description-box agent-default';
});

const mapDescriptions = {
  lotus: { title: "Loxus", desc: "Loxus is a mystic battleground filled with ancient secrets and rotating doors." },
  sunset: { title: "Gunset", desc: "Gunset is an urban terrain with neon lights and intricate alleyways." },
  bind: { title: "Blind", desc: "Blind offers dynamic play with teleporters and split strategic points." },
  abyss: { title: "Alyss", desc: "Alyss features vertical challenges and open spaces, demanding precision." },
  glitch: { title: "Flinch", desc: "Flinch is a futuristic map with shifting walls and unpredictable zones." }
};

const mapDesc = document.querySelector('.map-description');
const mapBoxes = document.querySelectorAll('.map-box');

mapBoxes.forEach(box => {
  box.addEventListener('click', () => {
    const key = box.dataset.map;
    const detail = mapDescriptions[key];
    mapDesc.querySelector('h2').textContent = detail.title;
    mapDesc.querySelector('p').textContent = detail.desc;
    mapDesc.className = `map-description ${key}-desc`;
    mapDesc.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelector('.close-desc').addEventListener('click', () => {
  mapDesc.querySelector('h2').textContent = 'Select a Map';
  mapDesc.querySelector('p').textContent = 'Each map offers unique terrain and challenges. Choose your battleground to strategize and outmaneuver your opponents.';
  mapDesc.className = 'map-description';
});

function validateForm(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const server = document.getElementById("server").value;
  const details = document.getElementById("details").value;
  const consent = document.getElementById("consent").checked;

  let message = "";
  if (!username) message = "Name cannot be empty";
  else if (!email || !email.endsWith("@giot.com")) message = "Email must end with @giot.com";
  else if (!server) message = "Please select your server";
  else if (!details || details.length < 10) message = "Provide at least 10 characters of detail";
  else if (!consent) message = "You must allow follow-up emails";

  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.remove("success");
  notification.classList.add("show");

  if (message) {
    setTimeout(() => notification.classList.remove("show"), 3000);
    return false;
  }

  notification.textContent = "Form submitted successfully!";
  notification.classList.remove("error");
  notification.classList.add("success", "show");
  setTimeout(() => notification.classList.remove("show"), 3000);
  return true;
}