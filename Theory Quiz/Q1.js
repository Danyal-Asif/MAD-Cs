

var obj={
    foo:"bar",
    func: function(){
        var self=this;
        console.log("Outer func: this.foo="+this.foo);
        //we see bar as output because this in object method refers to the object and thus accessing its attributes.
        console.log("Outer func: self.foo="+self.foo);
        // output is bar the value of foo because self has been assigned this which refers to the object obj.
        (function(){
            console.log("inner func: this.foo="+this.foo);
            // the function is local, the output is undefined beacuse this refers to the function object which has no attribute foo.
            console.log("inner func: this.foo="+self.foo);}
            // output is bar, since the function is local and so is self attribute which furthur refers to object  of obj.
            ());  }};
obj.func();