document.addEventListener("DOMContentLoaded", () => {
  const follower = document.querySelector(".follower");
  const target = document.querySelector(".target");

  const controls = {
      f: { slider: document.getElementById("fSlider"), input: document.getElementById("fInput") },
      z: { slider: document.getElementById("zSlider"), input: document.getElementById("zInput") },
      r: { slider: document.getElementById("rSlider"), input: document.getElementById("rInput") }
  };

  let mousePos = new Vector2();
  // let lastMousePos = new Vector2();
  const dynamics = new SecondOrderDynamics(2.5, 0.65, 1.0, new Vector2());

  function clampNonNegative(value) {
      return Math.max(0, value);
  }

  function syncInputs(param, value) {
      const finalValue = param === "r" ? value : clampNonNegative(value);
      controls[param].slider.value = finalValue;
      controls[param].input.value = finalValue;
  }

  function updateDynamics() {
      const f = clampNonNegative(parseFloat(controls.f.input.value) || 0);
      const z = clampNonNegative(parseFloat(controls.z.input.value) || 0);
      const r = parseFloat(controls.r.input.value) || 0;
      dynamics.updateConstants(f, z, r);
  }

  Object.keys(controls).forEach(param => {
      controls[param].slider.addEventListener("input", (e) => {
          syncInputs(param, e.target.value);
          updateDynamics();
      });

      controls[param].input.addEventListener("input", (e) => {
          syncInputs(param, e.target.value);
          updateDynamics();
      });
  });

  document.addEventListener("mousemove", (e) => {
      mousePos = new Vector2(e.clientX, e.clientY);
      target.style.left = `${mousePos.x}px`;
      target.style.top = `${mousePos.y}px`;
  });

  let lastTime = performance.now();
  function animate(currentTime) {
      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const newPos = dynamics.update(deltaTime, mousePos);
      follower.style.left = `${newPos.x}px`;
      follower.style.top = `${newPos.y}px`;
      requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
