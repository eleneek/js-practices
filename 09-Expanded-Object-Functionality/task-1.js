Object.defineProperty(Object.prototype, 'extend', {
    value(core) {
        for (let key of Object.keys(core)) { 
            if (!this.hasOwnProperty(key)) {                
                Object.defineProperty(this, key, Object.getOwnPropertyDescriptor(core, key))   
            } 
        }
    }
})
const data = { a: 'a' };
const source = { a: 'A', b: 'b' };

Object.defineProperty(source, 'b', { writable: false });

data.extend(source);

console.log(data); // { a: 'a', b: 'b' }

