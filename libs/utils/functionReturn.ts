"use strict";

export const send_ok: Function = (msg: string = "", data: object = {}) => {
  return {
    result: "ok",
    message: msg,
    data: data
  };
};

export const send_fail: Function = (msg: string = "", data: object = {}) => {
  return {
    result: "fail",
    message: msg,
    data: data
  };
};

export const check_function_params: Function = (param_array: any[]) => {
  if (!Array.isArray(param_array)) {
    return send_fail("array type param required", null);
  }

  if (param_array.length < 1) {
    return send_fail("invalid parameter array length", null);
  }

  if (param_array.includes(false)) {
    return send_fail("false", param_array);
  } else {
    return send_ok("true", null);
  }
};

module.exports = { send_ok, send_fail, check_function_params };
