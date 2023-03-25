
export function sealed(target: any){
    console.log(target.prototype)

}

export function test(b: boolean){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log(b, target, propertyKey, descriptor)
    }
}
