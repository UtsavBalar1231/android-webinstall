const DEVICE_NAMES = {
    alioth: "POCO F3 / Redmi K40",
    aliothin: "Mi 11x",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
