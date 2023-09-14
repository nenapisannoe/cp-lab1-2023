class Cache{
    cache = new Map();
    hits = new Map();
    
    constructor(messagesBeforeTrash)
    {
        this.messagesBeforeTrash = messagesBeforeTrash;
    }

    showCache()
    {
        if(this.messagesBeforeTrash == 0)
        {
            return null;
        }
    }

}
export {Cache}