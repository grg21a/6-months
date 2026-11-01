const envelope = document.getElementById("envelope_form");
const wrap = document.querySelector(".envelope_form_wrap");

let step = 0;
let locked = false;

envelope.addEventListener("click", () => {
  if (locked) return;

  step++;

  if (step === 1) {
    envelope.className = "";
    envelope.classList.add("open_flap");
    wrap?.classList.remove("show_thanks");
  }

  else if (step === 2) {
    locked = true;

    envelope.classList.add("lift_letter");

    setTimeout(() => {
      envelope.classList.add("layer_switch");
    }, 880);

    setTimeout(() => {
      envelope.classList.add("place_letter");
    }, 920);

    setTimeout(() => {
      envelope.classList.add("open_letter");
    }, 1370);

    setTimeout(() => {
      locked = false;
    }, 2300);
  }

  else if (step === 3) {
    locked = true;

    envelope.classList.remove("open_letter");
    envelope.classList.add("closing_letter");

    setTimeout(() => {
      envelope.classList.remove("place_letter");
      envelope.classList.add("lift_back");
    }, 880);

    setTimeout(() => {
      envelope.classList.remove("layer_switch", "lift_back");
      envelope.classList.add("layer_back");
    }, 1540);

    setTimeout(() => {
      envelope.classList.remove("lift_letter", "layer_back");
      envelope.classList.add("insert_letter");
    }, 1580);

    setTimeout(() => {
      envelope.classList.add("wait_before_close");
    }, 2450);

    setTimeout(() => {
      envelope.classList.add("closed");
    }, 2750);

    setTimeout(() => {
      envelope.className = "closed";
      step = 0;
      locked = false;
    }, 3400);
  }
});