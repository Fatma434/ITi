
// Configuration Singleton
var ConfigurationSingleton = (function () {
    var instance;
  
    function Configuration() {
      // Private variables
      var theme = "default";
      var version = "1.0";
      var myThemeName = "MyTheme";
  
      // Public methods to access the configuration values
      this.getTheme = function () {
        return theme;
      };
  
      this.setTheme = function (newTheme) {
        theme = newTheme;
      };
  
      this.getVersion = function () {
        return version;
      };
  
      this.getMyThemeName = function () {
        return myThemeName;
      };
    }
  
    return {
      // Public method for getting the singleton instance
      getInstance: function () {
        if (!instance) {
          instance = new Configuration();
        }
        return instance;
      },
    };
  })();
  
  // Example usage
  var configInstance1 = ConfigurationSingleton.getInstance();
  var configInstance2 = ConfigurationSingleton.getInstance();
  
  
  console.log(configInstance1 === configInstance2); // true
  
  
  console.log("Theme:", configInstance1.getTheme()); // default
  console.log("Version:", configInstance1.getVersion()); // 1.0
  console.log("MyThemeName:", configInstance1.getMyThemeName()); // MyTheme
  
  
  configInstance1.setTheme("dark");
  console.log("Theme after modification:", configInstance2.getTheme()); // dark
