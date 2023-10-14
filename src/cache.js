class Cache{

    constructor()
    {
        this.data = new Map();
        this.log = [];
    }

    set(key, value, _queries = 1)
    {
        this.data.set(key, {value: value, queries: _queries})
    }
    
    get(key)
    {
        const res = this.data.get(key);

        if(res == undefined)
            return null;
        if(res.queries == 0)
        {
            this.data.delete(key);
            return null;
        }

        res.queries--;
        this.log.push({key: key, value: res.value, queries: res.queries})
        return res.value;

    }

    logs()
    {
        return this.log;
    }

}
export {Cache}