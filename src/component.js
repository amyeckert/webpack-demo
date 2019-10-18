export default (text = "Hello out there, world") => {
  const container = document.createElement("div");

  container.innerHTML = text

  return container;
};