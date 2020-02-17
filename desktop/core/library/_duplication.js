'use strict'

const Operator = require('../operator')

function OperatorComment(orca, x, y, passive) {
    Operator.call(this, orca, x, y, '$', passive)

    this.name = 'dublicate'
    this.info = 'Dublicates input of `N`, `S`, `W`, `E`, and `Z`.'

    this.ports.input.val = {
        x: 1,
        y: 0,
        unlock: true
    }
    this.ports.output = {
        x: 0,
        y: 1
    }

    this.run = function() {
        const val = this.listen(this.ports.input.val)
        const chr = ['1', 'W', 'S', 'N', 'E', 'Z', '*']
        const res = chr.indexOf(val.toUpperCase()) > -1 ? '*' : '.'
        this.output(`${res}`)
    }
}

module.exports = OperatorB