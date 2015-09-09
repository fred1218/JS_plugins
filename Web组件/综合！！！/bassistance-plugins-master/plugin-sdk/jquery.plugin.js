// don't declare anything out here in the global namespace
 
(function($) { // create private scope (inside you can use $ instead of jQuery)
 
    // functions and vars declared here are effectively 'singletons'. there will be only a single
    // instance of them and they are not publicly accessible. so this is a good place to declare
    // any immutable items or stateless functions. for example:
    
    function myPrivateHelper() {
        // some helper fn
    };
 
    // next, declare the plugin function
    $.fn.plugin = function(options) {
 
        // functions and vars declared here are created each time your plugn function is invoked
        // and have access to the options passed to your plugin fn
        
        function anotherHelper() {
            // helper fn that has access to 'options'
        };
 
        // iterate the matched nodeset (and return 'this')
        return this.each(function() {
            var $this = $(this);
 
            // functions and vars declared here are created for each matched element. so if
            // your functions need to manage or access per-node state you can define them
            // here and use $this to get at the DOM element
 
        });
 
    };
 
    // finally, I like to expose default plugin options as public so they can be manipulated. one
    // way to do this is to add a property to the already-public plugin fn
 
    $.fn.plugin.defaults = {
        // whatever options you intend to be customizable, for example
        color: 'black'
    };
 
})(jQuery); 