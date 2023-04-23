import Per from "./person.js";

class Hero extends Per{
    title = "default title";
    firstname = "default firstname";
    lastname = "default lastname";
    #power = 5;
    static version = 101;
    constructor(htitle, hfname, hlname, hcw){
        super(hcw);
        this.title = htitle;
        this.firstname = hfname;
        this.lastname = hlname;
    };
    fullname(){
        return this.firstname+" "+this.lastname;
    };
    get power(){
        return this.#power;
    };
    set power(npower){
        this.#power = npower;
    };
};

export { Hero };