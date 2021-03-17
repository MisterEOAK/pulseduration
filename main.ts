pins.onPulsed(DigitalPin.P0, PulseValue.High, () => {
    basic.showNumber(pins.pulseDuration());
});
