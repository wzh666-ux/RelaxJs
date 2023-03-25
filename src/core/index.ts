import { RelaxOption } from "../types";
import {sealed, test} from "./parse";


@sealed
class Core{
    constructor(option: RelaxOption) {
        console.log('helloworld RollUp','挂载的app输入->',option)

    }
    @test(true)
    at(){

    }
}


export default Core;
