Object.defineProperty(Object.prototype, 'mergeDeepRight', {
    value(core) {
        for (key of Object.keys(this)) {
            if (key in core) {
                if (typeof this[key] == "object") {
                    if (Array.isArray(this[key])) {
                        
                        this[key] = this[key].concat(core[key])
                        
                    } else {
                        this[key] = this[key].mergeDeepRight(core[key])
                    }
                } else {
                    this[key] = core[key]
                }
            }
        }
        return this
    }
})

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

console.log(JSON.stringify(
    data.mergeDeepRight({
        age: 40,
        contact: {
            email: 'baa@example.com',
            favorite: true,
            meta: {
                tags: ['vip']
            }
        }
    })));