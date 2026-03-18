// Small builder helpers keep the project data readable without changing its shape.
export function githubLink(url, label = "GitHub") {
    return { label, url, icon: "github" };
}

export function steamLink(url, label = "Steam") {
    return { label, url, icon: "steam" };
}

export function wordpressLink(url, label = "Wordpress") {
    return { label, url, icon: "wordpress" };
}

export function globeLink(url, label) {
    return { label, url, icon: "globe" };
}

export function externalLink(url, label) {
    return { label, url, icon: "external" };
}

export function gamepadLink(url, label) {
    return { label, url, icon: "gamepad" };
}

export function videoMedia(title, src) {
    return { type: "video", title, src };
}

export function youtubeMedia(title, src) {
    return { type: "youtube", title, src };
}

export function imageMedia(title, src) {
    return { type: "image", title, src };
}

export function referenceGroup(title, items) {
    return { title, items };
}
