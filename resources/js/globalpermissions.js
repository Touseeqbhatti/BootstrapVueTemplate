// globalFunctions.js

// Your global function
const can = function (permission) {
        const permissions = JSON.parse(localStorage.getItem("permission_names"));
        //   return console.log(permissions)
        return permissions.includes(permission);
    //   console.log("Can Function");

  };
  
  // Create a Vue mixin to extend the prototype
  const GlobalFunctionsMixin = {
    methods: {
      $can: can,
    },
  };
  
  export default GlobalFunctionsMixin;
  