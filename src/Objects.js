export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    } else if (data.gender === 'male') {
        if (!data.hasOwnProperty('income')) {
            data.income = 100000;
        }
    }
    return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const fieldsSet = new Set();

    [obj1, obj2, obj3].forEach((obj) => {
        Object.keys(obj).forEach((key) => fieldsSet.add(key));
    });
    return Array.from(fieldsSet).sort();
}

export function objectClone(obj, count) {
    const clones = [];

    for (let i = 0; i < count; i++) {
        const clone = JSON.parse(JSON.stringify(obj));
        clone.id = i;
        clones.push(clone);
    }

    return clones;
}
