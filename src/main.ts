// @ts-ignore
import core from "./core/index.ts"
// @ts-ignore
import {RelaxOption} from "./types"


class Relax{
    constructor(option: RelaxOption) {
        new core(option)
    }
}

export default Relax;
