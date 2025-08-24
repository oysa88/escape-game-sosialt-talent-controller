input.onButtonPressed(Button.A, function () {
    velgGruppe += 1
    if (velgGruppe > 8) {
        velgGruppe = 8
    }
    radio.setGroup(velgGruppe)
})
input.onButtonPressed(Button.B, function () {
    if (velgGruppe == 1) {
        radio.sendNumber(41)
    } else if (velgGruppe == 2) {
        radio.sendNumber(42)
    } else if (velgGruppe == 3) {
        radio.sendNumber(43)
    } else if (velgGruppe == 4) {
        radio.sendNumber(44)
    } else if (velgGruppe == 5) {
        radio.sendNumber(45)
    } else if (velgGruppe == 6) {
        radio.sendNumber(46)
    } else if (velgGruppe == 7) {
        radio.sendNumber(47)
    } else if (velgGruppe == 8) {
        radio.sendNumber(48)
    }
})
let velgGruppe = 0
velgGruppe = 1
