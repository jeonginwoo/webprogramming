function show(obj) {
  let prevention = document.getElementById("prevention");
  switch (obj.id) {
    case "prevention1":
      prevention.innerHTML =
        "<img src='image/general_public_rules.jpg' width='600' height='850'/>";
      break;
    case "prevention2":
      prevention.innerHTML =
        "<img src='image/elderly_ruls-daily_life.png' width='600' height='850'/>";
      break;
    case "prevention3":
      prevention.innerHTML =
        "<img src='image/elderly_ruls-outside_activities.png' width='600' height='850'/>";
      break;
    case "prevention4":
      prevention.innerHTML =
        "<img src='image/suspected_infection_patients_rules.jpg' width='600' height='850'/>";
      break;
    case "prevention5":
      prevention.innerHTML =
        "<img src='image/self_quarantine_patients_Life_rules.png' width='600' height='850'/>";
      break;
  }
}
