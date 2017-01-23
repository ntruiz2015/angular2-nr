export class Serialize {
    fillFromJson (json: string) {
       let obj = JSON.parse(json);
       for (let propName in obj) {
           this[propName] = obj[propName];
       }
       return obj;
    }
}