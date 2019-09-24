import getOptions from "./get-options";

function inserted(el, { value, arg, modifiers }, { context: component }) {
  console.log("value", value);
  console.log(typeof value);
  if (!value || typeof value !== "function") {
    console.warn("v-busy should received a function as value");
    return;
  }
  console.log("modifiers", modifiers);
  // const options = getOptions(modifiers);

  const config = getAttribute("busy-config") || {};
  const onBusyStart = getAttribute("on-busy-start") || null;
  const onBusyStop = getAttribute("on-busy-stop") || null;

  console.log("config", config.message);

  if (component && component.$el === el) {
    component.$once("hook:deactivated", () => {
      unbind(el);
      component.$once("hook:activated", () => {
        inserted(el, { value, arg, modifiers }, { context: component });
      });
    });
  }

  function getAttribute(name) {
    const expr = el.getAttribute(name);
    let result = undefined;
    if (expr) {
      if (component[expr]) {
        result = component[expr];
      } else {
        try {
          result = eval(`(${expr})`);
        } catch (error) {
          result = expr;
        }
      }
    }
    return result;
  }
}

function unbind(el) {
  if (el.__visibility__listener__) {
    el.__visibility__listener__.disconnect();
  }
  if (!el) {
    return;
  }
}

export default {
  inserted,
  unbind
};
