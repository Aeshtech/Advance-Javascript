class LRUCacheArray{
    // this.capacity =
    constructor(capacity){
        this.capacity = capacity;
        this.cache = [];
    }

    add(data){
        const indexOfItem = this.cache.indexOf(data);
        if(indexOfItem > -1){
            this.cache.splice(indexOfItem, 1);
        }

        //remove least used item if cache size greater than capacity
        if (this.cache.length >= this.capacity) {
            this.cache.pop();
        }
        this.cache.unshift(data);
    }

    get(index){
        
    }
}