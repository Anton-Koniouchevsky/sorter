class Sorter {
    constructor() {
        this.array = [];
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        let subArray = indices.sort().map(index => this.array[index]).sort(this.compareFunction || ((left, right) => left - right));
        indices.forEach((index, iterator) => this.array[index] = subArray[iterator]);
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;