const ISSERVER = typeof window === "undefined";
export const setLocal = (localKey, localValue, removeFromSession) => {
  if (!ISSERVER) {
    let stringifyIfObj =
      typeof localValue === "object" || typeof localValue === "array"
        ? JSON.stringify(localValue)
        : localValue;

    localStorage.setItem(localKey, stringifyIfObj);
    removeFromSession && removeSession(localKey);
    return getLocal(localKey);
  }
};

export const getLocal = (localKey) => {
  if (!ISSERVER) {
    const getValue = localStorage.getItem(localKey);
    let returnValue;
    try {
      returnValue = JSON.parse(getValue);
    } catch (e) {
      returnValue = getValue;
    }
    return returnValue;
  }
};

export const removeLocal = (localKey) => {
  if (!ISSERVER) {
    localStorage.removeItem(localKey);
    return true;
  }
};

// Set Session and get return with session value
export const setSession = (sessionKey, sessionValue, removeFromLocal) => {
  if (!ISSERVER) {
    let stringifyIfObj =
      typeof sessionValue === "object" || typeof sessionValue === "array"
        ? JSON.stringify(sessionValue)
        : sessionValue;

    sessionStorage.setItem(sessionKey, stringifyIfObj);
    removeFromLocal && removeLocal(sessionKey);
    return getSession(sessionKey);
  }
};

// Get Session
export const getSession = (sessionKey) => {
  if (!ISSERVER) {
    const getValue = sessionStorage.getItem(sessionKey);
    let returnValue;
    try {
      returnValue = JSON.parse(getValue);
    } catch (e) {
      returnValue = getValue;
    }
    return returnValue;
  }
};

// Remove Session
export const removeSession = (sessionKey) => {
  if (!ISSERVER) {
    sessionStorage.removeItem(sessionKey);
    return true;
  }
};

// Set Both Local and Session
export const setBoth = (key, value) => {
  setLocal(key, value);
  setSession(key, value);
  return getLocal(key);
};

// checkBoth
export const checkBoth = (key, includeOr) => {
  if (!ISSERVER) {
    const checkLocal = getLocal(key);
    const checkSession = getSession(key);

    if (includeOr) {
      if (checkLocal || checkSession) return true;
      else return false;
    } else {
      if (checkLocal && checkSession) return true;
      else return false;
    }
  }
};

// Remove Both Local and Session
export const removeBoth = (key) => {
  removeLocal(key);
  removeSession(key);
  return true;
};
