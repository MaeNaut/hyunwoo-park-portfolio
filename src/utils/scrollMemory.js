const scrollStoragePrefix = "portfolio-scroll:";

function getScrollStorageKey(pathname) {
    return `${scrollStoragePrefix}${pathname}`;
}

export function saveScrollPosition(pathname) {
    if (typeof window === "undefined") {
        return;
    }

    window.sessionStorage.setItem(getScrollStorageKey(pathname), String(window.scrollY));
}

export function readScrollPosition(pathname) {
    if (typeof window === "undefined") {
        return 0;
    }

    const savedValue = window.sessionStorage.getItem(getScrollStorageKey(pathname));
    const parsedValue = Number(savedValue);

    return Number.isFinite(parsedValue) ? parsedValue : 0;
}
